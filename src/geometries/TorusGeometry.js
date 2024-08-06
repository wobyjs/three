import { TorusGeometry } from 'three/src/geometries/TorusGeometry.js';
export { TorusGeometry } from 'three/src/geometries/TorusGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.TorusGeometry = TorusGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TorusGeometry.d.ts
/**
 * A class for generating torus geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.TorusGeometry(10, 3, 16, 100,
 * const material = new THREE.MeshBasicMaterial({
 * color
 *
 * const torus = new THREE.Mesh(geometry, material,
 * scene.add(torus,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js}
 */
consParams.torusGeometry = [
    /**
     * Create a new instance of {@link TorusGeometry}
     * @param radius Radius of the torus, from the center of the torus to the center of the tube. Expects a `Float`. Default `1`.
     * @param tube Radius of the tube. Expects a `Float`. Default `0.4`.
     * @param radialSegments Expects a `Integer`.Default is `12`.
     * @param tubularSegments Expects a `Integer`. Default `48`.
     * @param arc Central angle. Expects a `Float`. Default `Math.PI * 2`
     */
    'radius',
    'tube',
    'radialSegments',
    'tubularSegments',
    'arc',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TorusGeometry.d.ts
/**
 * A class for generating torus geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * })
 * const torus = new THREE.Mesh(geometry, material)
 * scene.add(torus)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js | Source}
 */
objParams.torusGeometry = [...objParams.bufferGeometry,
].distinct();
defaults.torusGeometry = { tube: 0.4, radialSegments: 12, tubularSegments: 48, arc: Math.PI * 2, };
