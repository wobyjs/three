import LightingNode from 'three/src/nodes/lighting/LightingNode.js'
import { Node } from '../../../three-types'
import LightsNode from 'three/src/nodes/lighting/LightsNode.js'
export { LightsNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LightsNode: typeof LightsNode
    }
}

Three.LightsNode = LightsNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightsNode: LightsNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lightsNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lightsNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightsNode.d.ts

consParams.lightsNode = [
    'lightNodes',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightsNode.d.ts    

objParams.lightsNode = [...objParams.node,
    'lightNodes',
].distinct()

export type LightsNodeProps = Node<LightsNode, typeof LightsNode, { lightNodes?: LightingNode[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightsNode: { lightNodes?: LightingNode[]; }
    }
}

defaults.lightsNode = {}

