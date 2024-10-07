import { Node } from '../../../three-types'
import { WebGLIndexedBufferRenderer } from 'three/src/renderers/webgl/WebGLIndexedBufferRenderer.js'
export { WebGLIndexedBufferRenderer } from 'three/src/renderers/webgl/WebGLIndexedBufferRenderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        webglIndexedBufferRenderer: typeof webglIndexedBufferRenderer
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglIndexedBufferRenderer: typeof _webglIndexedBufferRenderer
    }
}



const webglIndexedBufferRenderer = ([
    'gl',
    'extensions',
    'info',
] as const).distinct()
consParams.webglIndexedBufferRenderer = webglIndexedBufferRenderer



const _webglIndexedBufferRenderer = ([
    'setMode',
    'setIndex',
    'render',
    'renderInstances',
    'renderMultiDraw',
    'renderMultiDrawInstances',
] as const).distinct()
objProps.webglIndexedBufferRenderer = _webglIndexedBufferRenderer

export type WebGLIndexedBufferRendererProps = Node<WebGLIndexedBufferRenderer, typeof WebGLIndexedBufferRenderer, { gl: WebGLRenderingContext; extensions: any; info: any; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLIndexedBufferRenderer: Partial<{ gl: WebGLRenderingContext; extensions: any; info: any; }>
    }
}

defaults.webGLIndexedBufferRenderer = {}

