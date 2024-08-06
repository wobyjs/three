import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import OutputStructNode from 'three/src/nodes/core/OutputStructNode.js'
export { OutputStructNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        outputStructNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        outputStructNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\OutputStructNode.d.ts

consParams.outputStructNode = [
    'members',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\OutputStructNode.d.ts    

objParams.outputStructNode = [...objParams.node,
    'members',
].distinct()

export type OutputStructNodeProps = Node<OutputStructNode, typeof OutputStructNode, { members: ENode[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        outputStructNode: Partial<{ members: ENode[]; }>
    }
}

defaults.outputStructNode = {}

