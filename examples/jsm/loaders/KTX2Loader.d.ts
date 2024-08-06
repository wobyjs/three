import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
export * from 'three/examples/jsm/loaders/KTX2Loader.js';
declare module '../../../lib/3/three' {
    interface Three {
        KTX2Loader: typeof KTX2Loader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ktx2Loader: KTX2LoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        ktx2Loader: string[];
        ktx2LoaderWorkerConfig: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        ktx2Loader: string[];
        ktx2LoaderWorkerConfig: string[];
    }
}
export type KTX2LoaderProps = Node<KTX2Loader, typeof KTX2Loader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        ktx2Loader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=KTX2Loader.d.ts.map