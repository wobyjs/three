import { Node } from '../../../three-types'
import UniformNode from 'three/src/nodes/core/UniformNode.js'
import NodeUniform from 'three/src/nodes/core/NodeUniform.js'
export { NodeUniform }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeUniform: NodeUniformProps<any>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeUniform: typeof nodeUniform
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeUniform: typeof _nodeUniform
    }
}



const nodeUniform = ([
    'name',
    'type',
    'node',
    'needsUpdate',
] as const).distinct()
consParams.nodeUniform = nodeUniform



const _nodeUniform = ([
    'name',
    'type',
    'node',
    'needsUpdate',
] as const).distinct()
objProps.nodeUniform = _nodeUniform

export type NodeUniformProps<T> = Node<NodeUniform<T>, typeof NodeUniform<T>, { name: string; type: string | null; node: UniformNode<T>; needsUpdate?: undefined; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeUniform: Partial<{ name: string; type: string | null; node: UniformNode<any>; needsUpdate?: undefined }>
    }
}

defaults.nodeUniform = {}
