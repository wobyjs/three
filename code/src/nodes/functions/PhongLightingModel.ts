import { Node } from '../../../three-types'
import PhongLightingModel from 'three/src/nodes/functions/PhongLightingModel.js'
export { PhongLightingModel }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PhongLightingModel: typeof PhongLightingModel
    }
}

Three.PhongLightingModel = PhongLightingModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            phongLightingModel: PhongLightingModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        phongLightingModel: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        phongLightingModel: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhongLightingModel.d.ts

consParams.phongLightingModel = [
    'specular',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhongLightingModel.d.ts    

objParams.phongLightingModel = [...objParams.lightingModel,
    'specular',
].distinct()

export type PhongLightingModelProps = Node<PhongLightingModel, typeof PhongLightingModel, { specular?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        phongLightingModel: { specular?: boolean; }
    }
}

defaults.phongLightingModel = {}

