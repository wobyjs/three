import { Node } from '../../../three-types'
import MatcapUVNode from 'three/src/nodes/utils/MatcapUVNode.js'
export { MatcapUVNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        matcapUvNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        matcapUvNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MatcapUVNode.d.ts

consParams.matcapUvNode = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MatcapUvNode.d.ts    

objParams.matcapUvNode = [...objParams.tempNode,
].distinct()

export type MatcapUVNodeProps = Node<MatcapUVNode, typeof MatcapUVNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        matcapUvNode: Partial<{}>
    }
}

defaults.matcapUvNode = {}

