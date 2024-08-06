import { CSM } from 'three/examples/jsm/csm/CSM.js';
export * from 'three/examples/jsm/csm/CSM.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
import '../../../lib/three/extensions';
Three.CSM = CSM;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSM.d.ts
consParams.csmParameters = [
    'camera',
    'parent',
    'cascades',
    'maxFar',
    'mode',
    'shadowMapSize',
    'shadowBias',
    'lightDirection',
    'lightIntensity',
    'lightNear',
    'lightFar',
    'lightMargin',
    'customSplitsCallback',
].toObject();
consParams.csm = [
    'data',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSM.d.ts
objParams.csmParameters = [
    'camera',
    'parent',
    'cascades',
    'maxFar',
    'mode',
    'shadowMapSize',
    'shadowBias',
    'lightDirection',
    'lightIntensity',
    'lightNear',
    'lightFar',
    'lightMargin',
].distinct();
objParams.csm = [
    'camera',
    'parent',
    'cascades',
    'maxFar',
    'mode',
    'shadowMapSize',
    'shadowBias',
    'lightDirection',
    'lightIntensity',
    'lightNear',
    'lightFar',
    'lightMargin',
    'customSplitsCallback',
    'fade',
    'mainFrustum',
    'frustums',
    'breaks',
    'lights',
    'shaders',
].distinct();
defaults.cSM = {};
