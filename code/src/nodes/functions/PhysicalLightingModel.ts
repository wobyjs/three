import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import PhysicalLightingModel from 'three/src/nodes/functions/PhysicalLightingModel.js'
export { PhysicalLightingModel }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        physicalLightingModel: typeof physicalLightingModel
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        physicalLightingModel: typeof _physicalLightingModel
    }
}



const physicalLightingModel = ([

    'clearcoat',
    'sheen',
    'iridescence',
    'anisotropy',
    'transmission',
] as const).distinct()
consParams.physicalLightingModel = physicalLightingModel



const _physicalLightingModel = ([...objProps.lightingModel,
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
] as const).distinct()
objProps.physicalLightingModel = _physicalLightingModel

export type PhysicalLightingModelProps = Node<PhysicalLightingModel, typeof PhysicalLightingModel, { singleScatter: ENode; multiScatter: ENode; specularF90: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        physicalLightingModel: Partial<{ singleScatter: ENode; multiScatter: ENode; specularF90: ENode; }>
    }
}

defaults.physicalLightingModel = {}

