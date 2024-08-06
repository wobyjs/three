import { Node } from '../../../three-types'
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js'
import { MMDPhysicsParameter, MMDPhysics } from 'three/examples/jsm/animation/MMDPhysics.js'
export * from 'three/examples/jsm/animation/MMDPhysics.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        mmdPhysics: string[]
        mmdPhysicsParameter: string[]
        resourceManager: string[]
        rigidBody: string[]
        constraint: string[]
        mmdPhysicsHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        mmdPhysics: string[]
        mmdPhysicsParameter: string[]
        resourceManager: string[]
        rigidBody: string[]
        constraint: string[]
        mmdPhysicsHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\MMDPhysics.d.ts

consParams.mmdPhysicsParameter = [
    'unitStep',
    'maxStepNum',
    'gravity',
].distinct()


consParams.mmdPhysics = [

    'mesh',
    'rigidBodyParams',
    'constraintParams',
    'params',
    ,
].distinct()


consParams.resourceManager = [
].distinct()


consParams.rigidBody = [
    'mesh',
    'world',
    'params',
    'manager',
].distinct()


consParams.constraint = [

    'mesh',
    'world',
    'bodyA',
    'bodyB',
    'params',
    'manager',
    ,
].distinct()

consParams.mmdPhysicsHelper = [
    'physics',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\animation\MMDPhysics.d.ts

objParams.mmdPhysicsParameter = [
    'unitStep',
    'maxStepNum',
    'gravity',
].distinct()


objParams.mmdPhysics = [
    'manager',
    'mesh',
    'unitStep',
    'maxStepNum',
    'gravity',
    'world',
    'bodies',
    'constraints',
].distinct()


objParams.resourceManager = [
    'threeVector3s',
    'threeMatrix4s',
    'threeQuaternions',
    'threeEulers',
    'transforms',
    'quaternions',
    'vector3s',
].distinct()


objParams.rigidBody = [
    'mesh',
    'world',
    'params',
    'manager',
    'body',
    'bone',
    'boneOffsetForm',
    'boneOffsetFormInverse',
].distinct()


objParams.constraint = [
    'mesh',
    'world',
    'bodyA',
    'bodyB',
    'params',
    'manager',
].distinct()


objParams.mmdPhysicsHelper = [...objParams.object3d,
    'mesh',
    'physics',
    'materials',
].distinct()

export type MMDPhysicsProps = Node<MMDPhysics, typeof MMDPhysics, { mesh: SkinnedMesh; rigidBodyParams: object[]; constraintParams?: object[]; params?: MMDPhysicsParameter; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdPhysics: Partial<{ mesh: SkinnedMesh; rigidBodyParams: object[]; constraintParams?: object[]; params?: MMDPhysicsParameter; }>
    }
}

defaults.mmdPhysics = {}

// export type AnimationClipCreatorProps = Node<AnimationClipCreator, typeof AnimationClipCreator>

