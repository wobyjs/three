import { Node } from '../../three-types'
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js'
import { RenderTargetOptions } from 'three/src/core/RenderTarget.js'
export { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        webglRenderTarget: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        webglRenderTarget: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlRenderTarget.d.ts

consParams.webglRenderTarget = [
    'width',
    'height',
    'options',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\WebGlRenderTarget.d.ts    

objParams.webglRenderTarget = [
].distinct()

export type WebGLRenderTargetProps = Node<WebGLRenderTarget, typeof WebGLRenderTarget, { width?: number; height?: number; options?: RenderTargetOptions; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        webGLRenderTarget: { width?: number; height?: number; options?: RenderTargetOptions; }
    }
}

defaults.webGLRenderTarget = {}

