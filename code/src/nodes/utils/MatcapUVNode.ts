import { Node } from '../../../three-types'
import MatcapUVNode from 'three/src/nodes/utils/MatcapUVNode.js'
export { MatcapUVNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        MatcapUVNode: typeof MatcapUVNode
    }
}

Three.MatcapUVNode = MatcapUVNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            matcapUvNode: MatcapUVNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        matcapUvNode: typeof matcapUvNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        matcapUvNode: typeof _matcapUvNode
    }
}



const matcapUvNode = ([
] as const).distinct()
consParams.matcapUvNode = matcapUvNode



const _matcapUvNode = ([...objProps.tempNode,
] as const).distinct()
objProps.matcapUvNode = _matcapUvNode

export type MatcapUVNodeProps = Node<MatcapUVNode, typeof MatcapUVNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        matcapUvNode: Partial<{}>
    }
}

defaults.matcapUvNode = {}

