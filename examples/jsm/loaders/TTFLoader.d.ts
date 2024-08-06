import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
export * from 'three/examples/jsm/loaders/TTFLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        TTFLoader: typeof TTFLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ttfLoader: TTFLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        ttfLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        ttfLoader: string[];
    }
}
export type TTFLoaderProps = Node<TTFLoader, typeof TTFLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        ttfLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=TTFLoader.d.ts.map