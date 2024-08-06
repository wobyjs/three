import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory.js';
export * from 'three/examples/jsm/webxr/XRHandModelFactory.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.XRHandModelFactory = XRHandModelFactory;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandModelFactory.d.ts
consParams.xrHandModel = [].distinct();
consParams.xrHandModelFactory = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandModelFactory.d.ts    
objParams.xrHandModel = [...objParams.object3d,
    'motionController',
].distinct();
objParams.xrHandModelFactory = [
    'gltfLoader',
    'path',
    'onLoad',
].distinct();
defaults.xrHandModelFactory = {};
