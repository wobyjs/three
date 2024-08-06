import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import NormalMapNode from 'three/src/nodes/display/NormalMapNode.js'
export { NormalMapNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NormalMapNode: typeof NormalMapNode
    }
}

Three.NormalMapNode = NormalMapNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            normalMapNode: NormalMapNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        normalMapNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        normalMapNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\NormalMapNode.d.ts

consParams.normalMapNode = [
    'node',
    'scaleNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\NormalMapNode.d.ts    

objParams.normalMapNode = [...objParams.tempNode,
    'node',
    'scaleNode',
    'normalMapType',
].distinct()

export type NormalMapNodeProps = Node<NormalMapNode, typeof NormalMapNode, { node: ENode; scaleNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        normalMapNode: Partial<{ node: ENode; scaleNode?: ENode | null; }>
    }
}

defaults.normalMapNode = {}

