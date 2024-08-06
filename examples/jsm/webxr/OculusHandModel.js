import { OculusHandModel } from 'three/examples/jsm/webxr/OculusHandModel.js';
export * from 'three/examples/jsm/webxr/OculusHandModel.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.OculusHandModel = OculusHandModel;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\OculusHandModel.d.ts
consParams.oculusHandModel = [
    'controller',
    'loader',
    'onLoad',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\OculusHandModel.d.ts    
objParams.oculusHandModel = [...objParams.object3d,
    'controller',
    'motionController',
    'envMap',
    'loader',
    'onLoad',
    'mesh',
].distinct();
defaults.oculusHandModel = {};
