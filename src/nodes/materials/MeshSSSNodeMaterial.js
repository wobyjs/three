import MeshSSSNodeMaterial from 'three/src/nodes/materials/MeshSSSNodeMaterial.js';
export * from 'three/src/nodes/materials/MeshSSSNodeMaterial.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './NodeMaterial';
import './MeshPhysicalNodeMaterial';
Three.MeshSSSNodeMaterial = MeshSSSNodeMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshSSSNodeMaterial.d.ts
consParams.meshSssNodeMaterial = { ...consParams.meshPhysicalNodeMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshSSSNodeMaterial.d.ts    
objParams.meshSssNodeMaterial = [...objParams.meshPhysicalNodeMaterial,
    'thicknessColorNode',
    'thicknessDistortionNode',
    'thicknessAmbientNode',
    'thicknessAttenuationNode',
    'thicknessPowerNode',
    'thicknessScaleNode',
].distinct();
defaults.meshSssNodeMaterial = {};
