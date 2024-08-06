import { Object3DNode } from '../../../three-types';
import { StringKeyframeTrack } from 'three/src/animation/tracks/StringKeyframeTrack.js';
export { StringKeyframeTrack } from 'three/src/animation/tracks/StringKeyframeTrack.js';
declare module '../../../lib/3/three' {
    interface Three {
        StringKeyframeTrack: typeof StringKeyframeTrack;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stringKeyframeTrack: StringKeyframeTrackProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        stringKeyframeTrack: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        stringKeyframeTrack: string[];
    }
}
export type StringKeyframeTrackProps = Object3DNode<StringKeyframeTrack, typeof StringKeyframeTrack, {
    name: string;
    times: ArrayLike<number>;
    values: ArrayLike<any>;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        stringKeyframeTrack: Partial<{
            name: string;
            times: ArrayLike<number>;
            values: ArrayLike<any>;
        }>;
    }
}
//# sourceMappingURL=StringKeyframeTrack.d.ts.map