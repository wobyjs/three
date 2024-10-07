import { Node } from '../../../three-types'
import GLSLDecoder from 'three/examples/jsm/transpiler/GLSLDecoder.js'
export * from 'three/examples/jsm/transpiler/GLSLDecoder.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        glslDecoder: typeof glslDecoder
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        glslDecoder: typeof _glslDecoder
    }
}



const glslDecoder = ([
] as const).distinct()
consParams.glslDecoder = glslDecoder



const _glslDecoder = ([
] as const).distinct()
objProps.glslDecoder = _glslDecoder

export type GLSLDecoderProps = Node<GLSLDecoder, typeof GLSLDecoder, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        glslDecoder: {}
    }
}

defaults.glslDecoder = {}

