import ShadowNodeMaterial from 'three/src/nodes/materials/ShadowNodeMaterial.js';
export { ShadowNodeMaterial };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './NodeMaterial';
import '../../materials/ShadowMaterial';
Three.ShadowNodeMaterial = ShadowNodeMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\ShadowNodeMaterial.d.ts
consParams.shadowNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.shadowMaterialParameters
};
consParams.shadowNodeMaterial = { ...consParams.shadowNodeMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\ShadowNodeMaterial.d.ts    
objParams.shadowNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.shadowMaterialParameters,
].distinct();
objParams.shadowNodeMaterial = [...objParams.nodeMaterial,
    // Properties from ShadowMaterial
    'color',
].distinct();
defaults.shadowNodeMaterial = {};
