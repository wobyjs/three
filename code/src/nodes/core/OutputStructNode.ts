import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import OutputStructNode from 'three/src/nodes/core/OutputStructNode.js'
export { OutputStructNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        OutputStructNode: typeof OutputStructNode
    }
}

Three.OutputStructNode = OutputStructNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            outputStructNode: OutputStructNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        outputStructNode: typeof outputStructNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        outputStructNode: typeof _outputStructNode
    }
}



const outputStructNode = ([
    'members',
] as const).distinct()
consParams.outputStructNode = outputStructNode



const _outputStructNode = ([...objProps.node,
    'members',
] as const).distinct()
objProps.outputStructNode = _outputStructNode

export type OutputStructNodeProps = Node<OutputStructNode, typeof OutputStructNode, { members: ENode[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        outputStructNode: Partial<{ members: ENode[]; }>
    }
}

defaults.outputStructNode = {}

