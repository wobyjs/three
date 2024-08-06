import { MaterialNode } from '../../materials/MaterialNode'
import NodeMaterial, { NodeMaterialParameters } from 'three/src/nodes/materials/NodeMaterial.js'
export { NodeMaterial }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../lib/three/extensions'
import './NodeMaterial'
import '../../materials/ShaderMaterial'
import { WrapAsString } from '../../../three-types'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeMaterial: typeof NodeMaterial
    }
}

Three.NodeMaterial = NodeMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeMaterial: NodeMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeMaterial: WrapAsString<NodeMaterialParameters>
        nodeMaterialParameters: WrapAsString<NodeMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeMaterial: string[]
        nodeMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\NodeMaterial.d.ts
consParams.nodeMaterialParameters = {
    ...consParams.shaderMaterialParameters,
    ...(['normals',
        'colorSpaced',
        'lightsNode',
        'envNode',
        'aoNode',
        'colorNode',
        'normalNode',
        'opacityNode',
        'backdropNode',
        'backdropAlphaNode',
        'alphaTestNode',
        'positionNode',
        'depthNode',
        'shadowNode',
        'outputNode',
        'fragmentNode',
        'vertexNode',
    ] as const).toObject()
}

consParams.nodeMaterial = { ...consParams.shaderMaterial }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\NodeMaterial.d.ts    

objParams.nodeMaterialParameters = [...objParams.shaderMaterialParameters,
    'normals',
    'colorSpaced',
    'lightsNode',
    'envNode',
    'aoNode',
    'colorNode',
    'normalNode',
    'opacityNode',
    'backdropNode',
    'backdropAlphaNode',
    'alphaTestNode',
    'positionNode',
    'depthNode',
    'shadowNode',
    'outputNode',
    'fragmentNode',
    'vertexNode',
].distinct()


objParams.nodeMaterial = [...objParams.shaderMaterial,
    'normals',
    'lightsNode',
    'envNode',
    'aoNode',
    'colorNode',
    'normalNode',
    'opacityNode',
    'backdropNode',
    'backdropAlphaNode',
    'alphaTestNode',
    'positionNode',
    'depthNode',
    'shadowNode',
    'shadowPositionNode',
    'outputNode',
    'fragmentNode',
    'vertexNode',
].distinct()

export type NodeMaterialProps = MaterialNode<NodeMaterial, typeof NodeMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeMaterial: Partial<NodeMaterial>
    }
}

defaults.nodeMaterial = {}
