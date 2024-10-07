import { Node } from '../../../three-types'
import { SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer.js'
export * from 'three/examples/jsm/renderers/SVGRenderer.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { RendererEx, rendererEx } from '../../../src/renderers/RendererEx'

declare module '../../../lib/3/three'
{
    interface Three {
        SVGRenderer: typeof SVGRenderer
    }
}

Three.SVGRenderer = SVGRenderer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            svgRenderer: SVGRendererProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        svgRenderer: typeof svgRenderer
        svgObject: typeof svgObject
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        svgRenderer: typeof _svgRenderer
        svgObject: typeof _svgObject
    }
}



const svgObject = ([
    'node',
] as const).distinct()
consParams.svgObject = svgObject


const svgRenderer = ([
] as const).distinct()
consParams.svgRenderer = svgRenderer


const _svgObject = ([...objProps.object3d,
    'node',
] as const).distinct()
objProps.svgObject = _svgObject


const _svgRenderer = ([...rendererEx,
    'domElement',
    'autoClear',
    'sortObjects',
    'sortElements',
    'overdraw',
    'outputColorSpace',
    'info',
] as const).distinct()
objProps.svgRenderer = _svgRenderer

export type SVGRendererProps = Node<SVGRenderer, typeof SVGRenderer, RendererEx>

declare module '../../../lib/3/defaults' {
    interface defaults {
        svgRenderer: RendererEx
    }
}

defaults.svgRenderer = {}

