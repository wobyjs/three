import { Node } from '../../../three-types'
import ShadowMaskModel from 'three/src/nodes/functions/ShadowMaskModel.js'
export { ShadowMaskModel }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ShadowMaskModel: typeof ShadowMaskModel
    }
}

Three.ShadowMaskModel = ShadowMaskModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shadowMaskModel: ShadowMaskModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        shadowMaskModel: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        shadowMaskModel: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\ShadowMaskModel.d.ts

consParams.shadowMaskModel = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\ShadowMaskModel.d.ts    

objParams.shadowMaskModel = [...objParams.lightingModel,
    'shadowNode',
].distinct()

export type ShadowMaskModelProps = Node<ShadowMaskModel, typeof ShadowMaskModel, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shadowMaskModel: {}
    }
}

defaults.shadowMaskModel = {}

