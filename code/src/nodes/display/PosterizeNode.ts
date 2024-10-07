import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import PosterizeNode from 'three/src/nodes/display/PosterizeNode.js'
export { PosterizeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        PosterizeNode: typeof PosterizeNode
    }
}

Three.PosterizeNode = PosterizeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            posterizeNode: PosterizeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        posterizeNode: typeof posterizeNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        posterizeNode: typeof _posterizeNode
    }
}



const posterizeNode = ([
    'sourceNode',
    'stepsNode',
] as const).distinct()
consParams.posterizeNode = posterizeNode



const _posterizeNode = ([...objProps.node,
    'sourceNode',
    'stepsNode',
] as const).distinct()
objProps.posterizeNode = _posterizeNode

export type PosterizeNodeProps = Node<PosterizeNode, typeof PosterizeNode, { sourceNode: ENode; stepsNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        posterizeNode: Partial<{ sourceNode: ENode; stepsNode: ENode; }>
    }
}

defaults.posterizeNode = {}

