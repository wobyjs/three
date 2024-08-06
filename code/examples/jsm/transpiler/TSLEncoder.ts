import { Node } from '../../../three-types'
import TSLEncoder from 'three/examples/jsm/transpiler/TSLEncoder.js'
export * from 'three/examples/jsm/transpiler/TSLEncoder.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TSLEncoder: typeof TSLEncoder
    }
}

Three.TSLEncoder = TSLEncoder

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tslEncoder: TSLEncoderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tslEncoder: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        tslEncoder: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\TSLEncoder.d.ts

consParams.tslEncoder = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\TSLEncoder.d.ts

objParams.tslEncoder = [
].distinct()

export type TSLEncoderProps = Node<TSLEncoder, typeof TSLEncoder, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tslEncoder: {}
    }
}

defaults.tslEncoder = {}

