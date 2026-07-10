import { BufferAttribute } from 'three';

/**
 * A plugin for `3d-tiles-renderer` that computes creased vertex normals for the
 * geometry of each loaded tile: smooth normals everywhere except where faces meet
 * at an angle greater than the crease angle.
 */
class TileCreasedNormalsPlugin {

	creaseAngle: number;
	_requestId: number;
	_pending: Map<number, (data: any) => void>;
	_worker: Worker;

	constructor({ creaseAngle = Math.PI / 3 }: { creaseAngle?: number } = {}) {
		this.creaseAngle = creaseAngle;
		this._requestId = 0;
		this._pending = new Map();

		const workerCode = `
			${computeCreasedNormals.toString()}

			onmessage = ( { data } ) => {
				const { id, positions, creaseAngle } = data;
				const normals = computeCreasedNormals( positions, creaseAngle );
				postMessage( { id, positions, normals }, [ positions.buffer, normals.buffer ] );
			};
		`;

		const blob = new Blob([workerCode], { type: 'application/javascript' });
		this._worker = new Worker(URL.createObjectURL(blob));
		this._worker.onmessage = ({ data }) => {
			this._pending.get(data.id)?.(data);
			this._pending.delete(data.id);
		};
	}

	processTileModel(scene: any) {
		const promises: Promise<void>[] = [];

		scene.traverse((mesh: any) => {
			if (mesh.geometry) {
				promises.push(this._processMesh(mesh));
			}
		});

		return Promise.all(promises);
	}

	_processMesh(mesh: any) {
		const geometry = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry;
		const positions = geometry.attributes.position.array;

		const id = this._requestId++;
		this._worker.postMessage(
			{ id, positions, creaseAngle: this.creaseAngle },
			[positions.buffer]
		);

		return new Promise<void>((resolve) => {
			this._pending.set(id, ({ positions, normals }: any) => {
				geometry.setAttribute('position', new BufferAttribute(positions, 3));
				geometry.setAttribute('normal', new BufferAttribute(normals, 3));
				mesh.geometry = geometry;
				resolve();
			});
		});
	}

	dispose() {
		this._worker.terminate();
	}
}

function computeCreasedNormals(positions: Float32Array, creaseAngle: number) {
	const creaseDot = Math.cos(creaseAngle);
	const hashMultiplier = (1 + 1e-10) * 1e2;

	const vertexCount = positions.length / 3;
	const faceCount = vertexCount / 3;

	const faceNormals = new Float64Array(faceCount * 3);
	for (let f = 0; f < faceCount; f++) {
		const f9 = 9 * f;
		const ax = positions[f9 + 0], ay = positions[f9 + 1], az = positions[f9 + 2];
		const bx = positions[f9 + 3], by = positions[f9 + 4], bz = positions[f9 + 5];
		const cx = positions[f9 + 6], cy = positions[f9 + 7], cz = positions[f9 + 8];

		const v1x = cx - bx, v1y = cy - by, v1z = cz - bz;
		const v2x = ax - bx, v2y = ay - by, v2z = az - bz;

		const nx = v1y * v2z - v1z * v2y;
		const ny = v1z * v2x - v1x * v2z;
		const nz = v1x * v2y - v1y * v2x;

		const invLength = 1 / (Math.sqrt(nx * nx + ny * ny + nz * nz) || 1);
		faceNormals[3 * f + 0] = nx * invLength;
		faceNormals[3 * f + 1] = ny * invLength;
		faceNormals[3 * f + 2] = nz * invLength;
	}

	const vertexIds = new Int32Array(vertexCount);
	const quantized = new Int32Array(vertexCount * 3);

	let tableSize = 1;
	while (tableSize < vertexCount * 2) tableSize <<= 1;
	const tableMask = tableSize - 1;
	const table = new Int32Array(tableSize);

	let uniqueCount = 0;
	for (let i = 0; i < vertexCount; i++) {
		const i3 = 3 * i;
		const qx = ~~(positions[i3 + 0] * hashMultiplier);
		const qy = ~~(positions[i3 + 1] * hashMultiplier);
		const qz = ~~(positions[i3 + 2] * hashMultiplier);

		let slot = (Math.imul(qx, 73856093) ^ Math.imul(qy, 19349663) ^ Math.imul(qz, 83492791)) & tableMask;

		while (true) {
			const id = table[slot];

			if (id === 0) {
				const q3 = 3 * uniqueCount;
				quantized[q3 + 0] = qx;
				quantized[q3 + 1] = qy;
				quantized[q3 + 2] = qz;

				table[slot] = uniqueCount + 1;
				vertexIds[i] = uniqueCount++;
				break;
			}

			const q3 = 3 * (id - 1);

			if (quantized[q3 + 0] === qx && quantized[q3 + 1] === qy && quantized[q3 + 2] === qz) {
				vertexIds[i] = id - 1;
				break;
			}

			slot = (slot + 1) & tableMask;
		}
	}

	const bucketOffsets = new Int32Array(uniqueCount + 1);
	for (let i = 0; i < vertexCount; i++) bucketOffsets[vertexIds[i] + 1]++;
	for (let i = 0; i < uniqueCount; i++) bucketOffsets[i + 1] += bucketOffsets[i];

	const bucketFaces = new Int32Array(vertexCount);
	const bucketCursors = bucketOffsets.slice(0, uniqueCount);
	for (let f = 0; f < faceCount; f++) {
		const f3 = 3 * f;
		bucketFaces[bucketCursors[vertexIds[f3 + 0]]++] = f;
		bucketFaces[bucketCursors[vertexIds[f3 + 1]]++] = f;
		bucketFaces[bucketCursors[vertexIds[f3 + 2]]++] = f;
	}

	const normalArray = new Float32Array(vertexCount * 3);
	for (let f = 0; f < faceCount; f++) {
		const f3 = 3 * f;
		const nx = faceNormals[f3 + 0];
		const ny = faceNormals[f3 + 1];
		const nz = faceNormals[f3 + 2];

		for (let n = 0; n < 3; n++) {
			const i = f3 + n;
			const id = vertexIds[i];

			let sumX = 0, sumY = 0, sumZ = 0;

			for (let k = bucketOffsets[id], end = bucketOffsets[id + 1]; k < end; k++) {
				const o3 = 3 * bucketFaces[k];
				const ox = faceNormals[o3 + 0];
				const oy = faceNormals[o3 + 1];
				const oz = faceNormals[o3 + 2];

				if (nx * ox + ny * oy + nz * oz > creaseDot) {
					sumX += ox;
					sumY += oy;
					sumZ += oz;
				}
			}

			const invLength = 1 / (Math.sqrt(sumX * sumX + sumY * sumY + sumZ * sumZ) || 1);
			normalArray[3 * i + 0] = sumX * invLength;
			normalArray[3 * i + 1] = sumY * invLength;
			normalArray[3 * i + 2] = sumZ * invLength;
		}
	}

	return normalArray;
}

export { TileCreasedNormalsPlugin };
