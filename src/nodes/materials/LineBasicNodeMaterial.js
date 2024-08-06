import LineBasicNodeMaterial from 'three/src/nodes/materials/LineBasicNodeMaterial.js';
export { LineBasicNodeMaterial };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './NodeMaterial';
import '../../materials/LineBasicMaterial';
Three.LineBasicNodeMaterial = LineBasicNodeMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\LineBasicNodeMaterial.d.ts
consParams.lineBasicNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.lineBasicMaterialParameters
};
consParams.lineBasicNodeMaterial = { ...consParams.lineBasicNodeMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\LineBasicNodeMaterial.d.ts    
objParams.lineBasicNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.lineBasicMaterialParameters,
].distinct();
objParams.lineBasicNodeMaterial = [...objParams.nodeMaterial,
    // Properties from LineBasicMaterial
    'color',
    'linecap',
    'linejoin',
    'map',
].distinct();
defaults.lineBasicNodeMaterial = {};
