import PhongLightingModel from 'three/src/nodes/functions/PhongLightingModel.js';
export { PhongLightingModel };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.PhongLightingModel = PhongLightingModel;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhongLightingModel.d.ts
consParams.phongLightingModel = [
    'specular',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\PhongLightingModel.d.ts    
objParams.phongLightingModel = [...objParams.lightingModel,
    'specular',
].distinct();
defaults.phongLightingModel = {};
