import { XRHandMeshModel } from 'three/examples/jsm/webxr/XRHandMeshModel.js';
export * from 'three/examples/jsm/webxr/XRHandMeshModel.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.XRHandMeshModel = XRHandMeshModel;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandMeshModel.d.ts
consParams.xrHandMeshModel = [
    'handModel',
    'controller',
    'path',
    'handedness',
    'loader',
    'onLoad',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandMeshModel.d.ts
objParams.xrHandMeshModel = [
    'controller',
    'handModel',
    'bones',
].distinct();
defaults.xrHandMeshModel = {};
