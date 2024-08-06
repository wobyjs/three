import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import PosterizeNode from 'three/src/nodes/display/PosterizeNode.js'
export { PosterizeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

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
        posterizeNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        posterizeNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PosterizeNode.d.ts

consParams.posterizeNode = [
    'sourceNode',
    'stepsNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\PosterizeNode.d.ts    

objParams.posterizeNode = [...objParams.node,
    'sourceNode',
    'stepsNode',
].distinct()

export type PosterizeNodeProps = Node<PosterizeNode, typeof PosterizeNode, { sourceNode: ENode; stepsNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        posterizeNode: Partial<{ sourceNode: ENode; stepsNode: ENode; }>
    }
}

defaults.posterizeNode = {}

