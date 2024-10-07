import { Node } from '../../three-types'
import { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js'
import { RenderTargetOptions } from 'three/src/core/RenderTarget.js'
export { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        WebGLCubeRenderTarget: typeof WebGLCubeRenderTarget
    }
}

Three.WebGLCubeRenderTarget = WebGLCubeRenderTarget

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglCubeRenderTarget: WebGLCubeRenderTargetProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        webglCubeRenderTarget: typeof webglCubeRenderTarget
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        webglCubeRenderTarget: typeof _webglCubeRenderTarget
    }
}



const webglCubeRenderTarget = ([
    'size',
    'options',
] as const).distinct()
consParams.webglCubeRenderTarget = webglCubeRenderTarget



const _webglCubeRenderTarget = ([...objProps.webglRenderTarget,
    'textures',
    'texture',
] as const).distinct()
objProps.webglCubeRenderTarget = _webglCubeRenderTarget

export type WebGLCubeRenderTargetProps = Node<WebGLCubeRenderTarget, typeof WebGLCubeRenderTarget, { size?: number; options?: RenderTargetOptions; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        webGLCubeRenderTarget: { size?: number; options?: RenderTargetOptions; }
    }
}

defaults.webGLCubeRenderTarget = { size: 1 }
