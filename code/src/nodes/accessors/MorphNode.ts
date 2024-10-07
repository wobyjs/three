import { Node } from '../../../three-types'
import MorphNode from 'three/src/nodes/accessors/MorphNode.js'
export { MorphNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Mesh } from '../../objects/Mesh'

declare module '../../../lib/3/three'
{
    interface Three {
        MorphNode: typeof MorphNode
    }
}

Three.MorphNode = MorphNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            morphNode: MorphNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        morphNode: typeof morphNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        morphNode: typeof _morphNode
    }
}



const morphNode = ([
    'mesh',
] as const).distinct()
consParams.morphNode = morphNode



const _morphNode = ([...objProps.node,
    'mesh',
    'morphBaseInfluence',
] as const).distinct()
objProps.morphNode = _morphNode

export type MorphNodeProps = Node<MorphNode, typeof MorphNode, { mesh: Mesh }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        morphNode: { mesh?: Mesh }
    }
}

defaults.morphNode = {}

