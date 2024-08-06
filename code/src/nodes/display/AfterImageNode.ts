import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import AfterImageNode from 'three/src/nodes/display/AfterImageNode.js'
export { AfterImageNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AfterImageNode: typeof AfterImageNode
    }
}

Three.AfterImageNode = AfterImageNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            afterImageNode: AfterImageNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        afterImageNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        afterImageNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AfterImageNode.d.ts

consParams.afterImageNode = [
    'textureNode',
    'damp',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\AfterImageNode.d.ts    

objParams.afterImageNode = [...objParams.tempNode,
    'textureNode',
    'textureNodeOld',
    'damp',
].distinct()

export type AfterImageNodeProps = Node<AfterImageNode, typeof AfterImageNode, { textureNode: ENode; damp?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        afterImageNode: Partial<{ textureNode: ENode; damp?: number; }>
    }
}

defaults.afterImageNode = {}

