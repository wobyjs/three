import { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial.js';
export { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Material';
import './ShaderMaterial';
Three.RawShaderMaterial = RawShaderMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\RawShaderMaterial.d.ts
consParams.rawShaderMaterial = { ...consParams.shaderMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\RawShaderMaterial.d.ts    
objParams.rawShaderMaterial = [...objParams.shaderMaterial,
].distinct();
defaults.rawShaderMaterial = {};
