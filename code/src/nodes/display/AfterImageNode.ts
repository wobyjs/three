import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import AfterImageNode from 'three/src/nodes/display/AfterImageNode.js'
export { AfterImageNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        AfterImageNode: typeof AfterImageNode
    }
}

Three.AfterImageNode = AfterImageNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            afterImageNode: AfterImageNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        afterImageNode: typeof afterImageNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        afterImageNode: typeof _afterImageNode
    }
}



const afterImageNode = ([
    'textureNode',
    'damp',
] as const).distinct()
consParams.afterImageNode = afterImageNode



const _afterImageNode = ([...objProps.tempNode,
    'textureNode',
    'textureNodeOld',
    'damp',
] as const).distinct()
objProps.afterImageNode = _afterImageNode

export type AfterImageNodeProps = Node<AfterImageNode, typeof AfterImageNode, { textureNode: ENode; damp?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        afterImageNode: Partial<{ textureNode: ENode; damp?: number; }>
    }
}

defaults.afterImageNode = {}

