import { OculusHandPointerModel } from 'three/examples/jsm/webxr/OculusHandPointerModel.js';
export * from 'three/examples/jsm/webxr/OculusHandPointerModel.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.OculusHandPointerModel = OculusHandPointerModel;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\OculusHandPointerModel.d.ts
consParams.oculusHandPointerModel = [
    'hand',
    'controller',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\OculusHandPointerModel.d.ts    
objParams.oculusHandPointerModel = [...objParams.object3d,
    'hand',
    'controller',
    'motionController',
    'envMap',
    'mesh',
    'pointerGeometry',
    'pointerMesh',
    'pointerObject',
    'pinched',
    'attached',
    'cursorObject',
    'raycaster',
    'visible',
    'xrInputSource',
].distinct();
defaults.oculusHandPointerModel = {};
