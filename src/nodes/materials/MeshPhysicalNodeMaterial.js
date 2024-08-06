import MeshPhysicalNodeMaterial from 'three/src/nodes/materials/MeshPhysicalNodeMaterial.js';
export { MeshPhysicalNodeMaterial };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './NodeMaterial';
import '../../materials/MeshPhysicalMaterial';
import '../../materials/MeshStandardMaterial';
Three.MeshPhysicalNodeMaterial = MeshPhysicalNodeMaterial;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshPhysicalNodeMaterial.d.ts
consParams.meshPhysicalNodeMaterialParameters = {
    ...consParams.meshStandardNodeMaterialParameters, ...consParams.meshPhysicalMaterialParameters
};
consParams.meshPhysicalNodeMaterial = { ...consParams.meshPhysicalNodeMaterialParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshPhysicalNodeMaterial.d.ts    
objParams.meshPhysicalNodeMaterialParameters = [...objParams.meshStandardNodeMaterialParameters, ...objParams.meshPhysicalMaterialParameters,
].distinct();
objParams.meshPhysicalNodeMaterial = [...objParams.meshStandardNodeMaterial,
    'clearcoatNode',
    'clearcoatRoughnessNode',
    'clearcoatNormalNode',
    'sheenNode',
    'sheenRoughnessNode',
    'iridescenceNode',
    'iridescenceIORNode',
    'iridescenceThicknessNode',
    'iorNode',
    'specularIntensityNode',
    'specularColorNode',
    'transmissionNode',
    'thicknessNode',
    'attenuationDistanceNode',
    'attenuationColorNode',
    'anisotropyNode',
    // Properties from MeshPhysicalMaterial
    'anisotropyRotation',
    'anisotropyMap',
    'clearcoatMap',
    'clearcoatRoughness',
    'clearcoatRoughnessMap',
    'clearcoatNormalScale',
    'clearcoatNormalMap',
    'ior',
    'reflectivity',
    'iridescenceMap',
    'iridescenceIOR',
    'iridescenceThicknessRange',
    'iridescenceThicknessMap',
    'sheenColor',
    'sheenColorMap',
    'sheenRoughness',
    'sheenRoughnessMap',
    'transmissionMap',
    'thickness',
    'thicknessMap',
    'attenuationDistance',
    'attenuationColor',
    'specularIntensity',
    'specularIntensityMap',
    'specularColor',
    'specularColorMap',
].distinct();
defaults.meshPhysicalNodeMaterial = {};
