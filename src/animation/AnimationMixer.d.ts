import { Object3DNode } from '../../three-types';
import { Object3D } from 'three/src/core/Object3D.js';
import { AnimationMixer } from 'three/src/animation/AnimationMixer.js';
import { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js';
export { AnimationMixer } from 'three/src/animation/AnimationMixer.js';
declare module '../../lib/3/three' {
    interface Three {
        AnimationMixer: typeof AnimationMixer;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationMixer: AnimationMixerProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        animationMixerEventMap: string[];
        animationMixer: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        animationMixerEventMap: string[];
        animationMixer: string[];
    }
}
export type AnimationMixerProps = Object3DNode<AnimationMixer, typeof AnimationMixer, {
    root: Object3D | AnimationObjectGroup;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        animationMixer: Partial<{
            root: Object3D | AnimationObjectGroup;
        }>;
    }
}
//# sourceMappingURL=AnimationMixer.d.ts.map