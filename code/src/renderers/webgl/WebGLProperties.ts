import { Node } from '../../../three-types'
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js'
export { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        webglProperties: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglProperties: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlProperties.d.ts

consParams.webglProperties = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlProperties.d.ts

objParams.webglProperties = [
].distinct()

export type WebGLPropertiesProps = Node<WebGLProperties, typeof WebGLProperties, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLProperties: {}
    }
}

defaults.webGLProperties = {}

