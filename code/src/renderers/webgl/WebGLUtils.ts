import { Node } from '../../../three-types'
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
import { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js'
export { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        webglUtils: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglUtils: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniformsGroups.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUtils.d.ts

consParams.webglUtils = [

    'gl',
    'extensions',
    ,
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniformsGroups.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUtils.d.ts

objParams.webglUtils = [
].distinct()

export type WebGLUtilsProps = Node<WebGLUtils, typeof WebGLUtils, { gl: WebGLRenderingContext | WebGL2RenderingContext; extensions: WebGLExtensions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLUtils: Partial<{ gl: WebGLRenderingContext | WebGL2RenderingContext; extensions: WebGLExtensions; }>
    }
}

defaults.webGLUtils = {}

