import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js';
export * from 'three/examples/jsm/postprocessing/ClearPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import './Pass';
Three.ClearPass = ClearPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ClearPass.d.ts
consParams.clearPass = [
    'clearColor',
    'clearAlpha',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\ClearPass.d.ts    
objParams.clearPass = [...objParams.pass,
    'clearColor',
    'clearAlpha',
].distinct();
defaults.clearPass = {};
