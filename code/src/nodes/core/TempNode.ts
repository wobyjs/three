import { Node } from '../../../three-types'
import TempNode from 'three/src/nodes/core/TempNode.js'
export { TempNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TempNode: typeof TempNode
    }
}

Three.TempNode = TempNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tempNode: TempNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tempNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        tempNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\TempNode.d.ts

consParams.tempNode = [
    'type',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\TempNode.d.ts    

objParams.tempNode = [...objParams.node,
    'isTempNode',
].distinct()

export type TempNodeProps = Node<TempNode, typeof TempNode, { type: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tempNode: Partial<{ type: string | null; }>
    }
}

defaults.tempNode = {}

