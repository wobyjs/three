import { Node } from '../../../three-types'
import { Program } from 'three/examples/jsm/transpiler/AST.js'
export * from 'three/examples/jsm/transpiler/AST.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        program: typeof program
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        program: typeof _program
    }
}


const program = ([] as const).distinct()
consParams.program = program

const _program = ([
    'body',
    'isProgram',
] as const).distinct()
objProps.program = _program

export type ProgramProps = Node<Program, typeof Program, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        program: {}
    }
}

defaults.program = {}

