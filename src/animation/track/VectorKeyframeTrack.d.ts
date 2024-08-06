import { Object3DNode } from '../../../three-types';
import { InterpolationModes } from 'three/src/constants.js';
import { VectorKeyframeTrack } from 'three/src/animation/tracks/VectorKeyframeTrack.js';
export { VectorKeyframeTrack } from 'three/src/animation/tracks/VectorKeyframeTrack.js';
declare module '../../../lib/3/three' {
    interface Three {
        VectorKeyframeTrack: typeof VectorKeyframeTrack;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vectorKeyframeTrack: VectorKeyframeTrackProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        vectorKeyframeTrack: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        vectorKeyframeTrack: string[];
    }
}
export type VectorKeyframeTrackProps = Object3DNode<VectorKeyframeTrack, typeof VectorKeyframeTrack, {
    name: string;
    times: ArrayLike<number>;
    values: ArrayLike<number>;
    interpolation?: InterpolationModes;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        vectorKeyframeTrack: Partial<{
            name: string;
            times: ArrayLike<number>;
            values: ArrayLike<number>;
            interpolation?: InterpolationModes;
        }>;
    }
}
//# sourceMappingURL=VectorKeyframeTrack.d.ts.map