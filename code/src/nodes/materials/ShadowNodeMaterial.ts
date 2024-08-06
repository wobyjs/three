import { MaterialNode } from '../../materials/MaterialNode'
import ShadowNodeMaterial, { ShadowNodeMaterialParameters } from 'three/src/nodes/materials/ShadowNodeMaterial.js'
export { ShadowNodeMaterial }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './NodeMaterial'
import '../../materials/ShadowMaterial'
import { WrapAsString } from '../../../three-types'

declare module '../../../lib/3/three'
{
    interface Three {
        ShadowNodeMaterial: typeof ShadowNodeMaterial
    }
}

Three.ShadowNodeMaterial = ShadowNodeMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shadowNodeMaterial: ShadowNodeMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        shadowNodeMaterial: WrapAsString<ShadowNodeMaterialParameters>
        shadowNodeMaterialParameters: WrapAsString<ShadowNodeMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        shadowNodeMaterial: string[]
        shadowNodeMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\ShadowNodeMaterial.d.ts

consParams.shadowNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.shadowMaterialParameters
}

consParams.shadowNodeMaterial = { ...consParams.shadowNodeMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\ShadowNodeMaterial.d.ts    

objParams.shadowNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.shadowMaterialParameters,
].distinct()

objParams.shadowNodeMaterial = [...objParams.nodeMaterial,
    // Properties from ShadowMaterial
    'color',
].distinct()

export type ShadowNodeMaterialProps = MaterialNode<ShadowNodeMaterial, typeof ShadowNodeMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shadowNodeMaterial: Partial<ShadowNodeMaterial>
    }
}

defaults.shadowNodeMaterial = {}

