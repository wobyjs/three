import { Node } from '../../../three-types'
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js'
export { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLProperties: typeof WebGLProperties
    }
}

Three.WebGLProperties = WebGLProperties

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglProperties: WebGLPropertiesProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglProperties: typeof webglProperties
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglProperties: typeof _webglProperties
    }
}



const webglProperties = ([
] as const).distinct()
consParams.webglProperties = webglProperties



const _webglProperties = ([
] as const).distinct()
objProps.webglProperties = _webglProperties

export type WebGLPropertiesProps = Node<WebGLProperties, typeof WebGLProperties, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLProperties: {}
    }
}

defaults.webGLProperties = {}

