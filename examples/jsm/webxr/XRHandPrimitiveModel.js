import { XRHandPrimitiveModel } from 'three/examples/jsm/webxr/XRHandPrimitiveModel.js';
export * from 'three/examples/jsm/webxr/XRHandPrimitiveModel.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.XRHandPrimitiveModel = XRHandPrimitiveModel;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandPrimitiveModel.d.ts
consParams.xrHandPrimitiveModelOptions = [
    'primitive',
].distinct();
consParams.xrHandPrimitiveModel = [
    'handModel',
    'controller',
    'path',
    'handedness',
    'options',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandPrimitiveModel.d.ts
objParams.xrHandPrimitiveModelOptions = [
    'primitive',
].distinct();
objParams.xrHandPrimitiveModel = [
    'controller',
    'handModel',
    'envMap',
    'handMesh',
    'updateMesh',
].distinct();
defaults.xrHandPrimitiveModel = {};
