import MeshNormalNodeMaterial from 'three/src/nodes/materials/MeshNormalNodeMaterial.js';
export { MeshNormalNodeMaterial };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './NodeMaterial';
import './MeshBasicNodeMaterial';
import '../../materials/MeshPhongMaterial';
import 'three/examples/jsm/Addons';
Three.MeshNormalNodeMaterial = MeshNormalNodeMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshNormalNodeMaterial.d.ts
consParams.meshNormalNodeMaterial = { ...consParams.meshBasicNodeMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshNormalNodeMaterial.d.ts    
objParams.meshNormalNodeMaterial = [...objParams.nodeMaterial,
    // Properties from MeshNormalMaterial
    'bumpMap',
    'bumpScale',
    'normalMap',
    'normalMapType',
    'normalScale',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'flatShading',
].distinct();
defaults.meshNormalNodeMaterial = {};
