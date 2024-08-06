import { Node } from '../../../three-types'
import { WebGLIndexedBufferRenderer } from 'three/src/renderers/webgl/WebGLIndexedBufferRenderer.js'
export { WebGLIndexedBufferRenderer } from 'three/src/renderers/webgl/WebGLIndexedBufferRenderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLIndexedBufferRenderer: typeof WebGLIndexedBufferRenderer
    }
}

Three.WebGLIndexedBufferRenderer = WebGLIndexedBufferRenderer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglIndexedBufferRenderer: WebGLIndexedBufferRendererProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglIndexedBufferRenderer: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglIndexedBufferRenderer: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlIndexedBufferRenderer.d.ts

consParams.webglIndexedBufferRenderer = [
    'gl',
    'extensions',
    'info',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlIndexedBufferRenderer.d.ts

objParams.webglIndexedBufferRenderer = [
    'setMode',
    'setIndex',
    'render',
    'renderInstances',
    'renderMultiDraw',
    'renderMultiDrawInstances',
].distinct()

export type WebGLIndexedBufferRendererProps = Node<WebGLIndexedBufferRenderer, typeof WebGLIndexedBufferRenderer, { gl: WebGLRenderingContext; extensions: any; info: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLIndexedBufferRenderer: Partial<{ gl: WebGLRenderingContext; extensions: any; info: any; }>
    }
}

defaults.webGLIndexedBufferRenderer = {}

