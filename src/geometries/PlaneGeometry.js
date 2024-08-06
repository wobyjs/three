import { PlaneGeometry } from 'three/src/geometries/PlaneGeometry.js';
export { PlaneGeometry } from 'three/src/geometries/PlaneGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import '../core/BufferGeometry';
import '../../examples/jsm/geometries/ParametricGeometry';
Three.PlaneGeometry = PlaneGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\PlaneGeometry.d.ts
/**
 * A class for generating plane geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.PlaneGeometry(1, 1,
 * const material = new THREE.MeshBasicMaterial({
 * color,
 * side.DoubleSide
 *
 * const plane = new THREE.Mesh(geometry, material,
 * scene.add(plane,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js}
 */
consParams.planeGeometry = [
    /**
     * Create a new instance of {@link PlaneGeometry}
     * @param width Width along the X axis. Expects a `Float`. Default `1`
     * @param height Height along the Y axis. Expects a `Float`. Default `1`
     * @param widthSegments Number of segmented faces along the width of the sides. Expects a `Integer`. Default `1`
     * @param heightSegments Number of segmented faces along the height of the sides. Expects a `Integer`. Default `1`
     */
    'width',
    'height',
    'widthSegments',
    'heightSegments',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\PlaneGeometry.d.ts
/**
 * A class for generating plane geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.PlaneGeometry(1, 1)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00,
 *     side: THREE.DoubleSide
 * })
 * const plane = new THREE.Mesh(geometry, material)
 * scene.add(plane)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/PlaneGeometry.js | Source}
 */
objParams.planeGeometry = [...objParams.bufferGeometry, ...objParams.parametricGeometry,
].distinct();
defaults.planeGeometry = { width: 1, height: 1, widthSegments: 1, heightSegments: 1, };
