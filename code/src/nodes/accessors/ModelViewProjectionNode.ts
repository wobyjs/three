import { Object3DNode } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ModelViewProjectionNode from 'three/src/nodes/accessors/ModelViewProjectionNode.js'
export { ModelViewProjectionNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ModelViewProjectionNode: typeof ModelViewProjectionNode
    }
}

Three.ModelViewProjectionNode = ModelViewProjectionNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            modelViewProjectionNode: ModelViewProjectionNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        modelViewProjectionNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        modelViewProjectionNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelViewProjectionNode.d.ts

consParams.modelViewProjectionNode = [
    'positionNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelViewProjectionNode.d.ts    

objParams.modelViewProjectionNode = [...objParams.node,
].distinct()

export type ModelViewProjectionNodeProps = Object3DNode<ModelViewProjectionNode, typeof ModelViewProjectionNode, { positionNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        modelViewProjectionNode: { positionNode?: ENode; }
    }
}

defaults.modelViewProjectionNode = {}

