import { Node } from '../../../three-types'
import { WebGLUniforms } from 'three/src/renderers/webgl/WebGLUniforms.js'
export { WebGLUniforms } from 'three/src/renderers/webgl/WebGLUniforms.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLUniforms: typeof WebGLUniforms
    }
}

Three.WebGLUniforms = WebGLUniforms

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglUniforms: WebGLUniformsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglUniforms: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglUniforms: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniforms.d.ts

consParams.webglUniforms = [
    'gl',
    'program',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlUniforms.d.ts

objParams.webglUniforms = [
].distinct()

export type WebGLUniformsProps = Node<WebGLUniforms, typeof WebGLUniforms, { gl: WebGLRenderingContext; program: WebGLProgram; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLUniforms: Partial<{ gl: WebGLRenderingContext; program: WebGLProgram; }>
    }
}

defaults.webGLUniforms = {}

