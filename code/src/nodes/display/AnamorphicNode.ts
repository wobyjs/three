import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import AnamorphicNode from 'three/src/nodes/display/AnamorphicNode.js'
export { AnamorphicNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        AnamorphicNode: typeof AnamorphicNode
    }
}

Three.AnamorphicNode = AnamorphicNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            anamorphicNode: AnamorphicNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        anamorphicNode: typeof anamorphicNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        anamorphicNode: typeof _anamorphicNode
    }
}



const anamorphicNode = ([
    'textureNode',
    'thresholdNode',
    'scaleNode',
    'samples',
] as const).distinct()
consParams.anamorphicNode = anamorphicNode



const _anamorphicNode = ([...objProps.tempNode,
    'textureNode',
    'thresholdNode',
    'scaleNode',
    'samples',
    'resolution',
] as const).distinct()
objProps.anamorphicNode = _anamorphicNode

export type AnamorphicNodeProps = Node<AnamorphicNode, typeof AnamorphicNode, { textureNode: ENode; thresholdNode: ENode; scaleNode: ENode; samples: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        anamorphicNode: Partial<{ textureNode: ENode; thresholdNode: ENode; scaleNode: ENode; samples: number; }>
    }
}

defaults.anamorphicNode = {}

