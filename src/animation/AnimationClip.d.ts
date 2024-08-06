import { Object3DNode } from '../../three-types';
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js';
import { AnimationBlendMode } from 'three/src/constants.js';
import { AnimationClip } from 'three/src/animation/AnimationClip.js';
export { AnimationClip } from 'three/src/animation/AnimationClip.js';
declare module '../../lib/3/three' {
    interface Three {
        AnimationClip: typeof AnimationClip;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationClip: AnimationClipProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        animationClip: string[];
        morphTarget: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        animationClip: string[];
        morphTarget: string[];
    }
}
export type AnimationClipProps = Object3DNode<AnimationClip, typeof AnimationClip, {
    name?: string;
    duration?: number;
    tracks?: KeyframeTrack[];
    blendMode?: AnimationBlendMode;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        animationClip: {
            name?: string;
            duration?: number;
            tracks?: KeyframeTrack[];
            blendMode?: AnimationBlendMode;
        };
    }
}
//# sourceMappingURL=AnimationClip.d.ts.map