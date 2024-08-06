import { MaterialNode } from '../../materials/MaterialNode'
import LineBasicNodeMaterial from 'three/src/nodes/materials/LineBasicNodeMaterial.js'
export { LineBasicNodeMaterial }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './NodeMaterial'
import '../../materials/LineBasicMaterial'
import { WrapAsString } from '../../../three-types'
import { NodeMaterialParameters } from 'three/src/nodes/materials/NodeMaterial'
import { LineBasicMaterialParameters } from '../../materials/LineBasicMaterial'

declare module '../../../lib/3/three'
{
    interface Three {
        LineBasicNodeMaterial: typeof LineBasicNodeMaterial
    }
}

Three.LineBasicNodeMaterial = LineBasicNodeMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineBasicNodeMaterial: LineBasicNodeMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lineBasicNodeMaterial: WrapAsString<NodeMaterialParameters & LineBasicMaterialParameters>
        lineBasicNodeMaterialParameters: WrapAsString<NodeMaterialParameters & LineBasicMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lineBasicNodeMaterial: string[]
        lineBasicNodeMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\LineBasicNodeMaterial.d.ts

consParams.lineBasicNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.lineBasicMaterialParameters
}


consParams.lineBasicNodeMaterial = { ...consParams.lineBasicNodeMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\LineBasicNodeMaterial.d.ts    

objParams.lineBasicNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.lineBasicMaterialParameters,
].distinct()


objParams.lineBasicNodeMaterial = [...objParams.nodeMaterial,
    // Properties from LineBasicMaterial
    'color',
    'linecap',
    'linejoin',
    'map',
].distinct()

export type LineBasicNodeMaterialProps = MaterialNode<LineBasicNodeMaterial, typeof LineBasicNodeMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lineBasicNodeMaterial: Partial<LineBasicNodeMaterial>
    }
}

defaults.lineBasicNodeMaterial = {}