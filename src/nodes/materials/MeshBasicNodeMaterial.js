import MeshBasicNodeMaterial from 'three/src/nodes/materials/MeshBasicNodeMaterial.js';
export * from 'three/src/nodes/materials/MeshBasicNodeMaterial.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './NodeMaterial';
import '../../materials/MeshBasicMaterial';
import '../../materials/MeshNormalMaterial';
Three.MeshBasicNodeMaterial = MeshBasicNodeMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshBasicNodeMaterial.d.ts
consParams.meshBasicNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.meshBasicMaterialParameters, ...consParams.meshNormalMaterialParameters
};
consParams.meshBasicNodeMaterial = { ...consParams.meshBasicNodeMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshBasicNodeMaterial.d.ts    
objParams.meshBasicNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.meshBasicMaterialParameters,
].distinct();
objParams.meshBasicNodeMaterial = [...objParams.nodeMaterial,
    // Properties from MeshBasicMaterial
    'color',
    'map',
    'lightMap',
    'lightMapIntensity',
    'aoMap',
    'aoMapIntensity',
    'specularMap',
    'alphaMap',
    'envMap',
    'combine',
    'reflectivity',
    'refractionRatio',
    'wireframeLinecap',
    'wireframeLinejoin',
].distinct();
defaults.meshBasicNodeMaterial = {};
