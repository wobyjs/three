import { Object3DNode } from '../../three-types';
import { AnimationMixer } from 'three/src/animation/AnimationMixer.js';
import { Object3D } from 'three/src/core/Object3D.js';
import { AnimationClip } from 'three/src/animation/AnimationClip.js';
import { AnimationBlendMode } from 'three/src/constants.js';
import { AnimationAction } from 'three/src/animation/AnimationAction.js';
export { AnimationAction } from 'three/src/animation/AnimationAction.js';
declare module '../../lib/3/three' {
    interface Three {
        AnimationAction: typeof AnimationAction;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationAction: AnimationActionProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        animationAction: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        animationAction: string[];
    }
}
export type AnimationActionProps = Object3DNode<AnimationAction, typeof AnimationAction, {
    mixer: AnimationMixer;
    clip: AnimationClip;
    localRoot?: Object3D;
    blendMode?: AnimationBlendMode;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        animationAction: Partial<{
            mixer: AnimationMixer;
            clip: AnimationClip;
            localRoot?: Object3D;
            blendMode?: AnimationBlendMode;
        }>;
    }
}
//# sourceMappingURL=AnimationAction.d.ts.map