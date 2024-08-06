import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
export * from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.XRControllerModelFactory = XRControllerModelFactory;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRControllerModelFactory.d.ts
consParams.xrControllerModel = [].distinct();
consParams.xrControllerModelFactory = [
    'gltfLoader',
    'onLoad',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRControllerModelFactory.d.ts    
objParams.xrControllerModel = [...objParams.object3d,
    'motionController',
    'envMap',
].distinct();
objParams.xrControllerModelFactory = [
    'gltfLoader',
    'path',
].distinct();
defaults.xrControllerModelFactory = {};
