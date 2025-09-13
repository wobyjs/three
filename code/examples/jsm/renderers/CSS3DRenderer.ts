import { type JSX } from 'woby'
import { CSS3DObject, CSS3DParameters, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js'
export * from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import { Node, Object3DNode, WrapAsString } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'
import { RendererEx, rendererEx } from '../../../src/renderers/RendererEx'
import '../../../src/core/Object3D'
import { Html2Jsx } from '../../../three-types'

declare module '../../../lib/3/three'
{
    interface Three {
        CSS3DRenderer: typeof CSS3DRenderer
        CSS3DObject: typeof CSS3DObject
    }
}

Three.CSS3DRenderer = CSS3DRenderer
Three.CSS3DObject = CSS3DObject

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            css3dRenderer: CSS3DRendererProps,
            css3dObject: CSS3DObjectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        css3dRenderer: WrapAsString<CSS3DParameters>
        css3dObject: typeof css3dObject
        css3dSprite: typeof css3dSprite
        css3dParameters: WrapAsString<CSS3DParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        css3dRenderer: typeof _css3dRenderer
        css3dObject: typeof _css3dObject
        css3dSprite: typeof _css3dSprite
        css3dParameters: typeof _css3dParameters
    }
}



const css3dObject = ([ //...consParams.object3d,
    'element',
] as const).distinct()
consParams.css3dObject = css3dObject


const css3dSprite = ([
    'element',
] as const).distinct()
consParams.css3dSprite = css3dSprite


consParams.css3dParameters = ([
    'element',
] as const).toObject()


consParams.css3dRenderer = { ...consParams.css3dParameters }



const _css3dObject = ([...objProps.object3d,
    // 'element', //compulsory propps
] as const).distinct()
objProps.css3dObject = _css3dObject


const _css3dSprite = ([...objProps.css3dObject,
] as const).distinct()
objProps.css3dSprite = _css3dSprite


const _css3dParameters = ([...rendererEx,
    'element',
] as const).distinct()
objProps.css3dParameters = _css3dParameters


const _css3dRenderer = ([...rendererEx,
    'domElement',
    'setSize',
] as const).distinct()
objProps.css3dRenderer = _css3dRenderer

export type CSS3DRendererProps = Node<CSS3DRenderer, typeof CSS3DRenderer, CSS3DParameters & RendererEx>
export type CSS3DObjectProps = Object3DNode<Html2Jsx<CSS3DObject>, typeof CSS3DObject, Html2Jsx<{ element: HTMLElement }>>

declare module '../../../lib/3/defaults' {
    interface defaults {
        css3dRenderer: CSS3DParameters & RendererEx
        css3dObject: { element?: JSX.Child }
    }
}

defaults.css3dRenderer = {}
defaults.css3dObject = {}


