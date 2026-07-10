import {
	Box3,
	CubeCamera,
	FloatType,
	HalfFloatType,
	LinearFilter,
	Mesh,
	NearestFilter,
	Object3D,
	OrthographicCamera,
	PlaneGeometry,
	RGBAFormat,
	Scene,
	ShaderMaterial,
	Vector3,
	Vector4,
	WebGL3DRenderTarget,
	WebGLCubeRenderTarget,
	WebGLRenderTarget
} from 'three';

// Shared fullscreen-quad scene / camera
let _scene: Scene | null = null;
let _camera: OrthographicCamera | null = null;
let _mesh: Mesh | null = null;

// SH projection material (depends on cubemapSize)
let _shMaterial: ShaderMaterial | null = null;
let _lastCubemapSize = 0;

// Repack materials (one per output sub-volume / texture index)
let _repackMaterials: ShaderMaterial[] | null = null;

// Cached bake resources
let _cubeRenderTarget: WebGLCubeRenderTarget | null = null;
let _cubeCamera: CubeCamera | null = null;
let _cachedCubemapSize = 0;
let _cachedNear = 0;
let _cachedFar = 0;

// Cached batch render target
let _batchTarget: WebGLRenderTarget | null = null;
let _batchTargetProbes = 0;

// Reusable temp objects
const _position = new Vector3();
const _size = new Vector3();
const _currentViewport = new Vector4();
const _currentScissor = new Vector4();

// Number of padding texels added at each boundary of every sub-volume in the atlas.
const ATLAS_PADDING = 1;

/**
 * A 3D grid of L2 Spherical Harmonic irradiance probes that provides
 * position-dependent diffuse global illumination.
 *
 * Note that this class can only be used with {@link WebGLRenderer}.
 *
 * All seven packed SH sub-volumes are stored in a **single** RGBA
 * `WebGL3DRenderTarget` using a texture-atlas layout along the Z axis.
 */
class LightProbeGrid extends Object3D {

	isLightProbeGrid: boolean = true;
	width: number;
	height: number;
	depth: number;
	resolution: Vector3;
	boundingBox: Box3;
	texture: any = null;
	_renderTarget: WebGL3DRenderTarget | null = null;

	constructor(width = 1, height = 1, depth = 1, widthProbes?: number, heightProbes?: number, depthProbes?: number) {
		super();

		this.width = width;
		this.height = height;
		this.depth = depth;

		this.resolution = new Vector3(
			widthProbes !== undefined ? widthProbes : Math.max(2, Math.round(width) + 1),
			heightProbes !== undefined ? heightProbes : Math.max(2, Math.round(height) + 1),
			depthProbes !== undefined ? depthProbes : Math.max(2, Math.round(depth) + 1)
		);

		this.boundingBox = new Box3();
		this.updateBoundingBox();
	}

	getProbePosition(ix: number, iy: number, iz: number, target: Vector3): Vector3 {
		const pos = this.position;
		const res = this.resolution;
		const w = this.width, h = this.height, d = this.depth;

		target.set(
			res.x > 1 ? pos.x - w / 2 + ix * w / (res.x - 1) : pos.x,
			res.y > 1 ? pos.y - h / 2 + iy * h / (res.y - 1) : pos.y,
			res.z > 1 ? pos.z - d / 2 + iz * d / (res.z - 1) : pos.z
		);

		return target;
	}

	updateBoundingBox() {
		_size.set(this.width, this.height, this.depth);
		this.boundingBox.setFromCenterAndSize(this.position, _size);
	}

	bake(renderer: any, scene: Scene, options: { cubemapSize?: number; near?: number; far?: number; bounces?: number } = {}) {
		const { bounces = 0 } = options;
		const { cubeRenderTarget, cubeCamera } = _ensureBakeResources(options);

		this._ensureTextures();
		this.updateBoundingBox();

		const res = this.resolution;
		const totalProbes = res.x * res.y * res.z;

		const batchTarget = _ensureBatchTarget(totalProbes);

		const currentRenderTarget = renderer.getRenderTarget();
		renderer.getViewport(_currentViewport);
		renderer.getScissor(_currentScissor);
		const currentScissorTest = renderer.getScissorTest();

		const currentMatrixWorldAutoUpdate = scene.matrixWorldAutoUpdate;
		if (currentMatrixWorldAutoUpdate === true) {
			scene.updateMatrixWorld(true);
			scene.matrixWorldAutoUpdate = false;
		}

		const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;
		renderer.shadowMap.autoUpdate = false;
		renderer.shadowMap.needsUpdate = true;

		_ensureRepackResources();

		const paddedSlices = res.z + 2 * ATLAS_PADDING;
		const rt = this._renderTarget!;

		for (let pass = 0; pass <= bounces; pass++) {
			this.visible = pass > 0;

			batchTarget.scissorTest = false;
			batchTarget.viewport.set(0, 0, 9, totalProbes);
			renderer.setRenderTarget(batchTarget);
			renderer.clear();

			batchTarget.scissorTest = true;

			for (let iz = 0; iz < res.z; iz++) {
				for (let iy = 0; iy < res.y; iy++) {
					for (let ix = 0; ix < res.x; ix++) {
						const probeIndex = ix + iy * res.x + iz * res.x * res.y;

						this.getProbePosition(ix, iy, iz, _position);
						cubeCamera.position.copy(_position);
						cubeCamera.update(renderer, scene);

						_shMaterial!.uniforms.envMap.value = cubeRenderTarget.texture;
						_mesh!.material = _shMaterial!;
						batchTarget.viewport.set(0, probeIndex, 9, 1);
						batchTarget.scissor.set(0, probeIndex, 9, 1);
						renderer.setRenderTarget(batchTarget);
						renderer.render(_scene!, _camera!);
					}
				}
			}

			rt.scissorTest = false;
			rt.viewport.set(0, 0, res.x, res.y);

			for (let t = 0; t < 7; t++) {
				_repackMaterials![t].uniforms.batchTexture.value = batchTarget.texture;
				_repackMaterials![t].uniforms.resolution.value.copy(res);

				for (let iz = 0; iz < res.z; iz++) {
					_repackMaterials![t].uniforms.sliceZ.value = iz;
					_mesh!.material = _repackMaterials![t];
					renderer.setRenderTarget(rt, t * paddedSlices + ATLAS_PADDING + iz);
					renderer.render(_scene!, _camera!);
				}

				_repackMaterials![t].uniforms.sliceZ.value = 0;
				_mesh!.material = _repackMaterials![t];
				renderer.setRenderTarget(rt, t * paddedSlices);
				renderer.render(_scene!, _camera!);

				_repackMaterials![t].uniforms.sliceZ.value = res.z - 1;
				_mesh!.material = _repackMaterials![t];
				renderer.setRenderTarget(rt, t * paddedSlices + ATLAS_PADDING + res.z);
				renderer.render(_scene!, _camera!);
			}
		}

		renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;
		renderer.setRenderTarget(currentRenderTarget);
		renderer.setViewport(_currentViewport);
		renderer.setScissor(_currentScissor);
		renderer.setScissorTest(currentScissorTest);
		scene.matrixWorldAutoUpdate = currentMatrixWorldAutoUpdate;

		this.visible = true;
	}

	_ensureTextures() {
		if (this._renderTarget !== null) return;

		const res = this.resolution;
		const nx = res.x, ny = res.y, nz = res.z;
		const atlasDepth = 7 * (nz + 2 * ATLAS_PADDING);

		const rt = new WebGL3DRenderTarget(nx, ny, atlasDepth, {
			format: RGBAFormat,
			type: FloatType,
			minFilter: LinearFilter,
			magFilter: LinearFilter,
			generateMipmaps: false,
			depthBuffer: false
		});

		this._renderTarget = rt;
		this.texture = rt.texture;
	}

	dispose() {
		if (this._renderTarget !== null) {
			this._renderTarget.dispose();
			this._renderTarget = null;
			this.texture = null;
		}
	}
}

function _ensureScene() {
	if (_scene === null) {
		_camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
		_mesh = new Mesh(new PlaneGeometry(2, 2));
		_scene = new Scene();
		_scene.add(_mesh);
	}
}

function _ensureGPUResources(cubemapSize: number) {
	_ensureScene();

	if (cubemapSize !== _lastCubemapSize) {
		if (_shMaterial !== null) _shMaterial.dispose();

		_shMaterial = new ShaderMaterial({
			defines: {
				CUBEMAP_SIZE: cubemapSize
			},
			uniforms: {
				envMap: { value: null }
			},
			vertexShader: `
				void main() {
					gl_Position = vec4( position.xy, 0.0, 1.0 );
				}
			`,
			fragmentShader: `
				#include <common>

				uniform samplerCube envMap;

				void main() {

					int coefIndex = int( gl_FragCoord.x );

					vec3 accum0 = vec3( 0.0 );
					vec3 accum1 = vec3( 0.0 );
					vec3 accum2 = vec3( 0.0 );
					vec3 accum3 = vec3( 0.0 );
					vec3 accum4 = vec3( 0.0 );
					vec3 accum5 = vec3( 0.0 );
					vec3 accum6 = vec3( 0.0 );
					vec3 accum7 = vec3( 0.0 );
					vec3 accum8 = vec3( 0.0 );
					float totalWeight = 0.0;
					float pixelSize = 2.0 / float( CUBEMAP_SIZE );

					for ( int face = 0; face < 6; face ++ ) {

						for ( int iy = 0; iy < CUBEMAP_SIZE; iy ++ ) {

							for ( int ix = 0; ix < CUBEMAP_SIZE; ix ++ ) {

								float col = ( float( ix ) + 0.5 ) * pixelSize - 1.0;
								float row = 1.0 - ( float( iy ) + 0.5 ) * pixelSize;

								vec3 coord;

								if ( face == 0 ) coord = vec3( 1.0, row, -col );
								else if ( face == 1 ) coord = vec3( -1.0, row, col );
								else if ( face == 2 ) coord = vec3( col, 1.0, -row );
								else if ( face == 3 ) coord = vec3( col, -1.0, row );
								else if ( face == 4 ) coord = vec3( col, row, 1.0 );
								else coord = vec3( -col, row, -1.0 );

								float lengthSq = dot( coord, coord );
								float weight = 4.0 / ( sqrt( lengthSq ) * lengthSq );
								totalWeight += weight;

								vec3 dir = normalize( coord );
								vec3 cw = textureCube( envMap, coord ).rgb * weight;

								accum0 += cw * 0.282095;
								accum1 += cw * ( 0.488603 * dir.y );
								accum2 += cw * ( 0.488603 * dir.z );
								accum3 += cw * ( 0.488603 * dir.x );
								accum4 += cw * ( 1.092548 * ( dir.x * dir.y ) );
								accum5 += cw * ( 1.092548 * ( dir.y * dir.z ) );
								accum6 += cw * ( 0.315392 * ( 3.0 * dir.z * dir.z - 1.0 ) );
								accum7 += cw * ( 1.092548 * ( dir.x * dir.z ) );
								accum8 += cw * ( 0.546274 * ( dir.x * dir.x - dir.y * dir.y ) );

							}

						}

					}

					float norm = 4.0 * PI / totalWeight;

					vec3 accum;
					if ( coefIndex == 0 ) accum = accum0;
					else if ( coefIndex == 1 ) accum = accum1;
					else if ( coefIndex == 2 ) accum = accum2;
					else if ( coefIndex == 3 ) accum = accum3;
					else if ( coefIndex == 4 ) accum = accum4;
					else if ( coefIndex == 5 ) accum = accum5;
					else if ( coefIndex == 6 ) accum = accum6;
					else if ( coefIndex == 7 ) accum = accum7;
					else accum = accum8;

					gl_FragColor = vec4( accum * norm, 1.0 );

				}
			`
		});

		_lastCubemapSize = cubemapSize;
	}
}

function _ensureRepackResources() {
	if (_repackMaterials !== null) return;

	_ensureScene();

	const repackVertexShader = `
		void main() {
			gl_Position = vec4( position.xy, 0.0, 1.0 );
		}
	`;

	_repackMaterials = [];

	for (let t = 0; t < 7; t++) {
		_repackMaterials[t] = new ShaderMaterial({
			defines: {
				TEXTURE_INDEX: t
			},
			uniforms: {
				batchTexture: { value: null },
				resolution: { value: new Vector3() },
				sliceZ: { value: 0 }
			},
			vertexShader: repackVertexShader,
			fragmentShader: `
				uniform sampler2D batchTexture;
				uniform vec3 resolution;
				uniform int sliceZ;

				void main() {

					int ix = int( gl_FragCoord.x );
					int iy = int( gl_FragCoord.y );
					int iz = sliceZ;

					int probeIndex = ix + iy * int( resolution.x ) + iz * int( resolution.x ) * int( resolution.y );

					vec4 c0 = texelFetch( batchTexture, ivec2( 0, probeIndex ), 0 );
					vec4 c1 = texelFetch( batchTexture, ivec2( 1, probeIndex ), 0 );
					vec4 c2 = texelFetch( batchTexture, ivec2( 2, probeIndex ), 0 );
					vec4 c3 = texelFetch( batchTexture, ivec2( 3, probeIndex ), 0 );
					vec4 c4 = texelFetch( batchTexture, ivec2( 4, probeIndex ), 0 );
					vec4 c5 = texelFetch( batchTexture, ivec2( 5, probeIndex ), 0 );
					vec4 c6 = texelFetch( batchTexture, ivec2( 6, probeIndex ), 0 );
					vec4 c7 = texelFetch( batchTexture, ivec2( 7, probeIndex ), 0 );
					vec4 c8 = texelFetch( batchTexture, ivec2( 8, probeIndex ), 0 );

					#if TEXTURE_INDEX == 0
						gl_FragColor = vec4( c0.rgb, c1.r );
					#elif TEXTURE_INDEX == 1
						gl_FragColor = vec4( c1.gb, c2.rg );
					#elif TEXTURE_INDEX == 2
						gl_FragColor = vec4( c2.b, c3.rgb );
					#elif TEXTURE_INDEX == 3
						gl_FragColor = vec4( c4.rgb, c5.r );
					#elif TEXTURE_INDEX == 4
						gl_FragColor = vec4( c5.gb, c6.rg );
					#elif TEXTURE_INDEX == 5
						gl_FragColor = vec4( c6.b, c7.rgb );
					#else
						gl_FragColor = vec4( c8.rgb, 0.0 );
					#endif

				}
			`
		});
	}
}

function _ensureBakeResources(options: { cubemapSize?: number; near?: number; far?: number }) {
	const {
		cubemapSize = 8,
		near = 0.1,
		far = 100
	} = options;

	if (_cubeRenderTarget === null || cubemapSize !== _cachedCubemapSize || near !== _cachedNear || far !== _cachedFar) {
		if (_cubeRenderTarget !== null) _cubeRenderTarget.dispose();

		_cubeRenderTarget = new WebGLCubeRenderTarget(cubemapSize, { type: HalfFloatType });
		_cubeCamera = new CubeCamera(near, far, _cubeRenderTarget);
		_cachedCubemapSize = cubemapSize;
		_cachedNear = near;
		_cachedFar = far;
	}

	_ensureGPUResources(cubemapSize);

	return { cubeRenderTarget: _cubeRenderTarget!, cubeCamera: _cubeCamera! };
}

function _ensureBatchTarget(totalProbes: number) {
	if (_batchTarget === null || _batchTargetProbes !== totalProbes) {
		if (_batchTarget !== null) _batchTarget.dispose();

		_batchTarget = new WebGLRenderTarget(9, totalProbes, {
			type: FloatType,
			minFilter: NearestFilter,
			magFilter: NearestFilter,
			depthBuffer: false
		});

		_batchTargetProbes = totalProbes;
	}

	return _batchTarget;
}

export { LightProbeGrid };
