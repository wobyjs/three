import { Node } from '../../../three-types'
import IndexNode, { IndexNodeScope } from 'three/src/nodes/core/IndexNode.js'
export { IndexNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        indexNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        indexNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\IndexNode.d.ts

consParams.indexNode = [
    'scope',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\IndexNode.d.ts    

objParams.indexNode = [...objParams.node,
    'scope',
].distinct()

export type IndexNodeProps = Node<IndexNode, typeof IndexNode, { scope: IndexNodeScope; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        indexNode: Partial<{ scope: IndexNodeScope; }>
    }
}

defaults.indexNode = {}

