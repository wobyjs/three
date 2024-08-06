import { Node } from '../../three-types'
import { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js'
import { RenderTargetOptions } from 'three/src/core/RenderTarget.js'
export { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        webglCubeRenderTarget: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        webglCubeRenderTarget: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlCubeRenderTarget.d.ts

consParams.webglCubeRenderTarget = [
    'size',
    'options',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlCubeRenderTarget.d.ts    

objParams.webglCubeRenderTarget = [...objParams.webglRenderTarget,
    'textures',
    'texture',
].distinct()

export type WebGLCubeRenderTargetProps = Node<WebGLCubeRenderTarget, typeof WebGLCubeRenderTarget, { size?: number; options?: RenderTargetOptions; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        webGLCubeRenderTarget: { size?: number; options?: RenderTargetOptions; }
    }
}

defaults.webGLCubeRenderTarget = { size: 1 }
