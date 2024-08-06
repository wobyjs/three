import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js';
export * from 'three/examples/jsm/loaders/KTXLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        KTXLoader: typeof KTXLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ktxLoader: KTXLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        ktxLoader: string[];
        ktx: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        ktxLoader: string[];
        ktx: string[];
    }
}
export type KTXLoaderProps = Node<KTXLoader, typeof KTXLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        ktxLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=KTXLoader.d.ts.map