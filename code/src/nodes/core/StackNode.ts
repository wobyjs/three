import { Node } from '../../../three-types'
import StackNode from 'three/src/nodes/core/StackNode.js'
export { StackNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        StackNode: typeof StackNode
    }
}

Three.StackNode = StackNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stackNode: StackNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        stackNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        stackNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\StackNode.d.ts

consParams.stackNode = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\StackNode.d.ts    

objParams.stackNode = [...objParams.node,
    'isStackNode',
    'nodes',
    'outputNode',
].distinct()

export type StackNodeProps = Node<StackNode, typeof StackNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stackNode: {}
    }
}

defaults.stackNode = {}

