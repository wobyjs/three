import { CubicBezierCurve } from 'three/src/extras/curves/CubicBezierCurve.js';
export { CubicBezierCurve } from 'three/src/extras/curves/CubicBezierCurve.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../core/CurvePath';
Three.CubicBezierCurve = CubicBezierCurve;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\CubicBezierCurve.d.ts
/**
 * Create a smooth **2D** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg bezier curve
 * defined by a start point, endpoint and two control points.
 * @example
 * ```typescript
 * const curve = new THREE.CubicBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 15),
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
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js}
 */
consParams.cubicBezierCurve = [
    /**
     * The starting point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v0',
    /**
     * The first control point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v1',
    /**
     * The second control point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v2',
    /**
     * The ending point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v3',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\CubicBezierCurve.d.ts
/**
 * Create a smooth **2d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve
 * defined by a start point, endpoint and two control points.
 * @example
 * ```typescript
 * const curve = new THREE.CubicBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 15),
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
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js | Source}
 */
objParams.cubicBezierCurve = [...objParams.curve,
    /**
     * The starting point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v0',
    /**
     * The first control point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v1',
    /**
     * The second control point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v2',
    /**
     * The ending point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v3',
].distinct();
defaults.cubicBezierCurve = {};
