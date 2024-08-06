import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import RotateNode from 'three/src/nodes/utils/RotateNode.js'
export { RotateNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        RotateNode: typeof RotateNode
    }
}

Three.RotateNode = RotateNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rotateNode: RotateNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rotateNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        rotateNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateNode.d.ts

consParams.rotateNode = [
    'positionNode',
    'rotationNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RotateNode.d.ts    

objParams.rotateNode = [...objParams.tempNode,
    'positionNode',
    'rotationNode',
].distinct()

export type RotateNodeProps = Node<RotateNode, typeof RotateNode, { positionNode: ENode; rotationNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rotateNode: Partial<{ positionNode: ENode; rotationNode: ENode; }>
    }
}

defaults.rotateNode = {}

