import { Node } from '../../../three-types'
import PointUVNode from 'three/src/nodes/accessors/PointUVNode.js'
export { PointUVNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PointUVNode: typeof PointUVNode
    }
}

Three.PointUVNode = PointUVNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointUvNode: PointUVNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pointUvNode: typeof pointUvNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        pointUvNode: typeof _pointUvNode
    }
}



const pointUvNode = ([
] as const).distinct()
consParams.pointUvNode = pointUvNode



const _pointUvNode = ([...objProps.node,
    'isPointUvNode',
] as const).distinct()
objProps.pointUvNode = _pointUvNode

export type PointUVNodeProps = Node<PointUVNode, typeof PointUVNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pointUvNode: {}
    }
}

defaults.pointUvNode = {}

