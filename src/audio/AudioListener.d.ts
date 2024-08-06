import { Object3DNode } from '../../three-types';
import { AudioListener } from 'three/src/audio/AudioListener.js';
export { AudioListener } from 'three/src/audio/AudioListener.js';
declare module '../../lib/3/three' {
    interface Three {
        AudioListener: typeof AudioListener;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            audioListener: AudioListenerProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        audioListener: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        audioListener: string[];
    }
}
export type AudioListenerProps = Object3DNode<AudioListener, typeof AudioListener, {}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        audioListener: Partial<{}>;
    }
}
//# sourceMappingURL=AudioListener.d.ts.map