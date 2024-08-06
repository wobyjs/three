import { Node } from '../../../three-types'
import FrontFacingNode from 'three/src/nodes/display/FrontFacingNode.js'
export { FrontFacingNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FrontFacingNode: typeof FrontFacingNode
    }
}

Three.FrontFacingNode = FrontFacingNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            frontFacingNode: FrontFacingNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        frontFacingNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        frontFacingNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\FrontFacingNode.d.ts

consParams.frontFacingNode = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\FrontFacingNode.d.ts    

objParams.frontFacingNode = [...objParams.node,
    'isFrontFacingNode',
].distinct()

export type FrontFacingNodeProps = Node<FrontFacingNode, typeof FrontFacingNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        frontFacingNode: {}
    }
}

defaults.frontFacingNode = {}

