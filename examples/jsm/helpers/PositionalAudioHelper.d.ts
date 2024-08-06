import { Node } from '../../../three-types';
import { PositionalAudio } from 'three/src/audio/PositionalAudio.js';
import { PositionalAudioHelper } from 'three/examples/jsm/helpers/PositionalAudioHelper.js';
export * from 'three/examples/jsm/helpers/PositionalAudioHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        PositionalAudioHelper: typeof PositionalAudioHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            positionalAudioHelper: PositionalAudioHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        positionalAudioHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        positionalAudioHelper: string[];
    }
}
export type PositionalAudioHelperProps = Node<PositionalAudioHelper, typeof PositionalAudioHelper, {
    audio: PositionalAudio;
    range?: number;
    divisionsInnerAngle?: number;
    divisionsOuterAngle?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        positionalAudioHelper: Partial<{
            audio: PositionalAudio;
            range?: number;
            divisionsInnerAngle?: number;
            divisionsOuterAngle?: number;
        }>;
    }
}
//# sourceMappingURL=PositionalAudioHelper.d.ts.map