import { Node } from '../../../three-types'
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
export { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLExtensions: typeof WebGLExtensions
    }
}

Three.WebGLExtensions = WebGLExtensions

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglExtensions: WebGLExtensionsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglExtensions: typeof webglExtensions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglExtensions: typeof _webglExtensions
    }
}



const webglExtensions = ([
    'gl',
] as const).distinct()
consParams.webglExtensions = webglExtensions



const _webglExtensions = ([
] as const).distinct()
objProps.webglExtensions = _webglExtensions

export type WebGLExtensionsProps = Node<WebGLExtensions, typeof WebGLExtensions, { gl: WebGLRenderingContext; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLExtensions: Partial<{ gl: WebGLRenderingContext; }>
    }
}

defaults.webGLExtensions = {}

