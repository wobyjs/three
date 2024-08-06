import { MeshGouraudMaterial } from 'three/examples/jsm/materials/MeshGouraudMaterial.js';
export * from 'three/examples/jsm/materials/MeshGouraudMaterial.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MeshGouraudMaterial = MeshGouraudMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\materials\MeshGouraudMaterial.d.ts
/**
 * MeshGouraudMaterial
 *
 * Lambert illumination model with Gouraud (per-vertex) shading
 */
consParams.meshGouraudMaterial = { ...consParams.shaderMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\materials\MeshGouraudMaterial.d.ts
/**
 * MeshGouraudMaterial
 *
 * Lambert illumination model with Gouraud (per-vertex) shading
 */
objParams.meshGouraudMaterial = [...objParams.shaderMaterial,
    'isMeshGouraudMaterial',
].distinct();
defaults.meshGouraudMaterial = {};
