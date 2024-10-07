import { Node } from '../../../three-types'
import IndexNode, { IndexNodeScope } from 'three/src/nodes/core/IndexNode.js'
export { IndexNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        IndexNode: typeof IndexNode
    }
}

Three.IndexNode = IndexNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            indexNode: IndexNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        indexNode: typeof indexNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        indexNode: typeof _indexNode
    }
}



const indexNode = ([
    'scope',
] as const).distinct()
consParams.indexNode = indexNode



const _indexNode = ([...objProps.node,
    'scope',
] as const).distinct()
objProps.indexNode = _indexNode

export type IndexNodeProps = Node<IndexNode, typeof IndexNode, { scope: IndexNodeScope; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        indexNode: Partial<{ scope: IndexNodeScope; }>
    }
}

defaults.indexNode = {}

