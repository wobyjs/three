import { Object3DNode } from '../../three-types'
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js'
import { Object3D } from 'three/src/core/Object3D.js'
import { SkeletonHelper } from 'three/src/helpers/SkeletonHelper.js'
export { SkeletonHelper } from 'three/src/helpers/SkeletonHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        SkeletonHelper: typeof SkeletonHelper
    }
}

Three.SkeletonHelper = SkeletonHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            skeletonHelper: SkeletonHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        skeletonHelper: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        skeletonHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\SkeletonHelper.d.ts
/**
 * A helper object to assist with visualizing a {@link Skeleton}
 * @remarks
 * The helper is rendered using a {@link LineBasicMaterial}.
 * @example
 * ```typescript
 * const helper = new THREE.SkeletonHelper(skinnedMesh,
 * scene.add(helper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending / animation / skinning / blending}
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph / animation / skinning / morph}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_bvh / loader / bvh }
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SkeletonHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SkeletonHelper.js}
 */

consParams.skeletonHelper = [
    /**
     * Create a new instance of {@link SkeletonHelper}
     * @param object Usually an instance of {@link THREE.SkinnedMesh}.
     * However, any instance of {@link THREE.Object3d} can be used if it represents a hierarchy of {@link Bone}s (via {@link THREE.Object3d.children.children}).
     */
    'object',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\helpers\SkeletonHelper.d.ts
/**
 * A helper object to assist with visualizing a {@link Skeleton | Skeleton}
 * @remarks
 * The helper is rendered using a {@link LineBasicMaterial | LineBasicMaterial}.
 * @example
 * ```typescript
 * const helper = new THREE.SkeletonHelper(skinnedMesh)
 * scene.add(helper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_blending | WebGl / animation / skinning / blending}
 * @see Example: {@link https://threejs.org/examples/#webgl_animation_skinning_morph | WebGl / animation / skinning / morph}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_bvh | WebGl / loader / bvh }
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/SkeletonHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/SkeletonHelper.js | Source}
 */

objParams.skeletonHelper = [...objParams.lineSegments,
    /**
     * The list of bones that the helper renders as {@link Line | Lines}.
     */
    'bones',
    /**
     * The object passed in the constructor.
     */
    'root',
    /**
     * Reference to the {@link THREE.Object3d.matrixWorld | root.matrixWorld}.
     */
    'matrix',
    /**
     * Is set to `false`, as the helper is using the {@link THREE.Object3d.matrixWorld | root.matrixWorld}.
     * @see {@link THREE.Object3d.matrixAutoUpdate | Object3d.matrixAutoUpdate}.
     * @defaultValue `false`.
     */
    'matrixAutoUpdate',
].distinct()

export type SkeletonHelperProps = Object3DNode<SkeletonHelper, typeof SkeletonHelper, { object: SkinnedMesh | Object3D; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        skeletonHelper: Partial<{ object: SkinnedMesh | Object3D; }>
    }
}

defaults.skeletonHelper = {}

