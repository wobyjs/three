import { LUTPass } from 'three/examples/jsm/postprocessing/LUTPass.js';
export * from 'three/examples/jsm/postprocessing/LUTPass.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
import './Pass';
Three.LUTPass = LUTPass;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\LUTPass.d.ts
consParams.lutPassParameters = [
    'lut',
    'intensity',
].toObject();
consParams.lutPass = { ...consParams.lutPassParameters };
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\postprocessing\LUTPass.d.ts
objParams.lutPassParameters = [
    'lut',
    'intensity',
].distinct();
objParams.lutPass = [...objParams.shaderPass,
    'lut',
    'intensity',
].distinct();
defaults.lutPass = {};
