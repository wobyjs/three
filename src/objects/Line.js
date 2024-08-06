import { Line } from 'three/src/objects/Line.js';
export * from 'three/src/objects/Line.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Line = Line;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Line.d.ts
/**
 * A continuous line.
 * @remarks
 * This is nearly the same as {@link THREE.LineSegments
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINE_STRIP}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINES}
 * @example
 * ```typescript
 * const material = new THREE.LineBasicMaterial({
 * color
 *
 * const points = ,
 * points.push(new THREE.Vector3(-10, 0, 0),
 * points.push(new THREE.Vector3(0, 10, 0),
 * points.push(new THREE.Vector3(10, 0, 0),
 * const geometry = new THREE.BufferGeometry().setFromPoints(points,
 * const {@link Line} = new THREE.Line(geometry, material,
 * scene.add(line,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Line Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Line.js}
 */
consParams.line = [
    /**
     * Create a new instance of {@link Line}
     * @param geometry Vertices representing the {@link Line} segment(s). Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    'geometry',
    'material',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Line.d.ts
/**
 * A continuous line.
 * @remarks
 * This is nearly the same as {@link THREE.LineSegments | LineSegments
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINE_STRIP}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINES}
 * @example
 * ```typescript
 * const material = new THREE.LineBasicMaterial({
 *     color: 0x0000ff
 * })
 * const points = [].distinct()

 * points.push(new THREE.Vector3(-10, 0, 0))
 * points.push(new THREE.Vector3(0, 10, 0))
 * points.push(new THREE.Vector3(10, 0, 0))
 * const geometry = new THREE.BufferGeometry().setFromPoints(points)
 * const {@link Line} = new THREE.Line(geometry, material)
 * scene.add(line)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Line | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Line.js | Source}
 */
objParams.line = [...objParams.object3d,
    /**
     * Vertices representing the {@link Line} segment(s).
     */
    'geometry',
    /**
     * Material for the line.
     */
    'material',
    /**
     * An array of weights typically from `0-1` that specify how much of the morph is applied.
     * @defaultValue `undefined`, but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}.
     */
    'morphTargetInfluences',
    /**
     * A dictionary of morphTargets based on the `morphTarget.name` property.
     * @defaultValue `undefined`, but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}.
     */
    'morphTargetDictionary',
].distinct();
defaults.line = {};
