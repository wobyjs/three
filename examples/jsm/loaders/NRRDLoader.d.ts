import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { NRRDLoader } from 'three/examples/jsm/loaders/NRRDLoader.js';
export * from 'three/examples/jsm/loaders/NRRDLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        NRRDLoader: typeof NRRDLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nrrdLoader: NRRDLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nrrdLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nrrdLoader: string[];
    }
}
export type NRRDLoaderProps = Node<NRRDLoader, typeof NRRDLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nrrdLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=NRRDLoader.d.ts.map