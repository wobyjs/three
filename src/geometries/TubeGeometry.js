import { TubeGeometry } from 'three/src/geometries/TubeGeometry.js';
export { TubeGeometry } from 'three/src/geometries/TubeGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.TubeGeometry = TubeGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TubeGeometry.d.ts
/**
 * Creates a tube that extrudes along a 3d curve.
 * @example
 * ```typescript
 * class CustomSinCurve extends THREE.Curve {
 * scale = 1) {
 *     super(,
 *     this.scale = scale,
 *     }
 * getPoint(t, optionalTarget = new THREE.Vector3()) {
 *     const tx = t * 3 - 1.5,
 *     const ty = Math.sin(2 * Math.PI * t,
 *     const tz = 0,
 *     return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale,
 *     }
 * }
 * const path = new CustomSinCurve(10,
 * const geometry = new THREE.TubeGeometry(path, 20, 2, 8, false,
 * const material = new THREE.MeshBasicMaterial({
 * color
 *
 * const mesh = new THREE.Mesh(geometry, material,
 * scene.add(mesh,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TubeGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TubeGeometry.js}
 */
consParams.tubeGeometry = [
    /**
     * Create a new instance of {@link TubeGeometry}
     * @param path A 3d path that inherits from the {@link THREE.Curve} base class.
     *         default {@link THREE.QuadraticBezierCurve3 THREE.QuadraticBezierCurve3(new Vector3(-1,
-1, 0 ), new Vector3(-1, 1, 0), new Vector3(1, 1, 0))}.
     * @param tubularSegments The number of segments that make up the tube. Expects a `Integer`. Default `64`.
     * @param radius The radius of the tube. Expects a `Float`. Default `1`.
     * @param radialSegments The number of segments that make up the cross-section. Expects a `Integer`. Default `8`.
     * @param closed Is the tube open or closed. Default `false`.
     */
    'path',
    'tubularSegments',
    'radius',
    'radialSegments',
    'closed',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TubeGeometry.d.ts
/**
 * Creates a tube that extrudes along a 3d curve.
 * @example
 * ```typescript
 * class CustomSinCurve extends THREE.Curve {
 *     constructor(scale = 1) {
 *         super()
 *         this.scale = scale
 *     }
 *     getPoint(t, optionalTarget = new THREE.Vector3()) {
 *         const tx = t * 3 - 1.5
 *         const ty = Math.sin(2 * Math.PI * t)
 *         const tz = 0
 *         return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale)
 *     }
 * }
 * const path = new CustomSinCurve(10)
 * const geometry = new THREE.TubeGeometry(path, 20, 2, 8, false)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * })
 * const mesh = new THREE.Mesh(geometry, material)
 * scene.add(mesh)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TubeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TubeGeometry.js | Source}
 */
objParams.tubeGeometry = [...objParams.bufferGeometry, ...objParams.parametricGeometry,
    /**
     * An array of {@link THREE.Vector3 | Vector3} tangents
     */
    'tangents',
    /**
     * An array of {@link THREE.Vector3 | Vector3} normals
     */
    'normals',
    /**
     * An array of {@link THREE.Vector3 | Vector3} binormals
     */
    'binormals',
].distinct();
defaults.tubeGeometry = { tubularSegments: 64, radius: 1, radialSegments: 8, closed: false, };
