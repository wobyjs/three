import SpriteNodeMaterial from 'three/src/nodes/materials/SpriteNodeMaterial.js';
export * from 'three/src/materials/SpriteMaterial';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './NodeMaterial';
import '../../materials/SpriteMaterial';
import './NodeMaterial';
import '../../materials/SpriteMaterial';
Three.SpriteNodeMaterial = SpriteNodeMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\SpriteNodeMaterial.d.ts
consParams.spriteNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.spriteMaterialParameters
};
consParams.spriteNodeMaterial = { ...consParams.spriteNodeMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\SpriteNodeMaterial.d.ts    
objParams.spriteNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.spriteMaterialParameters,
].distinct();
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
].distinct();
defaults.spriteNodeMaterial = {};
