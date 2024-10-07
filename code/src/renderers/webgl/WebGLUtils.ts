import { Node } from '../../../three-types'
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
import { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js'
export { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLUtils: typeof WebGLUtils
    }
}

Three.WebGLUtils = WebGLUtils

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglUtils: WebGLUtilsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglUtils: typeof webglUtils
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglUtils: typeof _webglUtils
    }
}




const webglUtils = ([

    'gl',
    'extensions',
    ,
] as const).distinct()
consParams.webglUtils = webglUtils




const _webglUtils = ([
] as const).distinct()
objProps.webglUtils = _webglUtils

export type WebGLUtilsProps = Node<WebGLUtils, typeof WebGLUtils, { gl: WebGLRenderingContext | WebGL2RenderingContext; extensions: WebGLExtensions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLUtils: Partial<{ gl: WebGLRenderingContext | WebGL2RenderingContext; extensions: WebGLExtensions; }>
    }
}

defaults.webGLUtils = {}

