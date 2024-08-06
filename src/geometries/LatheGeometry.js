import { LatheGeometry } from 'three/src/geometries/LatheGeometry.js';
export { LatheGeometry } from 'three/src/geometries/LatheGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.LatheGeometry = LatheGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\LatheGeometry.d.ts
/**
 * Creates meshes with axial symmetry like vases
 * @remarks
 * The lathe rotates around the Y axis.
 * @example
 * ```typescript
 * const points = ,
 * for (let i = 0, i & lt, 10, i++) {
 * points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5,
(i - 5) * 2),
 * }
 * const geometry = new THREE.LatheGeometry(points,
 * const material = new THREE.MeshBasicMaterial({
 * color
 *
 * const lathe = new THREE.Mesh(geometry, material,
 * scene.add(lathe,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/LatheGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/LatheGeometry.js}
 */
consParams.latheGeometry = [
    /**
     * This creates a {@link LatheGeometry} based on the parameters.
     * @param points Array of Vector2s. The x-coordinate of each point must be greater than zero.
     *           default `[new Vector2(0,
-0.5), new Vector2(0.5, 0), new Vector2(0, 0.5)]` _which creates a simple diamond shape_.
     * @param segments The number of circumference segments to generate. Expects a `Integer`. Default `12`.
     * @param phiStart The starting angle in radians. Expects a `Float`. Default `0`.
     * @param phiLength The radian (0 to 2*PI) range of the lathed section 2*PI is a closed lathe, less than 2PI is a portion. Expects a `Float`. Default `Math.PI * 2`.
     */
    'points',
    'segments',
    'phiStart',
    'phiLength',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\LatheGeometry.d.ts
/**
 * Creates meshes with axial symmetry like vases
 * @remarks
 * The lathe rotates around the Y axis.
 * @example
 * ```typescript
 * const points = [].distinct()
 * for (let i = 0; i & lt; 10; i++) {
 *     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2))
 * }
 * const geometry = new THREE.LatheGeometry(points)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * })
 * const lathe = new THREE.Mesh(geometry, material)
 * scene.add(lathe)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/LatheGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/LatheGeometry.js | Source}
 */
objParams.latheGeometry = [...objParams.bufferGeometry,
].distinct();
defaults.latheGeometry = { points: [[0, -0.5], [0.5, 0], [0, 0.5]], segments: 12, phiStart: 0, phiLength: 2 * Math.PI, };
