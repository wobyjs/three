import PointsNodeMaterial from 'three/src/nodes/materials/PointsNodeMaterial.js';
export { PointsNodeMaterial };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './NodeMaterial';
import '../../materials/PointsMaterial';
Three.PointsNodeMaterial = PointsNodeMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\PointsNodeMaterial.d.ts
consParams.pointsNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.pointsMaterialParameters
};
consParams.pointsNodeMaterial = { ...consParams.pointsNodeMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\PointsNodeMaterial.d.ts    
objParams.pointsNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.pointsMaterialParameters,
].distinct();
objParams.pointsNodeMaterial = [...objParams.nodeMaterial,
    // Properties from PointsMaterial
    'color',
    'map',
    'alphaMap',
    'size',
    'sizeAttenuation',
].distinct();
defaults.pointsNodeMaterial = {};
