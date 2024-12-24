import { Node, Matrix4 } from '../../three-types'
import { Bone } from 'three/src/objects/Bone.js'
import { Skeleton } from 'three/src/objects/Skeleton.js'
export { Skeleton } from 'three/src/objects/Skeleton.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Skeleton: typeof Skeleton
    }
}

Three.Skeleton = Skeleton

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            skeleton: SkeletonProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        skeleton: typeof skeleton
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        skeleton: typeof _skeleton
    }
}


/**
 * Use an array of {@link Bone} to create a {@link Skeleton} that can be used by a {@link THREE.SkinnedMesh}.
 * @example
 * ```typescript
 * // Create a simple "arm"
 * const bones = ,
 * const shoulder = new THREE.Bone(,
 * const elbow = new THREE.Bone(,
 * const hand = new THREE.Bone(,
 * shoulder.add(elbow,
 * elbow.add(hand,
 * bones.push(shoulder,
 * bones.push(elbow,
 * bones.push(hand,
 * shoulder.position.y = -5,
 * elbow.position.y = 0,
 * hand.position.y = 5,
 * const armSkeleton = new THREE.Skeleton(bones,
 * See the[page] page
 * for an example of usage with standard[page].
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Skeleton Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Skeleton.js}
 */

const skeleton = ([
    /**
     * Creates a new Skeleton.
     * @param bones The array of {@link THREE.Bone}. Default `[]`.
     * @param boneInverses An array of {@link THREE.Matrix4}. Default `[]`.
     */
    'bones',
    'boneInverses',
] as const).distinct()
consParams.skeleton = skeleton


/**
 * Use an array of {@link Bone | bones} to create a {@link Skeleton} that can be used by a {@link THREE.SkinnedMesh | SkinnedMesh}.
 * @example
 * ```typescript
 * // Create a simple "arm"
 * const bones = [].distinct()
 
 * const shoulder = new THREE.Bone()
 * const elbow = new THREE.Bone()
 * const hand = new THREE.Bone()
 * shoulder.add(elbow)
 * elbow.add(hand)
 * bones.push(shoulder)
 * bones.push(elbow)
 * bones.push(hand)
 * shoulder.position.y = -5
 * elbow.position.y = 0
 * hand.position.y = 5
 * const armSkeleton = new THREE.Skeleton(bones)
 * See the[page: SkinnedMesh].distinct()
 page
 * for an example of usage with standard[page: BufferGeometry].distinct()
.
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Skeleton | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Skeleton.js | Source}
 */

const _skeleton = ([
    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    'uuid',
    /**
     * The array of {@link THREE.Bone | Bones}.
     * @remarks Note this is a copy of the original array, not a reference, so you can modify the original array without effecting this one.
     */
    'bones',
    /**
     * An array of {@link Matrix4 | Matrix4s} that represent the inverse of the {@link THREE.Matrix4 | matrixWorld} of the individual bones.
     */
    'boneInverses',
    /**
     * The array buffer holding the bone data when using a vertex texture.
     */
    'boneMatrices',
    /**
     * The {@link THREE.DataTexture | DataTexture} holding the bone data when using a vertex texture.
     */
    'boneTexture',
    'frame',
] as const).distinct()
objProps.skeleton = _skeleton

export type SkeletonProps = Node<Skeleton, typeof Skeleton, { bones?: Bone[]; boneInverses?: Matrix4[]; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        skeleton: { bones?: Bone[]; boneInverses?: Matrix4[]; }
    }
}

defaults.skeleton = {}

