import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import RotateNode from 'three/src/nodes/utils/RotateNode.js'
export { RotateNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        rotateNode: typeof rotateNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rotateNode: typeof _rotateNode
    }
}



const rotateNode = ([
    'positionNode',
    'rotationNode',
] as const).distinct()
consParams.rotateNode = rotateNode



const _rotateNode = ([...objProps.tempNode,
    'positionNode',
    'rotationNode',
] as const).distinct()
objProps.rotateNode = _rotateNode

export type RotateNodeProps = Node<RotateNode, typeof RotateNode, { positionNode: ENode; rotationNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rotateNode: Partial<{ positionNode: ENode; rotationNode: ENode; }>
    }
}

defaults.rotateNode = {}

