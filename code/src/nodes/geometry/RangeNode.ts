import { Node } from '../../../three-types'
import RangeNode, { RangeModeBound } from 'three/src/nodes/geometry/RangeNode.js'
export { RangeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        RangeNode: typeof RangeNode
    }
}

Three.RangeNode = RangeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rangeNode: RangeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rangeNode: typeof rangeNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rangeNode: typeof _rangeNode
    }
}

const rangeNode = ([
    'min',
    'max',
] as const).distinct()
consParams.rangeNode = rangeNode

const _rangeNode = ([...objProps.node,
    'isComputeNode',
    'count',
    'workgroupSize',
    'dispatchCount',
] as const).distinct()
objProps.rangeNode = _rangeNode

export type RangeNodeProps = Node<RangeNode, typeof RangeNode, { min: RangeModeBound; max: RangeModeBound; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rangeNode: Partial<{ min: RangeModeBound; max: RangeModeBound; }>
    }
}

defaults.rangeNode = {}

