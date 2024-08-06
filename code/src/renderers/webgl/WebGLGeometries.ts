import { Node } from '../../../three-types'
import { WebGLAttributes } from 'three/src/renderers/webgl/WebGLAttributes.js'
import { WebGLGeometries } from 'three/src/renderers/webgl/WebGLGeometries.js'
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js'
export { WebGLGeometries } from 'three/src/renderers/webgl/WebGLGeometries.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        webglGeometries: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglGeometries: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlGeometries.d.ts

consParams.webglGeometries = [
    'gl',
    'attributes',
    'info',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlGeometries.d.ts

objParams.webglGeometries = [
].distinct()

export type WebGLGeometriesProps = Node<WebGLGeometries, typeof WebGLGeometries, { gl: WebGLRenderingContext; attributes: WebGLAttributes; info: WebGLInfo; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLGeometries: Partial<{ gl: WebGLRenderingContext; attributes: WebGLAttributes; info: WebGLInfo; }>
    }
}

defaults.webGLGeometries = {}

