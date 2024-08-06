import { Object3DNode } from '../../../three-types';
import { InterpolationModes } from 'three/src/constants.js';
import { ColorKeyframeTrack } from 'three/src/animation/tracks/ColorKeyframeTrack.js';
export { ColorKeyframeTrack } from 'three/src/animation/tracks/ColorKeyframeTrack.js';
declare module '../../../lib/3/three' {
    interface Three {
        ColorKeyframeTrack: typeof ColorKeyframeTrack;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            colorKeyframeTrack: ColorKeyframeTrackProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        colorKeyframeTrack: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        colorKeyframeTrack: string[];
    }
}
export type ColorKeyframeTrackProps = Object3DNode<ColorKeyframeTrack, typeof ColorKeyframeTrack, {
    name: string;
    times: ArrayLike<number>;
    values: ArrayLike<number>;
    interpolation?: InterpolationModes;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        colorKeyframeTrack: Partial<{
            name: string;
            times: ArrayLike<number>;
            values: ArrayLike<number>;
            interpolation?: InterpolationModes;
        }>;
    }
}
//# sourceMappingURL=ColorKeyframeTrack.d.ts.map