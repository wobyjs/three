import { Object3D } from 'three/src/core/Object3D.js'
import { type Object3DNode } from '../../../three-types'
import Object3DNode_ from 'three/src/nodes/accessors/Object3DNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Object3DNode: typeof Object3DNode_
    }
}

Three.Object3DNode = Object3DNode_

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            object3dNode: Object3DNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        object3dNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        object3dNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\Object3dNode.d.ts

consParams.object3dNode = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\Object3dNode.d.ts    

objParams.object3dNode = [...objParams.node,
    'scope',
    'object3d',
].distinct()

export type Object3DNodeProps = Object3DNode<Object3DNode_, typeof Object3DNode_, { scope?: string; object3d?: Object3D | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        object3DNode: { scope?: string; object3d?: Object3D | null; }
    }
}

defaults.object3DNode = {}

