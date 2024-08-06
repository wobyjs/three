import { Object3DNode } from '../../../three-types';
import { InterpolationModes } from 'three/src/constants.js';
import { QuaternionKeyframeTrack } from 'three/src/animation/tracks/QuaternionKeyframeTrack.js';
export { QuaternionKeyframeTrack } from 'three/src/animation/tracks/QuaternionKeyframeTrack.js';
declare module '../../../lib/3/three' {
    interface Three {
        QuaternionKeyframeTrack: typeof QuaternionKeyframeTrack;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            quaternionKeyframeTrack: QuaternionKeyframeTrackProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        quaternionKeyframeTrack: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        quaternionKeyframeTrack: string[];
    }
}
export type QuaternionKeyframeTrackProps = Object3DNode<QuaternionKeyframeTrack, typeof QuaternionKeyframeTrack, {
    name: string;
    times: ArrayLike<number>;
    values: ArrayLike<number>;
    interpolation?: InterpolationModes;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        quaternionKeyframeTrack: Partial<{
            name: string;
            times: ArrayLike<number>;
            values: ArrayLike<number>;
            interpolation?: InterpolationModes;
        }>;
    }
}
//# sourceMappingURL=QuaternionKeyframeTrack.d.ts.map