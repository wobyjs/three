import { WebXRManager } from 'three/src/renderers/webxr/WebXRManager.js';
export { WebXRManager } from 'three/src/renderers/webxr/WebXRManager.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.WebXRManager = WebXRManager;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRManager.d.ts
// https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager
/// 
consParams.webXrManagerEventMap = [
    'sessionstart',
    'sessionend',
    'planeadded',
    'planeremoved',
    'planechanged',
    'planesdetected',
].distinct();
consParams.webXrManager = [
    'renderer',
    'gl',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRManager.d.ts
// https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager
/// 
objParams.webXrManagerEventMap = [
    'sessionstart',
    'sessionend',
    'planeadded',
    'planeremoved',
    'planechanged',
    'planesdetected',
].distinct();
objParams.webXrManager = [
    /**
     * @default false
     */
    'enabled',
    /**
     * @default false
     */
    'isPresenting',
    /**
     * @default true
     */
    'cameraAutoUpdate',
].distinct();
defaults.webXRManager = {};
