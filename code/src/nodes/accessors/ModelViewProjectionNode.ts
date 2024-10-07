import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ModelViewProjectionNode from 'three/src/nodes/accessors/ModelViewProjectionNode.js'
export { ModelViewProjectionNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        modelViewProjectionNode: typeof modelViewProjectionNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        modelViewProjectionNode: typeof _modelViewProjectionNode
    }
}



const modelViewProjectionNode = ([
    'positionNode',
] as const).distinct()
consParams.modelViewProjectionNode = modelViewProjectionNode



const _modelViewProjectionNode = ([...objProps.node,
] as const).distinct()
objProps.modelViewProjectionNode = _modelViewProjectionNode

export type ModelViewProjectionNodeProps = Node<ModelViewProjectionNode, typeof ModelViewProjectionNode, { positionNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        modelViewProjectionNode: { positionNode?: ENode; }
    }
}

defaults.modelViewProjectionNode = {}

