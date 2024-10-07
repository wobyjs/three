import { Object3DNode } from '../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { LineLoop } from 'three/src/objects/LineLoop.js'
export { LineLoop } from 'three/src/objects/LineLoop.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        LineLoop: typeof LineLoop
    }
}

Three.LineLoop = LineLoop

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineLoop: LineLoopProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        lineLoop: typeof lineLoop
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        lineLoop: typeof _lineLoop
    }
}


/**
 * A continuous line that connects back to the start.
 * @remarks
 * This is nearly the same as {@link THREE.Line
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINE_LOOP}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINE_STRIP
 * which draws a straight line to the next vertex, and connects the last vertex back to the first.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineLoop Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineLoop.js}
 */

const lineLoop = ([
    /**
     * Create a new instance of {@link LineLoop}
     * @param geometry  List of vertices representing points on the line loop. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    'geometry',
    'material',
] as const).distinct()
consParams.lineLoop = lineLoop


/**
 * A continuous line that connects back to the start.
 * @remarks
 * This is nearly the same as {@link THREE.Line | Line
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINE_LOOP}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINE_STRIP
 * which draws a straight line to the next vertex, and connects the last vertex back to the first.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineLoop | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineLoop.js | Source}
 */

const _lineLoop = ([...objProps.line,
] as const).distinct()
objProps.lineLoop = _lineLoop

export type LineLoopProps<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> = Object3DNode<LineLoop<TGeometry, TMaterial>, typeof LineLoop<TGeometry, TMaterial>, { geometry?: TGeometry; material?: TMaterial; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        lineLoop: { geometry?: BufferGeometry, material?: Material }
    }
}

defaults.lineLoop = {}

