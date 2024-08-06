import { QuadraticBezierCurve3 } from 'three/src/extras/curves/QuadraticBezierCurve3.js';
export { QuadraticBezierCurve3 } from 'three/src/extras/curves/QuadraticBezierCurve3.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/CurvePath';
Three.QuadraticBezierCurve3 = QuadraticBezierCurve3;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\QuadraticBezierCurve3.d.ts
/**
 * Create a smooth **3d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif bezier curve
 * defined by a start point, end point and a single control point.
 * @example
 * ```typescript
 * const curve = new THREE.QuadraticBezierCurve3(
 * new THREE.Vector3(-10, 0, 0),
 * new THREE.Vector3(20, 15, 0),
 * new THREE.Vector3(10, 0, 0),
 * const points = curve.getPoints(50,
 * const geometry = new THREE.BufferGeometry().setFromPoints(points,
 * const material = new THREE.LineBasicMaterial({
 * color
 *
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve3 Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve3.js}
 */
consParams.quadraticBezierCurve3 = [
    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v0',
    /**
     * The control point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v1',
    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v2',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\QuadraticBezierCurve3.d.ts
/**
 * Create a smooth **3d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve
 * defined by a start point, end point and a single control point.
 * @example
 * ```typescript
 * const curve = new THREE.QuadraticBezierCurve3(
 * new THREE.Vector3(-10, 0, 0),
 * new THREE.Vector3(20, 15, 0),
 * new THREE.Vector3(10, 0, 0))
 * const points = curve.getPoints(50)
 * const geometry = new THREE.BufferGeometry().setFromPoints(points)
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * })
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve3.js | Source}
 */
objParams.quadraticBezierCurve3 = [...objParams.curve,
    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v0',
    /**
     * The control point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v1',
    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v2',
].distinct();
defaults.quadraticBezierCurve3 = {};
