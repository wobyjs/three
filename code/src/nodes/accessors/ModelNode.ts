import { Object3DNode } from '../../../three-types'
import ModelNode from 'three/src/nodes/accessors/ModelNode.js'
export { ModelNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        modelNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        modelNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelNode.d.ts
/**
 * Similar to {@link Object3dNode} but the object comes from {@link NodeFrame}
 */

consParams.modelNode = [
    'scope',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ModelNode.d.ts
/**
 * Similar to {@link Object3dNode} but the object comes from {@link NodeFrame}
 */

objParams.modelNode = [...objParams.object3dNode,
].distinct()

export type ModelNodeProps = Object3DNode<ModelNode, typeof ModelNode, { scope?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        modelNode: { scope?: string; }
    }
}

defaults.modelNode = {}

