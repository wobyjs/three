import { Node } from '../../../three-types'
import ShaderToyDecoder from 'three/examples/jsm/transpiler/ShaderToyDecoder.js'
export * from 'three/examples/jsm/transpiler/ShaderToyDecoder.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ShaderToyDecoder: typeof ShaderToyDecoder
    }
}

Three.ShaderToyDecoder = ShaderToyDecoder

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shaderToyDecoder: ShaderToyDecoderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        shaderToyDecoder: typeof shaderToyDecoder
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        shaderToyDecoder: typeof _shaderToyDecoder
    }
}



const shaderToyDecoder = ([
] as const).distinct()
consParams.shaderToyDecoder = shaderToyDecoder



const _shaderToyDecoder = ([...objProps.glslDecoder,
] as const).distinct()
objProps.shaderToyDecoder = _shaderToyDecoder

export type ShaderToyDecoderProps = Node<ShaderToyDecoder, typeof ShaderToyDecoder, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shaderToyDecoder: {}
    }
}

defaults.shaderToyDecoder = {}
    ;
