import { PositionalAudio } from 'three/src/audio/PositionalAudio.js';
import { Object3DNode } from '../../three-types';
import './Audio';
declare module '../../lib/3/three' {
    interface Three {
        PositionalAudio: typeof PositionalAudio;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            positionalAudio: PositionalAudioProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        positionalAudio: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        positionalAudio: string[];
    }
}
export type PositionalAudioProps = Object3DNode<PositionalAudio, typeof PositionalAudio, {
    listener: AudioListener;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        positionalAudio: Partial<{
            listener: AudioListener;
        }>;
    }
}
//# sourceMappingURL=PositionalAudio.d.ts.map