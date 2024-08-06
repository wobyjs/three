import { WebXRController } from 'three/src/renderers/webxr/WebXRController.js';
export { WebXRController } from 'three/src/renderers/webxr/WebXRController.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../src/objects/Group';
Three.WebXRController = WebXRController;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRController.d.ts
consParams.xrJointSpace = [].distinct();
consParams.xrHandInputState = [
    'pinching',
].distinct();
consParams.webXrSpaceEventMap = [
    'select',
    'selectstart',
    'selectend',
    'squeeze',
    'squeezestart',
    'squeezeend',
    'connected',
    'disconnected',
    'pinchend',
    'pinchstart',
    'move',
].distinct();
consParams.xrHandSpace = [].distinct();
consParams.xrTargetRaySpace = [].distinct();
consParams.xrGripSpace = [].distinct();
consParams.webXrController = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRController.d.ts    
objParams.xrJointSpace = [...objParams.group,
].distinct();
objParams.xrHandInputState = [
    'pinching',
].distinct();
objParams.webXrSpaceEventMap = [...objParams.object3dEventMap,
    'select',
    'selectstart',
    'selectend',
    'squeeze',
    'squeezestart',
    'squeezeend',
    'connected',
    'disconnected',
    'pinchend',
    'pinchstart',
    'move',
].distinct();
objParams.xrHandSpace = [...objParams.group,
].distinct();
objParams.xrTargetRaySpace = [...objParams.group,
    'hasLinearVelocity',
    'hasAngularVelocity',
].distinct();
objParams.xrGripSpace = [...objParams.group,
    'hasLinearVelocity',
    'hasAngularVelocity',
].distinct();
objParams.webXrController = [].distinct();
defaults.webXRController = {};
