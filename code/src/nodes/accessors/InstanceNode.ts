import { InstancedMesh } from 'three/src/objects/InstancedMesh.js'
import { Node } from '../../../three-types'
import InstanceNode from 'three/src/nodes/accessors/InstanceNode.js'
export { InstanceNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        InstanceNode: typeof InstanceNode
    }
}

Three.InstanceNode = InstanceNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            instanceNode: InstanceNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        instanceNode: typeof instanceNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        instanceNode: typeof _instanceNode
    }
}



const instanceNode = ([
    'instanceMesh',
] as const).distinct()
consParams.instanceNode = instanceNode



const _instanceNode = ([...objProps.node,
    'instanceMesh',
    'instanceMatrixNode',
    'instanceColorNode',
] as const).distinct()
objProps.instanceNode = _instanceNode

export type InstanceNodeProps = Node<InstanceNode, typeof InstanceNode, { instanceMesh: InstancedMesh; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        instanceNode: { instanceMesh?: InstancedMesh; }
    }
}

defaults.instanceNode = {}

