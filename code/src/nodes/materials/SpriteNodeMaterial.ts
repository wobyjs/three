import { MaterialNode } from '../../materials/MaterialNode'
import SpriteNodeMaterial from 'three/src/nodes/materials/SpriteNodeMaterial.js'
import { SpriteMaterialParameters } from 'three/src/materials/SpriteMaterial'
export * from 'three/src/materials/SpriteMaterial'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './NodeMaterial'
import '../../materials/SpriteMaterial'
import { WrapAsString } from '../../../three-types'
import './NodeMaterial'
import '../../materials/SpriteMaterial'

declare module '../../../lib/3/three'
{
    interface Three {
        SpriteNodeMaterial: typeof SpriteNodeMaterial
    }
}

Three.SpriteNodeMaterial = SpriteNodeMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spriteNodeMaterial: SpriteNodeMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        spriteNodeMaterial: WrapAsString<SpriteMaterialParameters>
        spriteNodeMaterialParameters: WrapAsString<SpriteMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        spriteNodeMaterial: string[]
        spriteNodeMaterialParameters: String[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\SpriteNodeMaterial.d.ts

consParams.spriteNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.spriteMaterialParameters
}


consParams.spriteNodeMaterial = { ...consParams.spriteNodeMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\SpriteNodeMaterial.d.ts    

objParams.spriteNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.spriteMaterialParameters,
].distinct()

objParams.spriteNodeMaterial = [...objParams.nodeMaterial,
    'isSpriteNodeMaterial',
    'rotationNode',
    'scaleNode',
    // Properties from SpriteMaterial
    'color',
    'map',
    'alphaMap',
    'rotation',
    'sizeAttenuation',
].distinct()

export type SpriteNodeMaterialProps = MaterialNode<SpriteNodeMaterial, typeof SpriteNodeMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        spriteNodeMaterial: Partial<SpriteNodeMaterial>
    }
}

defaults.spriteNodeMaterial = {}

