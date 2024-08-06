import { ExtrudeGeometry } from 'three/src/geometries/ExtrudeGeometry.js';
export { ExtrudeGeometry } from 'three/src/geometries/ExtrudeGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import '../../lib/three/extensions';
Three.ExtrudeGeometry = ExtrudeGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\ExtrudeGeometry.d.ts
consParams.extrudeGeometryOptions = [
    /**
     * Number of points on the curves.
     * Expects a `Integer`.
     * @defaultValue `12`
     */
    'curveSegments',
    /**
     * Number of points used for subdividing segments along the depth of the extruded spline.
     * @defaultValue `1`
     */
    'steps',
    /**
     * Depth to extrude the shape.
     * @defaultValue `1`
     */
    'depth',
    /**
     * Turn on bevel. Applying beveling to the shape.
     * @defaultValue `true`
     */
    'bevelEnabled',
    /**
     * How deep into the original shape the bevel goes.
     * Expects a `Float`.
     * @defaultValue `0.2`
     */
    'bevelThickness',
    /**
     * Distance from the shape outline that the bevel extends
     * Expects a `Float`.
     * @defaultValue `bevelThickness - 0.1`
     */
    'bevelSize',
    /**
     * Distance from the shape outline that the bevel starts.
     * Expects a `Float`.
     * @defaultValue `0`
     */
    'bevelOffset',
    /**
     * Number of bevel layers/segments.
     * Expects a `Integer`.
     * @defaultValue `3`
     */
    'bevelSegments',
    /**
     * A 3d spline path along which the shape should be extruded.
     * @remarks Bevels not supported for path extrusion.
     */
    'extrudePath',
    /**
     * A object that provides UV generator functions.
     */
    'UVGenerator',
].toObject();
consParams.uvGenerator = [].distinct();
/**
 * Creates extruded geometry from a path shape.
 * @remarks This object extrudes a 2D shape to a 3d geometry.
 * @remarks When creating a Mesh with this.geometry, if you'd like to have a separate material used for its face and its extruded sides, you can use an array of materials
 * @remarks The first material will be applied to the face, the second material will be applied to the sides.
 * @example
 * ```typescript
 * const length = 12, width = 8,
 * const shape = new THREE.Shape(,
 * shape.moveTo(0, 0,
 * shape.lineTo(0, width,
 * shape.lineTo(length, width,
 * shape.lineTo(length, 0,
 * shape.lineTo(0, 0,
 * const extrudeSettings = {
 * steps,
 * depth,
 * bevelEnabled,
 * bevelThickness,
 * bevelSize,
 * bevelOffset,
 * bevelSegments
 *
 * const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings,
 * const material = new THREE.MeshBasicMaterial({
 * color
 *
 * const mesh = new THREE.Mesh(geometry, material,
 * scene.add(mesh,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ExtrudeGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ExtrudeGeometry.js}
 */
consParams.extrudeGeometry = [
    /**
     * Create a new instance of {@link ExtrudeGeometry}
     * @param shapes Shape or an array of shapes. Default `new Shape([new Vector2(0.5, 0.5), new Vector2(-0.5, 0.5), new Vector2(-0.5,
-0.5), new Vector2(0.5,
-0.5)])`.
     * @param options Object that can contain the following parameters. @see {@link ExtrudeGeometryOptions} for defaults.
     */
    'shapes',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\ExtrudeGeometry.d.ts
objParams.extrudeGeometryOptions = [
    /**
     * Number of points on the curves.
     * Expects a `Integer`.
     * @defaultValue `12`
     */
    'curveSegments',
    /**
     * Number of points used for subdividing segments along the depth of the extruded spline.
     * @defaultValue `1`
     */
    'steps',
    /**
     * Depth to extrude the shape.
     * @defaultValue `1`
     */
    'depth',
    /**
     * Turn on bevel. Applying beveling to the shape.
     * @defaultValue `true`
     */
    'bevelEnabled',
    /**
     * How deep into the original shape the bevel goes.
     * Expects a `Float`.
     * @defaultValue `0.2`
     */
    'bevelThickness',
    /**
     * Distance from the shape outline that the bevel extends
     * Expects a `Float`.
     * @defaultValue `bevelThickness - 0.1`
     */
    'bevelSize',
    /**
     * Distance from the shape outline that the bevel starts.
     * Expects a `Float`.
     * @defaultValue `0`
     */
    'bevelOffset',
    /**
     * Number of bevel layers/segments.
     * Expects a `Integer`.
     * @defaultValue `3`
     */
    'bevelSegments',
    /**
     * A 3d spline path along which the shape should be extruded.
     * @remarks Bevels not supported for path extrusion.
     */
    'extrudePath',
    /**
     * A object that provides Uv generator functions.
     */
    'UvGenerator',
].distinct();
objParams.uvGenerator = [].distinct();
/**
 * Creates extruded geometry from a path shape.
 * @remarks This object extrudes a 2d shape to a 3d geometry.
 * @remarks When creating a Mesh with this geometry, if you'd like to have a separate material used for its face and its extruded sides, you can use an array of materials
 * @remarks The first material will be applied to the face; the second material will be applied to the sides.
 * @example
 * ```typescript
 * const length = 12, width = 8
 * const shape = new THREE.Shape()
 * shape.moveTo(0, 0)
 * shape.lineTo(0, width)
 * shape.lineTo(length, width)
 * shape.lineTo(length, 0)
 * shape.lineTo(0, 0)
 * const extrudeSettings = {
 *     steps: 2,
 *     depth: 16,
 *     bevelEnabled: true,
 *     bevelThickness: 1,
 *     bevelSize: 1,
 *     bevelOffset: 0,
 *     bevelSegments: 1
 * }
 * const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * })
 * const mesh = new THREE.Mesh(geometry, material)
 * scene.add(mesh)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/ExtrudeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/ExtrudeGeometry.js | Source}
 */
objParams.extrudeGeometry = [...objParams.bufferGeometry,
].distinct();
defaults.extrudeGeometry = { options: { curveSegments: 12, steps: 1, depth: 1, bevelEnabled: true, bevelThickness: 2, bevelSize: 1, bevelOffset: 0.1, bevelSegments: 3, } };
