import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import PhysicalLightingModel from 'three/src/nodes/functions/PhysicalLightingModel.js'
export { PhysicalLightingModel }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PhysicalLightingModel: typeof PhysicalLightingModel
    }
}

Three.PhysicalLightingModel = PhysicalLightingModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            physicalLightingModel: PhysicalLightingModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        physicalLightingModel: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        physicalLightingModel: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhysicalLightingModel.d.ts

consParams.physicalLightingModel = [

    'clearcoat',
    'sheen',
    'iridescence',
    'anisotropy',
    'transmission',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhysicalLightingModel.d.ts    

objParams.physicalLightingModel = [...objParams.lightingModel,
    'clearcoat',
    'sheen',
    'iridescence',
    'anisotropy',
    'transmission',
    'clearcoatRadiance',
    'clearcoatSpecularDirect',
    'clearcoatSpecularIndirect',
    'sheenSpecularDirect',
    'sheenSpecularIndirect',
    'iridescenceFresnel',
    'iridescenceF0',
].distinct()

export type PhysicalLightingModelProps = Node<PhysicalLightingModel, typeof PhysicalLightingModel, { singleScatter: ENode; multiScatter: ENode; specularF90: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        physicalLightingModel: Partial<{ singleScatter: ENode; multiScatter: ENode; specularF90: ENode; }>
    }
}

defaults.physicalLightingModel = {}

