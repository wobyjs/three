import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
export * from 'three/examples/jsm/loaders/PCDLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        PCDLoader: typeof PCDLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pcdLoader: PCDLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        pcdLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        pcdLoader: string[];
    }
}
export type PCDLoaderProps = Node<PCDLoader, typeof PCDLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        pcdLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=PCDLoader.d.ts.map