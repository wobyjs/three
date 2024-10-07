import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import SplitNode from 'three/src/nodes/utils/SplitNode.js'
export { SplitNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'
import { SwizzleOption } from 'three/src/nodes/tsl/TSLCore'

declare module '../../../lib/3/three'
{
    interface Three {
        SplitNode: typeof SplitNode
    }
}

Three.SplitNode = SplitNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            splitNode: SplitNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        splitNode: typeof splitNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        splitNode: typeof _splitNode
    }
}

/** swizzle node */

const splitNode = ([
    /**
     * @param node the input node
     * @param components swizzle like string, default = "x"
     */
    'node',
    'components',
] as const).distinct()
consParams.splitNode = splitNode

/** swizzle node */

const _splitNode = ([...objProps.node,
    'node',
    'components',
    /**
     * @param node the input node
     * @param components swizzle like string, default = "x"
     */
] as const).distinct()
objProps.splitNode = _splitNode

export type SplitNodeProps = Node<SplitNode, typeof SplitNode, { node: ENode; components?: SwizzleOption; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        splitNode: Partial<{ node?: ENode; components?: SwizzleOption; }>
    }
}

defaults.splitNode = {}

