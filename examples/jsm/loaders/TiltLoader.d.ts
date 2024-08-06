import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { TiltLoader } from 'three/examples/jsm/loaders/TiltLoader.js';
export * from 'three/examples/jsm/loaders/TiltLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        TiltLoader: typeof TiltLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tiltLoader: TiltLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        tiltLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        tiltLoader: string[];
    }
}
export type TiltLoaderProps = Node<TiltLoader, typeof TiltLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        tiltLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=TiltLoader.d.ts.map