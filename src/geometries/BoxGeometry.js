import { BoxGeometry } from 'three/src/geometries/BoxGeometry.js';
export { BoxGeometry } from 'three/src/geometries/BoxGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import '../core/BufferGeometry';
Three.BoxGeometry = BoxGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\BoxGeometry.d.ts
/**
 * {@link BoxGeometry} is a geometry class for a rectangular cuboid with a given 'width',
'height', and 'depth'
 * @remarks On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1,
 * const material = new THREE.MeshBasicMaterial({
 * color
 *
 * const cube = new THREE.Mesh(geometry, material,
 * scene.add(cube,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/BoxGeometry.js}
 */
consParams.boxGeometry = [
    /**
     * Create a new instance of {@link BoxGeometry}
     * @param width Width, that is, the length of the edges parallel to the X axis. Optional, Expects a `Float`. Default `1`
     * @param height Height, that is, the length of the edges parallel to the Y axis. Optional, Expects a `Float`. Default `1`
     * @param depth Depth, that is, the length of the edges parallel to the Z axis. Optional, Expects a `Float`. Default `1`
     * @param widthSegments Number of segmented rectangular faces along the width of the sides. Optional, Expects a `Integer`. Default `1`
     * @param heightSegments Number of segmented rectangular faces along the height of the sides. Optional, Expects a `Integer`. Default `1`
     * @param depthSegments Number of segmented rectangular faces along the depth of the sides. Optional, Expects a `Integer`. Default `1`
     */
    'width',
    'height',
    'depth',
    'widthSegments',
    'heightSegments',
    'depthSegments',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\BoxGeometry.d.ts
/**
 * {@link BoxGeometry} is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'
 * @remarks On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * })
 * const cube = new THREE.Mesh(geometry, material)
 * scene.add(cube)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/BoxGeometry.js | Source}
 */
objParams.boxGeometry = [...objParams.bufferGeometry,
].distinct();
defaults.boxGeometry = { width: 1, height: 1, depth: 1, widthSegments: 1, heightSegments: 1, depthSegments: 1 };
