import { CSS2DObject, CSS2DParameters, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js'
export * from 'three/examples/jsm/renderers/CSS2DRenderer.js'
import { Node, Object3DNode } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { RendererEx, rendererEx } from '../../../src/renderers/RendererEx'
import '../../../src/core/Object3D'
import { FunctionMaybe } from 'woby'

declare module '../../../lib/3/three'
{
    interface Three {
        CSS2DRenderer: typeof CSS2DRenderer
        CSS2DObject: typeof CSS2DObject
    }
}

Three.CSS2DRenderer = CSS2DRenderer
Three.CSS2DObject = CSS2DObject

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            css2dRenderer: CSS2DRendererProps,
            css2dObject: CSS2DObjectProps
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        css2dRenderer: typeof css2dRenderer
        css2dParameters: typeof css2dParameters
        css2dObject: typeof css2dObject
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        css2dRenderer: typeof _css2dRenderer
        css2dParameters: typeof _css2dParameters
        css2dObject: typeof _css2dObject
    }
}


const css2dRenderer = (['parameters'] as const).distinct()
consParams.css2dRenderer = css2dRenderer

const css2dParameters = ([
    'element',
] as const).distinct()
consParams.css2dParameters = css2dParameters

const css2dObject = ([//...consParams.object3d,
    'element'] as const).distinct()
consParams.css2dObject = css2dObject


const _css2dParameters = ([...objProps.object3d, ...rendererEx,
    'element',
    'center',
] as const).distinct()
objProps.css2dParameters = _css2dParameters


const _css2dRenderer = ([...rendererEx,
    'domElement',
    'setSize',
    'render',
] as const).distinct()
objProps.css2dRenderer = _css2dRenderer

const _css2dObject = ([...objProps.object3d,
    'element',
    'center',
    'onBeforeRender',
    'onAfterRender',
] as const).distinct()
objProps.css2dObject = _css2dObject

export type CSS2DRendererProps = Node<CSS2DRenderer, typeof CSS2DRenderer, CSS2DParameters & RendererEx>
export type CSS2DObjectProps = Object3DNode<CSS2DObject, typeof CSS2DObject, { /* element?:JSX.Child  */ }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        css2dRenderer: CSS2DParameters & RendererEx
        css2dObject: { element?: FunctionMaybe<E | JSX.Child> }
    }
}

defaults.css2dRenderer = {}
defaults.css2dObject = {}

