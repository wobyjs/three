import { Node as ENode } from 'three/src/nodes/Nodes.js'
import HashNode from 'three/src/nodes/math/HashNode.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        HashNode: typeof HashNode
    }
}

Three.HashNode = HashNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hashNode: HashNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        hashNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        hashNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\HashNode.d.ts

consParams.hashNode = [
    'seedNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\HashNode.d.ts    

objParams.hashNode = [...objParams.node,
    'seedNode',
].distinct()

export type HashNodeProps = Node<HashNode, typeof HashNode, { seedNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        hashNode: Partial<{ seedNode: ENode; }>
    }
}

defaults.hashNode = {}

