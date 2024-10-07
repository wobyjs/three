import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import DotScreenNode from 'three/src/nodes/display/DotScreenNode.js'
export { DotScreenNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'
import { Vector2 } from 'three/src/math/Vector2'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        DotScreenNode: typeof DotScreenNode
    }
}

Three.DotScreenNode = DotScreenNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dotScreenNode: DotScreenNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        dotScreenNode: typeof dotScreenNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        dotScreenNode: typeof _dotScreenNode
    }
}


const dotScreenNode = ([
    'inputNode',
    'center',
    'angle',
    'scale',
] as const).distinct()
consParams.dotScreenNode = dotScreenNode

const _dotScreenNode = ([...objProps.tempNode,
    'inputNode',
    'center',
    'angle',
    'scale',
] as const).distinct()
objProps.dotScreenNode = _dotScreenNode

export type DotScreenNodeProps = Node<DotScreenNode, typeof DotScreenNode, { inputNode: ENode, center?: Vector2, angle?: number, scale?: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        dotScreenNode: Partial<{ inputNode: ENode, center?: Vector2, angle?: number, scale?: number }>
    }
}

defaults.dotScreenNode = {}

