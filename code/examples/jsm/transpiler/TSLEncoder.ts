import { Node } from '../../../three-types'
import TSLEncoder from 'three/examples/jsm/transpiler/TSLEncoder.js'
export * from 'three/examples/jsm/transpiler/TSLEncoder.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        tslEncoder: typeof tslEncoder
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        tslEncoder: typeof _tslEncoder
    }
}



const tslEncoder = ([
] as const).distinct()
consParams.tslEncoder = tslEncoder



const _tslEncoder = ([
] as const).distinct()
objProps.tslEncoder = _tslEncoder

export type TSLEncoderProps = Node<TSLEncoder, typeof TSLEncoder, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tslEncoder: {}
    }
}

defaults.tslEncoder = {}

