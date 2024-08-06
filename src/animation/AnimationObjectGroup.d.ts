import { Object3DNode } from '../../three-types';
import { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js';
export { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js';
declare module '../../lib/3/three' {
    interface Three {
        AnimationObjectGroup: typeof AnimationObjectGroup;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationObjectGroup: AnimationObjectGroupProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        animationObjectGroup: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        animationObjectGroup: string[];
    }
}
export type AnimationObjectGroupProps = Object3DNode<AnimationObjectGroup, typeof AnimationObjectGroup, {
    args: any[];
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        animationObjectGroup: Partial<{
            args: any[];
        }>;
    }
}
//# sourceMappingURL=AnimationObjectGroup.d.ts.map