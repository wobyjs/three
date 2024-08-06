import { Node } from '../../../three-types'
import ShaderToyDecoder from 'three/examples/jsm/transpiler/ShaderToyDecoder.js'
export * from 'three/examples/jsm/transpiler/ShaderToyDecoder.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        shaderToyDecoder: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        shaderToyDecoder: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\ShaderToyDecoder.d.ts

consParams.shaderToyDecoder = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\ShaderToyDecoder.d.ts    

objParams.shaderToyDecoder = [...objParams.glslDecoder,
].distinct()

export type ShaderToyDecoderProps = Node<ShaderToyDecoder, typeof ShaderToyDecoder, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shaderToyDecoder: {}
    }
}

defaults.shaderToyDecoder = {}
    ;
