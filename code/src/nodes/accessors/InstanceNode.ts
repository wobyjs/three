import { InstancedMesh } from 'three/src/objects/InstancedMesh.js'
import { Object3DNode } from '../../../three-types'
import InstanceNode from 'three/src/nodes/accessors/InstanceNode.js'
export { InstanceNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        instanceNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        instanceNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\InstanceNode.d.ts

consParams.instanceNode = [
    'instanceMesh',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\InstanceNode.d.ts    

objParams.instanceNode = [...objParams.node,
    'instanceMesh',
    'instanceMatrixNode',
    'instanceColorNode',
].distinct()

export type InstanceNodeProps = Object3DNode<InstanceNode, typeof InstanceNode, { instanceMesh: InstancedMesh; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        instanceNode: { instanceMesh?: InstancedMesh; }
    }
}

defaults.instanceNode = {}

