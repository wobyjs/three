import { Object3DNode } from '../../three-types';
import { AudioListener } from 'three/src/audio/AudioListener.js';
import { Audio } from 'three/src/audio/Audio.js';
export * from 'three/src/audio/Audio.js';
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            audio: AudioProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        audio: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        audio: string[];
    }
}
export type AudioProps = Object3DNode<Audio, typeof Audio, {
    listener: AudioListener;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        audio: Partial<{
            listener: AudioListener;
        }>;
    }
}
//# sourceMappingURL=Audio.d.ts.map