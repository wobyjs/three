import { Object3DNode } from '../../three-types';
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js';
import { Object3D } from 'three/src/core/Object3D.js';
import { SkeletonHelper } from 'three/src/helpers/SkeletonHelper.js';
export { SkeletonHelper } from 'three/src/helpers/SkeletonHelper.js';
declare module '../../lib/3/three' {
    interface Three {
        SkeletonHelper: typeof SkeletonHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            skeletonHelper: SkeletonHelperProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        skeletonHelper: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        skeletonHelper: string[];
    }
}
export type SkeletonHelperProps = Object3DNode<SkeletonHelper, typeof SkeletonHelper, {
    object: SkinnedMesh | Object3D;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        skeletonHelper: Partial<{
            object: SkinnedMesh | Object3D;
        }>;
    }
}
//# sourceMappingURL=SkeletonHelper.d.ts.map