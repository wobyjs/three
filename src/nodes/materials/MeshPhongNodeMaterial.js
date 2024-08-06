import MeshPhongNodeMaterial from 'three/src/nodes/materials/MeshPhongNodeMaterial.js';
export * from 'three/src/nodes/materials/MeshPhongNodeMaterial.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './NodeMaterial';
import '../../materials/MeshPhongMaterial';
Three.MeshPhongNodeMaterial = MeshPhongNodeMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshPhongNodeMaterial.d.ts
consParams.meshPhongNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.meshPhongMaterialParameters
};
consParams.meshPhongNodeMaterial = { ...consParams.meshPhongNodeMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshPhongNodeMaterial.d.ts    
objParams.meshPhongNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.meshPhongMaterialParameters,
].distinct();
objParams.meshPhongNodeMaterial = [...objParams.nodeMaterial,
    'shininessNode',
    'specularNode',
    // Properties from MeshPhongMaterial
    'color',
    'specular',
    'shininess',
    'map',
    'lightMap',
    'lightMapIntensity',
    'aoMap',
    'aoMapIntensity',
    'emissive',
    'emissiveIntensity',
    'emissiveMap',
    'bumpMap',
    'bumpScale',
    'normalMap',
    'normalMapType',
    'normalScale',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'specularMap',
    'alphaMap',
    'envMap',
    'combine',
    'reflectivity',
    'refractionRatio',
    'wireframeLinecap',
    'wireframeLinejoin',
    'flatShading',
    'metal',
].distinct();
defaults.meshPhongNodeMaterial = {};
