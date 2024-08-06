import { Node } from '../../../three-types'
import LightingNode from 'three/src/nodes/lighting/LightingNode.js'
export { LightingNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LightingNode: typeof LightingNode
    }
}

Three.LightingNode = LightingNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightingNode: LightingNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lightingNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lightingNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightingNode.d.ts

consParams.lightingNode = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightingNode.d.ts    

objParams.lightingNode = [...objParams.node,
].distinct()

export type LightingNodeProps = Node<LightingNode, typeof LightingNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightingNode: {}
    }
}

defaults.lightingNode = {}

