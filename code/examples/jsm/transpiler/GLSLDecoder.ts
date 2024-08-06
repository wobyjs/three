import { Node } from '../../../three-types'
import GLSLDecoder from 'three/examples/jsm/transpiler/GLSLDecoder.js'
export * from 'three/examples/jsm/transpiler/GLSLDecoder.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        GLSLDecoder: typeof GLSLDecoder
    }
}

Three.GLSLDecoder = GLSLDecoder

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            glslDecoder: GLSLDecoderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        glslDecoder: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        glslDecoder: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\GlSLDecoder.d.ts

consParams.glslDecoder = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\GlSLDecoder.d.ts

objParams.glslDecoder = [
].distinct()

export type GLSLDecoderProps = Node<GLSLDecoder, typeof GLSLDecoder, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        glslDecoder: {}
    }
}

defaults.glslDecoder = {}

