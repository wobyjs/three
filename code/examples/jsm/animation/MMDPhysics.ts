import { Node } from '../../../three-types'
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js'
import { MMDPhysicsParameter, MMDPhysics } from 'three/examples/jsm/animation/MMDPhysics.js'
export * from 'three/examples/jsm/animation/MMDPhysics.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MMDPhysics: typeof MMDPhysics
    }
}

Three.MMDPhysics = MMDPhysics

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mmdPhysics: MMDPhysicsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        mmdPhysics: typeof mmdPhysics
        mmdPhysicsParameter: typeof mmdPhysicsParameter
        resourceManager: typeof resourceManager
        rigidBody: typeof rigidBody
        constraint: typeof constraint
        mmdPhysicsHelper: typeof mmdPhysicsHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        mmdPhysics: typeof _mmdPhysics
        mmdPhysicsParameter: typeof _mmdPhysicsParameter
        resourceManager: typeof _resourceManager
        rigidBody: typeof _rigidBody
        constraint: typeof _constraint
        mmdPhysicsHelper: typeof _mmdPhysicsHelper
    }
}



const mmdPhysicsParameter = ([
    'unitStep',
    'maxStepNum',
    'gravity',
] as const).distinct()
consParams.mmdPhysicsParameter = mmdPhysicsParameter


const mmdPhysics = ([

    'mesh',
    'rigidBodyParams',
    'constraintParams',
    'params',
    ,
] as const).distinct()
consParams.mmdPhysics = mmdPhysics


const resourceManager = ([
] as const).distinct()
consParams.resourceManager = resourceManager


const rigidBody = ([
    'mesh',
    'world',
    'params',
    'manager',
] as const).distinct()
consParams.rigidBody = rigidBody


const constraint = ([

    'mesh',
    'world',
    'bodyA',
    'bodyB',
    'params',
    'manager',
    ,
] as const).distinct()
consParams.constraint = constraint

const mmdPhysicsHelper = ([
    'physics',
] as const).distinct()
consParams.mmdPhysicsHelper = mmdPhysicsHelper



const _mmdPhysicsParameter = ([
    'unitStep',
    'maxStepNum',
    'gravity',
] as const).distinct()
objProps.mmdPhysicsParameter = _mmdPhysicsParameter


const _mmdPhysics = ([
    'manager',
    'mesh',
    'unitStep',
    'maxStepNum',
    'gravity',
    'world',
    'bodies',
    'constraints',
] as const).distinct()
objProps.mmdPhysics = _mmdPhysics


const _resourceManager = ([
    'threeVector3s',
    'threeMatrix4s',
    'threeQuaternions',
    'threeEulers',
    'transforms',
    'quaternions',
    'vector3s',
] as const).distinct()
objProps.resourceManager = _resourceManager


const _rigidBody = ([
    'mesh',
    'world',
    'params',
    'manager',
    'body',
    'bone',
    'boneOffsetForm',
    'boneOffsetFormInverse',
] as const).distinct()
objProps.rigidBody = _rigidBody


const _constraint = ([
    'mesh',
    'world',
    'bodyA',
    'bodyB',
    'params',
    'manager',
] as const).distinct()
objProps.constraint = _constraint


const _mmdPhysicsHelper = ([...objProps.object3d,
    'mesh',
    'physics',
    'materials',
] as const).distinct()
objProps.mmdPhysicsHelper = _mmdPhysicsHelper

export type MMDPhysicsProps = Node<MMDPhysics, typeof MMDPhysics, { mesh: SkinnedMesh; rigidBodyParams: object[]; constraintParams?: object[]; params?: MMDPhysicsParameter; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdPhysics: Partial<{ mesh: SkinnedMesh; rigidBodyParams: object[]; constraintParams?: object[]; params?: MMDPhysicsParameter; }>
    }
}

defaults.mmdPhysics = {}

// export type AnimationClipCreatorProps = Node<AnimationClipCreator, typeof AnimationClipCreator>

