import { QuadraticBezierCurve } from 'three/src/extras/curves/QuadraticBezierCurve.js';
export { QuadraticBezierCurve } from 'three/src/extras/curves/QuadraticBezierCurve.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/CurvePath';
Three.QuadraticBezierCurve = QuadraticBezierCurve;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\QuadraticBezierCurve.d.ts
/**
 * Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif bezier curve
 * defined by a start point, end point and a single control point.
 * @example
 * ```typescript
 * const curve = new THREE.QuadraticBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(20, 15),
 * new THREE.Vector2(10, 0),
 * const points = curve.getPoints(50,
 * const geometry = new THREE.BufferGeometry().setFromPoints(points,
 * const material = new THREE.LineBasicMaterial({
 * color
 *
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve.js}
 */
consParams.quadraticBezierCurve = [
    /**
     * The start point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v0',
    /**
     * The control point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v1',
    /**
     * The end point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v2',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\QuadraticBezierCurve.d.ts
/**
 * Create a smooth **2d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve
 * defined by a start point, end point and a single control point.
 * @example
 * ```typescript
 * const curve = new THREE.QuadraticBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(20, 15),
 * new THREE.Vector2(10, 0))
 * const points = curve.getPoints(50)
 * const geometry = new THREE.BufferGeometry().setFromPoints(points)
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * })
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve.js | Source}
 */
objParams.quadraticBezierCurve = [...objParams.curve,
    /**
     * The start point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v0',
    /**
     * The control point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v1',
    /**
     * The end point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v2',
].distinct();
defaults.quadraticBezierCurve = {};
