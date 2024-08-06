import { MaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
export * from 'three/examples/jsm/postprocessing/MaskPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.MaskPass = MaskPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\MaskPass.d.ts
consParams.maskPass = [
    'scene',
    'camera',
].distinct();
consParams.clearMaskPass = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\MaskPass.d.ts    
objParams.maskPass = [...objParams.pass,
    'scene',
    'camera',
    'inverse',
].distinct();
objParams.clearMaskPass = [...objParams.pass,
].distinct();
defaults.maskPass = {};
defaults.clearMaskPass = {};
