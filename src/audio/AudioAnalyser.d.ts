import { Object3DNode } from '../../three-types';
import { Audio } from './Audio';
import { AudioAnalyser } from 'three/src/audio/AudioAnalyser.js';
export { AudioAnalyser } from 'three/src/audio/AudioAnalyser.js';
declare module '../../lib/3/three' {
    interface Three {
        AudioAnalyser: typeof AudioAnalyser;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            audioAnalyser: AudioAnalyserProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        audioAnalyser: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        audioAnalyser: string[];
    }
}
export type AudioAnalyserProps = Object3DNode<AudioAnalyser, typeof AudioAnalyser, {
    audio: Audio<AudioNode>;
    fftSize?: number;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        audioAnalyser: Partial<{
            audio: Audio<AudioNode>;
            fftSize?: number;
        }>;
    }
}
//# sourceMappingURL=AudioAnalyser.d.ts.map