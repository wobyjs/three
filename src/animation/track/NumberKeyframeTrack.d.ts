import { Object3DNode } from '../../../three-types';
import { InterpolationModes } from 'three/src/constants.js';
import { NumberKeyframeTrack } from 'three/src/animation/tracks/NumberKeyframeTrack.js';
export { NumberKeyframeTrack } from 'three/src/animation/tracks/NumberKeyframeTrack.js';
declare module '../../../lib/3/three' {
    interface Three {
        NumberKeyframeTrack: typeof NumberKeyframeTrack;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            numberKeyframeTrack: NumberKeyframeTrackProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        numberKeyframeTrack: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        numberKeyframeTrack: string[];
    }
}
export type NumberKeyframeTrackProps = Object3DNode<NumberKeyframeTrack, typeof NumberKeyframeTrack, {
    name: string;
    times: ArrayLike<number>;
    values: ArrayLike<number>;
    interpolation?: InterpolationModes;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        numberKeyframeTrack: Partial<{
            name: string;
            times: ArrayLike<number>;
            values: ArrayLike<number>;
            interpolation?: InterpolationModes;
        }>;
    }
}
//# sourceMappingURL=NumberKeyframeTrack.d.ts.map