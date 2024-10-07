import { Node } from '../../../three-types'
import Transpiler from 'three/examples/jsm/transpiler/Transpiler.js'
export * from 'three/examples/jsm/transpiler/Transpiler.js'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            transpiler: TranspilerProps<any, IntrinsicElements>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        transpiler: typeof transpiler
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        transpiler: typeof _transpiler
    }
}



const transpiler = ([
    'decoder',
    'encoder',
] as const).distinct()
consParams.transpiler = transpiler



const _transpiler = ([
] as const).distinct()
objProps.transpiler = _transpiler

export type TranspilerProps<U, V> = Node<Transpiler<U, V>, typeof Transpiler<U, V>, { decoder: { parse(source: string): U; }; encoder: { emit(decoded: U): V; }; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        transpiler: { decoder?: { parse(source: string): any; }; encoder?: { emit(decoded: any): any; }; }
    }
}

defaults.transpiler = {}

