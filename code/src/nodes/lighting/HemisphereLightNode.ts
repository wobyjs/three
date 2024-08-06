import { HemisphereLight } from 'three/src/lights/HemisphereLight.js'
import { Node } from '../../../three-types'
import HemisphereLightNode from 'three/src/nodes/lighting/HemisphereLightNode.js'
export { HemisphereLightNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        HemisphereLightNode: typeof HemisphereLightNode
    }
}

Three.HemisphereLightNode = HemisphereLightNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hemisphereLightNode: HemisphereLightNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        hemisphereLightNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        hemisphereLightNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\HemisphereLightNode.d.ts

consParams.hemisphereLightNode = [
    'light',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\HemisphereLightNode.d.ts    

objParams.hemisphereLightNode = [...objParams.analyticLightNode,
    'lightPositionNode',
    'lightDirectionNode',
    'groundColorNode',
].distinct()

export type HemisphereLightNodeProps = Node<HemisphereLightNode, typeof HemisphereLightNode, { light?: HemisphereLight | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        hemisphereLightNode: { light?: HemisphereLight | null; }
    }
}

defaults.hemisphereLightNode = {}

