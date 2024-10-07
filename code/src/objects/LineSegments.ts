import { Object3DNode } from '../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { LineSegments } from 'three/src/objects/LineSegments.js'
export { LineSegments } from 'three/src/objects/LineSegments.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Line'

declare module '../../lib/3/three'
{
    interface Three {
        LineSegments: typeof LineSegments
    }
}

Three.LineSegments = LineSegments

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineSegments: LineSegmentsProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        lineSegments: typeof lineSegments
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        lineSegments: typeof _lineSegments
    }
}


/**
 * A series of lines drawn between pairs of vertices.
 * @remarks
 * This is nearly the same as {@link THREE.Line
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINES}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements.LINE_STRIP}.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineSegments Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineSegments.js}
 */

const lineSegments = ([
    /**
     * Create a new instance of {@link LineSegments}
     * @param geometry Pair(s) of vertices representing each line segment(s). Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material Material for the line. Default {@link THREE.LineBasicMaterial | `new THREE.LineBasicMaterial()`}.
     */
    'geometry',
    'material',
] as const).distinct()
consParams.lineSegments = lineSegments


/**
 * A series of lines drawn between pairs of vertices.
 * @remarks
 * This is nearly the same as {@link THREE.Line | Line
 * the only difference is that it is rendered using {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINES}
 * instead of {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/drawElements | gl.LINE_STRIP}.
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LineSegments | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LineSegments.js | Source}
 */

const _lineSegments = ([...objProps.line,
] as const).distinct()
objProps.lineSegments = _lineSegments

export type LineSegmentsProps<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> = Object3DNode<LineSegments<TGeometry, TMaterial>, typeof LineSegments<TGeometry, TMaterial>, { geometry?: TGeometry; material?: TMaterial; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        lineSegments: { geometry?: BufferGeometry, material?: Material }
    }
}

defaults.lineSegments = {}

