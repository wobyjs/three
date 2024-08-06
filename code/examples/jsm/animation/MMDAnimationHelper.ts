import { Node } from '../../../three-types'
import { MMDAnimationHelperParameter, MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper.js'
export * from 'three/examples/jsm/animation/MMDAnimationHelper.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MMDAnimationHelper: typeof MMDAnimationHelper
    }
}

Three.MMDAnimationHelper = MMDAnimationHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mmdAnimationHelper: MMDAnimationHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        mmdAnimationHelper: string[]
        mmdAnimationHelperParameter: string[]
        mmdAnimationHelperAddParameter: string[]
        mmdAnimationHelperPoseParameter: string[]
        mmdAnimationHelperMixer: string[]
        audioManagerParameter: string[]
        audioManager: string[]
        grantSolver: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        mmdAnimationHelper: string[]
        mmdAnimationHelperParameter: string[]
        mmdAnimationHelperAddParameter: string[]
        mmdAnimationHelperPoseParameter: string[]
        mmdAnimationHelperMixer: string[]
        audioManagerParameter: string[]
        audioManager: string[]
        grantSolver: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\MMDAnimationHelper.d.ts

consParams.mmdAnimationHelperParameter = [
    'sync',
    'afterglow',
    'resetPhysicsOnLoop',
    'pmxAnimation',
].distinct()

consParams.mmdAnimationHelperAddParameter = [
    'animation',
    'physics',
    'warmup',
    'unitStep',
    'maxStepNum',
    'gravity',
    'delayTime',
].distinct()

consParams.mmdAnimationHelperPoseParameter = [
    'resetPose',
    'ik',
    'grant',
].distinct()

consParams.mmdAnimationHelperMixer = [
    'looped',
    'mixer',
    'ikSolver',
    'grantSolver',
    'physics',
    'duration',
].distinct()

consParams.mmdAnimationHelper = [
    'params',
].distinct()

consParams.audioManagerParameter = [
    'delayTime',
].distinct()

consParams.audioManager = [
    'audio',
    'params',
].distinct()

consParams.grantSolver = [
    'mesh',
    'grants',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\MMDAnimationHelper.d.ts

objParams.mmdAnimationHelperParameter = [
    'sync',
    'afterglow',
    'resetPhysicsOnLoop',
    'pmxAnimation',
].distinct()


objParams.mmdAnimationHelperAddParameter = [
    'animation',
    'physics',
    'warmup',
    'unitStep',
    'maxStepNum',
    'gravity',
    'delayTime',
].distinct()


objParams.mmdAnimationHelperPoseParameter = [
    'resetPose',
    'ik',
    'grant',
].distinct()


objParams.mmdAnimationHelperMixer = [
    'looped',
    'mixer',
    'ikSolver',
    'grantSolver',
    'physics',
    'duration',
].distinct()


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
].distinct()


objParams.audioManagerParameter = [
    'delayTime',
].distinct()


objParams.audioManager = [
    'audio',
    'elapsedTime',
    'currentTime',
    'delayTime',
    'audioDuration',
    'duration',
].distinct()


objParams.grantSolver = [
    'mesh',
    'grants',
].distinct()

export type MMDAnimationHelperProps = Node<MMDAnimationHelper, typeof MMDAnimationHelper, MMDAnimationHelperParameter>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdAnimationHelper: MMDAnimationHelperParameter
    }
}

defaults.mmdAnimationHelper = { sync: true, afterglow: 0, resetPhysicsOnLoop: true, pmxAnimation: false } 
