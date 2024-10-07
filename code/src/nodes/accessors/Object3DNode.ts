import { Object3D } from 'three/src/core/Object3D.js'
import { type Node } from '../../../three-types'
import Object3DNode_ from 'three/src/nodes/accessors/Object3DNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        object3dNode: typeof object3dNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        object3dNode: typeof _object3dNode
    }
}



const object3dNode = ([
] as const).distinct()
consParams.object3dNode = object3dNode



const _object3dNode = ([...objProps.node,
    'scope',
    'object3d',
] as const).distinct()
objProps.object3dNode = _object3dNode

export type Object3DNodeProps = Node<Object3DNode_, typeof Object3DNode_, { scope?: string; object3d?: Object3D | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        object3DNode: { scope?: string; object3d?: Object3D | null; }
    }
}

defaults.object3DNode = {}

