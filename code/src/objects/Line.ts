import { Object3DNode } from '../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { Line } from 'three/src/objects/Line.js'
export * from 'three/src/objects/Line.js'

import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import '../core/Object3D'
// import { DirectiveAttributes, HTMLAttributes, SVGAttributes } from 'woby/dist/types/types'

declare module '../../lib/3/three'
{
    interface Three {
        Line: typeof Line
        // LineThree: typeof Line
    }
}

Three.Line = Line
// Three.LineThree = Line

declare module 'woby/dist/types/types'
{
    interface SVGAttributes<T extends EventTarget = SVGElement> extends LineProps/*  Omit<HTMLAttributes<T>, 'children'>,  DirectiveAttributes */ {

    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            line: SVGAttributes<SVGLineElement> // SVGAttributes<SVGLineElement> & LineProps,
            // lineThree: LineProps,
        }
    }
}


declare module '../../lib/3/consParams' {
    interface consParams {
        line: typeof line
        // lineThree: typeof line
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        line: typeof _line
        // lineThree: typeof _line
    }
}


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

const line = ([
    /**
     * Create a new instance of {@link Line}
     * @param geometry Vertices representing the {@link Line} segment(s). Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    'geometry',
    'material',
] as const).distinct()
consParams.line = line
// consParams.lineThree = line


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

const _line = ([...objProps.object3d,
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
] as const).distinct()
objProps.line = _line
// objProps.lineThree = _line

export type LineProps<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> = Object3DNode<Line<TGeometry, TMaterial>, typeof Line<TGeometry, TMaterial>, { geometry?: TGeometry; material?: TMaterial; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        line: { geometry?: BufferGeometry; material?: Material }
        // lineThree: { geometry?: BufferGeometry; material?: Material }
    }
}

defaults.line = {}
// defaults.lineThree = {}
