import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import AONode from 'three/src/nodes/lighting/AONode.js'
export { AONode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AONode: typeof AONode
    }
}

Three.AONode = AONode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            aoNode: AONodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        aoNode: typeof aoNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        aoNode: typeof _aoNode
    }
}



const aoNode = ([
    'aoNode',
] as const).distinct()
consParams.aoNode = aoNode



const _aoNode = ([...objProps.lightingNode,
    'aoNode',
] as const).distinct()
objProps.aoNode = _aoNode

export type AONodeProps = Node<AONode, typeof AONode, { aoNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        aoNode: { aoNode?: ENode | null; }
    }
}

defaults.aoNode = {}

