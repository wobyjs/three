import { MaterialNode } from '../../materials/MaterialNode'
import MeshNormalNodeMaterial from 'three/src/nodes/materials/MeshNormalNodeMaterial.js'
export { MeshNormalNodeMaterial }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './NodeMaterial'
import './MeshBasicNodeMaterial'
import '../../materials/MeshPhongMaterial'
import { WrapAsString } from '../../../three-types'
import { MeshBasicNodeMaterialParameters } from 'three/src/nodes/materials/MeshBasicNodeMaterial'
import 'three/examples/jsm/Addons'

declare module '../../../lib/3/three'
{
    interface Three {
        MeshNormalNodeMaterial: typeof MeshNormalNodeMaterial
    }
}

Three.MeshNormalNodeMaterial = MeshNormalNodeMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshNormalNodeMaterial: MeshNormalNodeMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        meshNormalNodeMaterial: WrapAsString<MeshBasicNodeMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        meshNormalNodeMaterial: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshNormalNodeMaterial.d.ts

consParams.meshNormalNodeMaterial = { ...consParams.meshBasicNodeMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshNormalNodeMaterial.d.ts    

objParams.meshNormalNodeMaterial = [...objParams.nodeMaterial,
    // Properties from MeshNormalMaterial
    'bumpMap',
    'bumpScale',
    'normalMap',
    'normalMapType',
    'normalScale',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'flatShading',
].distinct()

export type MeshNormalNodeMaterialProps = MaterialNode<MeshNormalNodeMaterial, typeof MeshNormalNodeMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        meshNormalNodeMaterial: Partial<MeshNormalNodeMaterial>
    }
}

defaults.meshNormalNodeMaterial = {}