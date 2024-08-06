import { MeshPostProcessingMaterial } from 'three/examples/jsm/materials/MeshPostProcessingMaterial.js';
export * from 'three/examples/jsm/materials/MeshPostProcessingMaterial.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MeshPostProcessingMaterial = MeshPostProcessingMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\materials\MeshPostProcessingMaterial.d.ts
consParams.meshPostProcessingMaterialParameters = { ...consParams.meshPhysicalMaterialParameters };
consParams.meshPostProcessingMaterial = { ...consParams.meshPostProcessingMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\materials\MeshPostProcessingMaterial.d.ts    
objParams.meshPostProcessingMaterialParameters = [...objParams.meshPhysicalMaterial,
    'aoPassMap',
    'aoPassMapScale',
].distinct();
objParams.meshPostProcessingMaterial = [...objParams.meshPhysicalMaterial,
    'aoPassMap',
].distinct();
defaults.meshPostProcessingMaterial = {};
