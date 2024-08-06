import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { KMZLoader } from 'three/examples/jsm/loaders/KMZLoader.js';
export * from 'three/examples/jsm/loaders/KMZLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        KMZLoader: typeof KMZLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            kmzLoader: KMZLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        kmzLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        kmzLoader: string[];
    }
}
export type KMZLoaderProps = Node<KMZLoader, typeof KMZLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        kmzLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=KMZLoader.d.ts.map