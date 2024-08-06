import { PointLight } from 'three/src/lights/PointLight.js'
import { Node } from '../../../three-types'
import PointLightNode from 'three/src/nodes/lighting/PointLightNode.js'
export { PointLightNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PointLightNode: typeof PointLightNode
    }
}

Three.PointLightNode = PointLightNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointLightNode: PointLightNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pointLightNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        pointLightNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\PointLightNode.d.ts

consParams.pointLightNode = [
    'light',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\PointLightNode.d.ts    

objParams.pointLightNode = [...objParams.analyticLightNode,
    'cutoffDistanceNode',
    'decayExponentNode',
    'directionNode',
    'coneCosNode',
    'penumbraCosNode',
    'cutoffDistanceNode',
    'decayExponentNode',
].distinct()

export type PointLightNodeProps = Node<PointLightNode, typeof PointLightNode, { light?: PointLight | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pointLightNode: { light?: PointLight | null; }
    }
}

defaults.pointLightNode = {}

