import { Object3DNode } from '../../three-types';
import { Bone } from 'three/src/objects/Bone.js';
export { Bone } from 'three/src/objects/Bone.js';
declare module '../../lib/3/three' {
    interface Three {
        Bone: typeof Bone;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bone: BoneProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        bone: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        bone: string[];
    }
}
export type BoneProps = Object3DNode<Bone, typeof Bone, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        bone: {};
    }
}
//# sourceMappingURL=Bone.d.ts.map