import { Node } from '../../../three-types'
import NodeFunctionInput from 'three/src/nodes/core/NodeFunctionInput.js'
import NodeFunction from 'three/src/nodes/core/NodeFunction.js'
export { NodeFunction }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeFunction: typeof NodeFunction
    }
}

Three.NodeFunction = NodeFunction

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeFunction: NodeFunctionProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeFunction: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeFunction: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunction.d.ts

consParams.nodeFunction = [
    'type',
    'inputs',
    'name',
    'presicion',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunction.d.ts

objParams.nodeFunction = [
    'isNodeFunction',
    'type',
    'inputs',
    'name',
    'presicion',
].distinct()

export type NodeFunctionProps = Node<NodeFunction, typeof NodeFunction, { type: string; inputs: NodeFunctionInput[]; name?: string; presicion?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeFunction: Partial<{ type: string; inputs: NodeFunctionInput[]; name?: string; presicion?: string; }>
    }
}

defaults.nodeFunction = {}

