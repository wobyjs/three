import { Node } from '../../../three-types'
import UniformNode from 'three/src/nodes/core/UniformNode.js'
import NodeUniform from 'three/src/nodes/core/NodeUniform.js'
export { NodeUniform }
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        nodeUniform: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeUniform: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeUniform.d.ts

consParams.nodeUniform = [
    'name',
    'type',
    'node',
    'needsUpdate',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeUniform.d.ts

objParams.nodeUniform = [
    'name',
    'type',
    'node',
    'needsUpdate',
].distinct()

export type NodeUniformProps<T> = Node<NodeUniform<T>, typeof NodeUniform<T>, { name: string; type: string | null; node: UniformNode<T>; needsUpdate?: undefined; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeUniform: Partial<{ name: string; type: string | null; node: UniformNode<any>; needsUpdate?: undefined }>
    }
}

defaults.nodeUniform = {}
