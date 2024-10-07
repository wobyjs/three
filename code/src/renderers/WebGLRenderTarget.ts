import { Node } from '../../three-types'
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js'
import { RenderTargetOptions } from 'three/src/core/RenderTarget.js'
export { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        WebGLRenderTarget: typeof WebGLRenderTarget
    }
}

Three.WebGLRenderTarget = WebGLRenderTarget

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglRenderTarget: WebGLRenderTargetProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        webglRenderTarget: typeof webglRenderTarget
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        webglRenderTarget: typeof _webglRenderTarget
    }
}



const webglRenderTarget = ([
    'width',
    'height',
    'options',
] as const).distinct()
consParams.webglRenderTarget = webglRenderTarget



const _webglRenderTarget = ([
] as const).distinct()
objProps.webglRenderTarget = _webglRenderTarget

export type WebGLRenderTargetProps = Node<WebGLRenderTarget, typeof WebGLRenderTarget, { width?: number; height?: number; options?: RenderTargetOptions; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        webGLRenderTarget: { width?: number; height?: number; options?: RenderTargetOptions; }
    }
}

defaults.webGLRenderTarget = {}

