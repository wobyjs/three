import { Node } from '../../../three-types'
import { Program } from 'three/examples/jsm/transpiler/AST.js'
export * from 'three/examples/jsm/transpiler/AST.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Program: typeof Program
    }
}

Three.Program = Program

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            program: ProgramProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        program: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        program: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts

consParams.program = []

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\transpiler\AST.d.ts

objParams.program = [
    'body',
    'isProgram',
].distinct()

export type ProgramProps = Node<Program, typeof Program, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        program: {}
    }
}

defaults.program = {}

