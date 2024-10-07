import { Node } from '../../../three-types'
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js'
import { WebGLBufferRenderer } from 'three/src/renderers/webgl/WebGLBufferRenderer.js'
export { WebGLBufferRenderer } from 'three/src/renderers/webgl/WebGLBufferRenderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLBufferRenderer: typeof WebGLBufferRenderer
    }
}

Three.WebGLBufferRenderer = WebGLBufferRenderer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglBufferRenderer: WebGLBufferRendererProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglBufferRenderer: typeof webglBufferRenderer
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglBufferRenderer: typeof _webglBufferRenderer
    }
}



const webglBufferRenderer = ([
    'gl',
    'extensions',
    'info',
    ,
] as const).distinct()
consParams.webglBufferRenderer = webglBufferRenderer



const _webglBufferRenderer = ([
] as const).distinct()
objProps.webglBufferRenderer = _webglBufferRenderer


export type WebGLBufferRendererProps = Node<WebGLBufferRenderer, typeof WebGLBufferRenderer, { gl: WebGLRenderingContext; extensions: WebGLExtensions; info: WebGLInfo; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLBufferRenderer: Partial<{ gl: WebGLRenderingContext; extensions: WebGLExtensions; info: WebGLInfo; }>
    }
}

defaults.webGLBufferRenderer = {}

