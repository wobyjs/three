import { Object3DNode } from '../../three-types';
import { InterpolationModes } from 'three/src/constants.js';
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js';
export { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js';
declare module '../../lib/3/three' {
    interface Three {
        KeyframeTrack: typeof KeyframeTrack;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            keyframeTrack: KeyframeTrackProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        keyframeTrack: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        keyframeTrack: string[];
    }
}
export type KeyframeTrackProps = Object3DNode<KeyframeTrack, typeof KeyframeTrack, {
    name: string;
    times: ArrayLike<number>;
    values: ArrayLike<any>;
    interpolation?: InterpolationModes;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        keyframeTrack: Partial<{
            name: string;
            times: ArrayLike<number>;
            values: ArrayLike<any>;
            interpolation?: InterpolationModes;
        }>;
    }
}
//# sourceMappingURL=KeyframeTrack.d.ts.map