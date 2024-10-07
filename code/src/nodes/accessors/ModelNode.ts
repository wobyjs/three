import { Node } from '../../../three-types'
import ModelNode from 'three/src/nodes/accessors/ModelNode.js'
export { ModelNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ModelNode: typeof ModelNode
    }
}

Three.ModelNode = ModelNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            modelNode: ModelNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        modelNode: typeof modelNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        modelNode: typeof _modelNode
    }
}


/**
 * Similar to {@link Object3dNode} but the object comes from {@link NodeFrame}
 */

const modelNode = ([
    'scope',
] as const).distinct()
consParams.modelNode = modelNode


/**
 * Similar to {@link Object3dNode} but the object comes from {@link NodeFrame}
 */

const _modelNode = ([...objProps.object3dNode,
] as const).distinct()
objProps.modelNode = _modelNode

export type ModelNodeProps = Node<ModelNode, typeof ModelNode, { scope?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        modelNode: { scope?: string; }
    }
}

defaults.modelNode = {}

