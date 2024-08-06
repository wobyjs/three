import ShadowMaskModel from 'three/src/nodes/functions/ShadowMaskModel.js';
export { ShadowMaskModel };
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.ShadowMaskModel = ShadowMaskModel;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\ShadowMaskModel.d.ts
consParams.shadowMaskModel = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\functions\ShadowMaskModel.d.ts    
objParams.shadowMaskModel = [...objParams.lightingModel,
    'shadowNode',
].distinct();
defaults.shadowMaskModel = {};
