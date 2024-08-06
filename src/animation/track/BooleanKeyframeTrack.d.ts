import { Object3DNode } from '../../../three-types';
import { BooleanKeyframeTrack } from 'three/src/animation/tracks/BooleanKeyframeTrack.js';
export { BooleanKeyframeTrack } from 'three/src/animation/tracks/BooleanKeyframeTrack.js';
declare module '../../../lib/3/three' {
    interface Three {
        BooleanKeyframeTrack: typeof BooleanKeyframeTrack;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            booleanKeyframeTrack: BooleanKeyframeTrackProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        booleanKeyframeTrack: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        booleanKeyframeTrack: string[];
    }
}
export type BooleanKeyframeTrackProps = Object3DNode<BooleanKeyframeTrack, typeof BooleanKeyframeTrack, {
    name: string;
    times: ArrayLike<number>;
    values: ArrayLike<any>;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        booleanKeyframeTrack: Partial<{
            name: string;
            times: ArrayLike<number>;
            values: ArrayLike<any>;
        }>;
    }
}
//# sourceMappingURL=BooleanKeyframeTrack.d.ts.map