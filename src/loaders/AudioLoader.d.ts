import { Node } from '../../three-types';
import { AudioLoader } from 'three/src/loaders/AudioLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        AudioLoader: typeof AudioLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            audioLoader: AudioLoader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        audioLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        audioLoader: string[];
    }
}
export type AudioLoaderProps = Node<AudioLoader, typeof AudioLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        audioLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=AudioLoader.d.ts.map