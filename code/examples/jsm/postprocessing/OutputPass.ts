import { Node } from '../../../three-types'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
export * from 'three/examples/jsm/postprocessing/OutputPass.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './Pass'

declare module '../../../lib/3/three'
{
    interface Three {
        OutputPass: typeof OutputPass
    }
}

Three.OutputPass = OutputPass

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            outputPass: OutputPassProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        outputPass: typeof outputPass
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        outputPass: typeof _outputPass
    }
}



const outputPass = ([
] as const).distinct()
consParams.outputPass = outputPass



const _outputPass = ([...objProps.pass,
    'uniforms',
    'material',
    'fsQuad',
] as const).distinct()
objProps.outputPass = _outputPass

export type OutputPassProps = Node<OutputPass, typeof OutputPass, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        outputPass: Partial<{}>
    }
}

defaults.outputPass = {}

