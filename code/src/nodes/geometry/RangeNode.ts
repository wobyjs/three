import { Node } from '../../../three-types'
// @ts-ignore: THREE.js examples not included in type definitions
import { RangeNode, RangeMode } from 'three/examples/jsm/nodes/math/RangeNode.js'
export { RangeNode, RangeMode }
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

export type RangeNodeProps = Node<RangeNode, typeof RangeNode, { min: RangeMode; max: RangeMode }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rangeNode: Partial<{ min: RangeMode; max: RangeMode }>
    }
}

defaults.rangeNode = {}
