import { Object3DNode, Matrix4 } from '../../three-types';
import { Bone } from 'three/src/objects/Bone.js';
import { Skeleton } from 'three/src/objects/Skeleton.js';
export { Skeleton } from 'three/src/objects/Skeleton.js';
declare module '../../lib/3/three' {
    interface Three {
        Skeleton: typeof Skeleton;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            skeleton: SkeletonProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        skeleton: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        skeleton: string[];
    }
}
export type SkeletonProps = Object3DNode<Skeleton, typeof Skeleton, {
    bones?: Bone[];
    boneInverses?: Matrix4[];
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        skeleton: {
            bones?: Bone[];
            boneInverses?: Matrix4[];
        };
    }
}
//# sourceMappingURL=Skeleton.d.ts.map