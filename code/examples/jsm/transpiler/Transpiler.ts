import { Node } from '../../../three-types'
import Transpiler from 'three/examples/jsm/transpiler/Transpiler.js'
export * from 'three/examples/jsm/transpiler/Transpiler.js'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        transpiler: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        transpiler: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\Transpiler.d.ts

consParams.transpiler = [
    'decoder',
    'encoder',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\Transpiler.d.ts

objParams.transpiler = [
].distinct()

export type TranspilerProps<U, V> = Node<Transpiler<U, V>, typeof Transpiler<U, V>, { decoder: { parse(source: string): U; }; encoder: { emit(decoded: U): V; }; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        transpiler: { decoder?: { parse(source: string): any; }; encoder?: { emit(decoded: any): any; }; }
    }
}

defaults.transpiler = {}

