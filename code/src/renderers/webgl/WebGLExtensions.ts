import { Node } from '../../../three-types'
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
export { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        webglExtensions: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglExtensions: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlExtensions.d.ts

consParams.webglExtensions = [
    'gl',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlExtensions.d.ts

objParams.webglExtensions = [
].distinct()

export type WebGLExtensionsProps = Node<WebGLExtensions, typeof WebGLExtensions, { gl: WebGLRenderingContext; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLExtensions: Partial<{ gl: WebGLRenderingContext; }>
    }
}

defaults.webGLExtensions = {}

