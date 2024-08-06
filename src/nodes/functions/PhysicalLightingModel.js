import PhysicalLightingModel from 'three/src/nodes/functions/PhysicalLightingModel.js';
export { PhysicalLightingModel };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PhysicalLightingModel = PhysicalLightingModel;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhysicalLightingModel.d.ts
consParams.physicalLightingModel = [
    'clearcoat',
    'sheen',
    'iridescence',
    'anisotropy',
    'transmission',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhysicalLightingModel.d.ts    
objParams.physicalLightingModel = [...objParams.lightingModel,
    'clearcoat',
    'sheen',
    'iridescence',
    'anisotropy',
    'transmission',
    'clearcoatRadiance',
    'clearcoatSpecularDirect',
    'clearcoatSpecularIndirect',
    'sheenSpecularDirect',
    'sheenSpecularIndirect',
    'iridescenceFresnel',
    'iridescenceF0',
].distinct();
defaults.physicalLightingModel = {};
