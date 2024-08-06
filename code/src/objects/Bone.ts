import { Object3DNode } from '../../three-types'
import { Bone } from 'three/src/objects/Bone.js'
export { Bone } from 'three/src/objects/Bone.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Bone: typeof Bone
    }
}

Three.Bone = Bone

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bone: BoneProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        bone: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        bone: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Bone.d.ts
/**
 * A {@link Bone} which is part of a {@link THREE.Skeleton}
 * @remarks
 * The skeleton in turn is used by the {@link THREE.SkinnedMesh}
 * Bones are almost identical to a blank {@link THREE.Object3d}.
 * @example
 * ```typescript
 * const root = new THREE.Bone(,
 * const child = new THREE.Bone(,
 * root.add(child,
 * child.position.y = 5,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Bone Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Bone.js}
 */

consParams.bone = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Bone.d.ts
/**
 * A {@link Bone} which is part of a {@link THREE.Skeleton | Skeleton}
 * @remarks
 * The skeleton in turn is used by the {@link THREE.SkinnedMesh | SkinnedMesh}
 * Bones are almost identical to a blank {@link THREE.Object3d | Object3d}.
 * @example
 * ```typescript
 * const root = new THREE.Bone()
 * const child = new THREE.Bone()
 * root.add(child)
 * child.position.y = 5
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Bone | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Bone.js | Source}
 */

objParams.bone = [
].distinct()

export type BoneProps = Object3DNode<Bone, typeof Bone, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        bone: {}
    }
}

defaults.bone = {}

