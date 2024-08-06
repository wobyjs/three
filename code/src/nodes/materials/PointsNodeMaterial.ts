import { MaterialNode } from '../../materials/MaterialNode'
import PointsNodeMaterial, { PointsNodeMaterialParameters } from 'three/src/nodes/materials/PointsNodeMaterial.js'
export { PointsNodeMaterial }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './NodeMaterial'
import '../../materials/PointsMaterial'
import { WrapAsString } from '../../../three-types'

declare module '../../../lib/3/three'
{
    interface Three {
        PointsNodeMaterial: typeof PointsNodeMaterial
    }
}

Three.PointsNodeMaterial = PointsNodeMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointsNodeMaterial: PointsNodeMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pointsNodeMaterial: WrapAsString<PointsNodeMaterialParameters>
        pointsNodeMaterialParameters: WrapAsString<PointsNodeMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        pointsNodeMaterial: string[]
        pointsNodeMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\PointsNodeMaterial.d.ts

consParams.pointsNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.pointsMaterialParameters
}

consParams.pointsNodeMaterial = { ...consParams.pointsNodeMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\PointsNodeMaterial.d.ts    

objParams.pointsNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.pointsMaterialParameters,
].distinct()


objParams.pointsNodeMaterial = [...objParams.nodeMaterial,
    // Properties from PointsMaterial
    'color',
    'map',
    'alphaMap',
    'size',
    'sizeAttenuation',
].distinct()

export type PointsNodeMaterialProps = MaterialNode<PointsNodeMaterial, typeof PointsNodeMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pointsNodeMaterial: Partial<PointsNodeMaterial>
    }
}

defaults.pointsNodeMaterial = {}
