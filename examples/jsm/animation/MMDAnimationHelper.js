import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper.js';
export * from 'three/examples/jsm/animation/MMDAnimationHelper.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.MMDAnimationHelper = MMDAnimationHelper;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\MMDAnimationHelper.d.ts
consParams.mmdAnimationHelperParameter = [
    'sync',
    'afterglow',
    'resetPhysicsOnLoop',
    'pmxAnimation',
].distinct();
consParams.mmdAnimationHelperAddParameter = [
    'animation',
    'physics',
    'warmup',
    'unitStep',
    'maxStepNum',
    'gravity',
    'delayTime',
].distinct();
consParams.mmdAnimationHelperPoseParameter = [
    'resetPose',
    'ik',
    'grant',
].distinct();
consParams.mmdAnimationHelperMixer = [
    'looped',
    'mixer',
    'ikSolver',
    'grantSolver',
    'physics',
    'duration',
].distinct();
consParams.mmdAnimationHelper = [
    'params',
].distinct();
consParams.audioManagerParameter = [
    'delayTime',
].distinct();
consParams.audioManager = [
    'audio',
    'params',
].distinct();
consParams.grantSolver = [
    'mesh',
    'grants',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\MMDAnimationHelper.d.ts
objParams.mmdAnimationHelperParameter = [
    'sync',
    'afterglow',
    'resetPhysicsOnLoop',
    'pmxAnimation',
].distinct();
objParams.mmdAnimationHelperAddParameter = [
    'animation',
    'physics',
    'warmup',
    'unitStep',
    'maxStepNum',
    'gravity',
    'delayTime',
].distinct();
objParams.mmdAnimationHelperPoseParameter = [
    'resetPose',
    'ik',
    'grant',
].distinct();
objParams.mmdAnimationHelperMixer = [
    'looped',
    'mixer',
    'ikSolver',
    'grantSolver',
    'physics',
    'duration',
].distinct();
objParams.mmdAnimationHelper = [
    'meshes',
    'camera',
    'cameraTarget',
    'audio',
    'audioManager',
    'configuration',
    'enabled',
    'objects',
    'onBeforePhysics',
    'sharedPhysics',
    'masterPhysics',
].distinct();
objParams.audioManagerParameter = [
    'delayTime',
].distinct();
objParams.audioManager = [
    'audio',
    'elapsedTime',
    'currentTime',
    'delayTime',
    'audioDuration',
    'duration',
].distinct();
objParams.grantSolver = [
    'mesh',
    'grants',
].distinct();
defaults.mmdAnimationHelper = { sync: true, afterglow: 0, resetPhysicsOnLoop: true, pmxAnimation: false };
