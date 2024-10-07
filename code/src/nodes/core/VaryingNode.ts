import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import VaryingNode from 'three/src/nodes/core/VaryingNode.js'
export { VaryingNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VaryingNode: typeof VaryingNode
    }
}

Three.VaryingNode = VaryingNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            varyingNode: VaryingNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        varyingNode: typeof varyingNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        varyingNode: typeof _varyingNode
    }
}



const varyingNode = ([
    'node',
    'name',
] as const).distinct()
consParams.varyingNode = varyingNode



const _varyingNode = ([...objProps.node,
    'node',
    'name',
] as const).distinct()
objProps.varyingNode = _varyingNode

export type VaryingNodeProps = Node<VaryingNode, typeof VaryingNode, { node: ENode; name?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        varyingNode: Partial<{ node: ENode; name?: string | null; }>
    }
}

defaults.varyingNode = {}

