import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import SetNode from 'three/src/nodes/utils/SetNode.js'
export { SetNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        SetNode: typeof SetNode
    }
}

Three.SetNode = SetNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            setNode: SetNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        setNode: typeof setNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        setNode: typeof _setNode
    }
}


const setNode = ([
    'sourceNode',
    'components',
    'targetNode',
] as const).distinct()
consParams.setNode = setNode

const _setNode = ([...objProps.tempNode,
    'sourceNode',
    'components',
    'targetNode',
] as const).distinct()
objProps.setNode = _setNode

export type SetNodeProps = Node<SetNode, typeof SetNode, { sourceNode: ENode, components: string[], targetNode: ENode }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        setNode: Partial<{ sourceNode: ENode, components: string[], targetNode: ENode }>
    }
}

defaults.setNode = {}


