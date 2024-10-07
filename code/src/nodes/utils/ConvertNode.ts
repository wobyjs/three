import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import ConvertNode from 'three/src/nodes/utils/ConvertNode.js'
export { ConvertNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        ConvertNode: typeof ConvertNode
    }
}

Three.ConvertNode = ConvertNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            convertNode: ConvertNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        convertNode: typeof convertNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        convertNode: typeof _convertNode
    }
}



const convertNode = ([
    'node',
    'convertTo',
] as const).distinct()
consParams.convertNode = convertNode



const _convertNode = ([...objProps.node,
    'node',
    'convertTo',
] as const).distinct()
objProps.convertNode = _convertNode

export type ConvertNodeProps = Node<ConvertNode, typeof ConvertNode, { node: ENode; convertTo: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        convertNode: Partial<{ node: ENode; convertTo: string; }>
    }
}

defaults.convertNode = {}

