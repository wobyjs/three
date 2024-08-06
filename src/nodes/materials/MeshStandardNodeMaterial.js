import MeshStandardNodeMaterial from 'three/src/nodes/materials/MeshStandardNodeMaterial.js';
export { MeshStandardNodeMaterial };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './NodeMaterial';
import '../../materials/MeshStandardMaterial';
Three.MeshStandardNodeMaterial = MeshStandardNodeMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshStandardNodeMaterial.d.ts
consParams.meshStandardNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.meshStandardMaterialParameters
};
consParams.meshStandardNodeMaterial = { ...consParams.meshStandardNodeMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshStandardNodeMaterial.d.ts    
objParams.meshStandardNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.meshStandardMaterialParameters,
].distinct();
objParams.meshStandardNodeMaterial = [...objParams.nodeMaterial,
    'emissiveNode',
    'metalnessNode',
    'roughnessNode',
    // Properties from MeshStandardMaterial
    'color',
    'roughness',
    'metalness',
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
    'roughnessMap',
    'metalnessMap',
    'alphaMap',
    'envMap',
    'envMapIntensity',
    'wireframeLinecap',
    'wireframeLinejoin',
    'flatShading',
].distinct();
defaults.meshStandardNodeMaterial = {};
