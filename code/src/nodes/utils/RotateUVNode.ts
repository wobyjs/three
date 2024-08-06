import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import RotateUVNode from 'three/src/nodes/utils/RotateUVNode.js'
export { RotateUVNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        RotateUVNode: typeof RotateUVNode
    }
}

Three.RotateUVNode = RotateUVNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rotateUvNode: RotateUVNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rotateUvNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        rotateUvNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateUVNode.d.ts

consParams.rotateUvNode = [
    'uvNode',
    'rotationNode',
    'centerNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateUvNode.d.ts    

objParams.rotateUvNode = [...objParams.tempNode,
    'uvNode',
    'rotationNode',
    'centerNode',
].distinct()

export type RotateUVNodeProps = Node<RotateUVNode, typeof RotateUVNode, { uvNode: ENode; rotationNode: ENode; centerNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rotateUvNode: Partial<{ uvNode: ENode; rotationNode: ENode; centerNode?: ENode; }>
    }
}

defaults.rotateUvNode = {}

