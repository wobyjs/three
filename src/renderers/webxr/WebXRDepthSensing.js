// import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebXRDepthSensing } from 'three/src/renderers/webxr/WebXRDepthSensing.js';
export { WebXRDepthSensing } from 'three/src/renderers/webxr/WebXRDepthSensing.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebXRDepthSensing = WebXRDepthSensing;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRDepthSensing.d.ts
// FIXME Replace by XRWebGlDepthInformation when typed in @types/webxr
consParams.xrWebGlDepthInformation = [];
consParams.webXrDepthSensing = [];
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRDepthSensing.d.ts
// FIXME Replace by XRWebGlDepthInformation when typed in @types/webxr
objParams.xrWebGlDepthInformation = [].distinct();
objParams.webXRDepthSensing = [
    'texture',
    'mesh',
    'depthNear',
    'depthFar',
].distinct();
defaults.webXRDepthSensing = {};
