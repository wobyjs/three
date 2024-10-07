import { Node } from '../../../three-types'
import TempNode from 'three/src/nodes/core/TempNode.js'
export { TempNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        TempNode: typeof TempNode
    }
}

Three.TempNode = TempNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tempNode: TempNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tempNode: typeof tempNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        tempNode: typeof _tempNode
    }
}


const tempNode = ([
    'type',
] as const).distinct()
consParams.tempNode = tempNode



const _tempNode = ([...objProps.node,
    'isTempNode',
] as const).distinct()
objProps.tempNode = _tempNode

export type TempNodeProps = Node<TempNode, typeof TempNode, { type: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tempNode: Partial<{ type: string | null; }>
    }
}

defaults.tempNode = {}

