import { Light } from 'three/src/lights/Light.js'
import { Node } from '../../../three-types'
import AnalyticLightNode from 'three/src/nodes/lighting/AnalyticLightNode.js'
export { AnalyticLightNode }
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            analyticLightNode: AnalyticLightNodeProps<Light>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        analyticLightNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        analyticLightNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AnalyticLightNode.d.ts

consParams.analyticLightNode = [
    'light',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\AnalyticLightNode.d.ts    

objParams.analyticLightNode = [...objParams.lightingNode,
    'light',
].distinct()

export type AnalyticLightNodeProps<T extends Light> = Node<AnalyticLightNode<T>, typeof AnalyticLightNode<T>, { light?: T | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        analyticLightNode: { light?: Light }
    }
}

defaults.analyticLightNode = {}

