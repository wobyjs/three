import { Node } from '../../../three-types'
import { WebGLAttributes } from 'three/src/renderers/webgl/WebGLAttributes.js'
import { WebGLGeometries } from 'three/src/renderers/webgl/WebGLGeometries.js'
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js'
export { WebGLGeometries } from 'three/src/renderers/webgl/WebGLGeometries.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLGeometries: typeof WebGLGeometries
    }
}

Three.WebGLGeometries = WebGLGeometries

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglGeometries: WebGLGeometriesProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglGeometries: typeof webglGeometries
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglGeometries: typeof _webglGeometries
    }
}



const webglGeometries = ([
    'gl',
    'attributes',
    'info',
] as const).distinct()
consParams.webglGeometries = webglGeometries



const _webglGeometries = ([
] as const).distinct()
objProps.webglGeometries = _webglGeometries

export type WebGLGeometriesProps = Node<WebGLGeometries, typeof WebGLGeometries, { gl: WebGLRenderingContext; attributes: WebGLAttributes; info: WebGLInfo; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLGeometries: Partial<{ gl: WebGLRenderingContext; attributes: WebGLAttributes; info: WebGLInfo; }>
    }
}

defaults.webGLGeometries = {}

