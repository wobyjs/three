import { Node } from '../../../three-types'
import { MMDAnimationHelperParameter, MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper.js'
export * from 'three/examples/jsm/animation/MMDAnimationHelper.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        mmdAnimationHelper: typeof mmdAnimationHelper
        mmdAnimationHelperParameter: typeof mmdAnimationHelperParameter
        mmdAnimationHelperAddParameter: typeof mmdAnimationHelperAddParameter
        mmdAnimationHelperPoseParameter: typeof mmdAnimationHelperPoseParameter
        mmdAnimationHelperMixer: typeof mmdAnimationHelperMixer
        audioManagerParameter: typeof audioManagerParameter
        audioManager: typeof audioManager
        grantSolver: typeof grantSolver
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        mmdAnimationHelper: typeof _mmdAnimationHelper
        mmdAnimationHelperParameter: typeof _mmdAnimationHelperParameter
        mmdAnimationHelperAddParameter: typeof _mmdAnimationHelperAddParameter
        mmdAnimationHelperPoseParameter: typeof _mmdAnimationHelperPoseParameter
        mmdAnimationHelperMixer: typeof _mmdAnimationHelperMixer
        audioManagerParameter: typeof _audioManagerParameter
        audioManager: typeof _audioManager
        grantSolver: typeof _grantSolver
    }
}



const mmdAnimationHelperParameter = ([
    'sync',
    'afterglow',
    'resetPhysicsOnLoop',
    'pmxAnimation',
] as const).distinct()
consParams.mmdAnimationHelperParameter = mmdAnimationHelperParameter

const mmdAnimationHelperAddParameter = ([
    'animation',
    'physics',
    'warmup',
    'unitStep',
    'maxStepNum',
    'gravity',
    'delayTime',
] as const).distinct()
consParams.mmdAnimationHelperAddParameter = mmdAnimationHelperAddParameter

const mmdAnimationHelperPoseParameter = ([
    'resetPose',
    'ik',
    'grant',
] as const).distinct()
consParams.mmdAnimationHelperPoseParameter = mmdAnimationHelperPoseParameter

const mmdAnimationHelperMixer = ([
    'looped',
    'mixer',
    'ikSolver',
    'grantSolver',
    'physics',
    'duration',
] as const).distinct()
consParams.mmdAnimationHelperMixer = mmdAnimationHelperMixer

const mmdAnimationHelper = ([
    'params',
] as const).distinct()
consParams.mmdAnimationHelper = mmdAnimationHelper

const audioManagerParameter = ([
    'delayTime',
] as const).distinct()
consParams.audioManagerParameter = audioManagerParameter

const audioManager = ([
    'audio',
    'params',
] as const).distinct()
consParams.audioManager = audioManager

const grantSolver = ([
    'mesh',
    'grants',
] as const).distinct()
consParams.grantSolver = grantSolver



const _mmdAnimationHelperParameter = ([
    'sync',
    'afterglow',
    'resetPhysicsOnLoop',
    'pmxAnimation',
] as const).distinct()
objProps.mmdAnimationHelperParameter = _mmdAnimationHelperParameter


const _mmdAnimationHelperAddParameter = ([
    'animation',
    'physics',
    'warmup',
    'unitStep',
    'maxStepNum',
    'gravity',
    'delayTime',
] as const).distinct()
objProps.mmdAnimationHelperAddParameter = _mmdAnimationHelperAddParameter


const _mmdAnimationHelperPoseParameter = ([
    'resetPose',
    'ik',
    'grant',
] as const).distinct()
objProps.mmdAnimationHelperPoseParameter = _mmdAnimationHelperPoseParameter


const _mmdAnimationHelperMixer = ([
    'looped',
    'mixer',
    'ikSolver',
    'grantSolver',
    'physics',
    'duration',
] as const).distinct()
objProps.mmdAnimationHelperMixer = _mmdAnimationHelperMixer


const _mmdAnimationHelper = ([
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
] as const).distinct()
objProps.mmdAnimationHelper = _mmdAnimationHelper


const _audioManagerParameter = ([
    'delayTime',
] as const).distinct()
objProps.audioManagerParameter = _audioManagerParameter


const _audioManager = ([
    'audio',
    'elapsedTime',
    'currentTime',
    'delayTime',
    'audioDuration',
    'duration',
] as const).distinct()
objProps.audioManager = _audioManager


const _grantSolver = ([
    'mesh',
    'grants',
] as const).distinct()
objProps.grantSolver = _grantSolver

export type MMDAnimationHelperProps = Node<MMDAnimationHelper, typeof MMDAnimationHelper, MMDAnimationHelperParameter>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdAnimationHelper: MMDAnimationHelperParameter
    }
}

defaults.mmdAnimationHelper = { sync: true, afterglow: 0, resetPhysicsOnLoop: true, pmxAnimation: false } 
