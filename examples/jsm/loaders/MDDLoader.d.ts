import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { MDDLoader } from 'three/examples/jsm/loaders/MDDLoader.js';
export * from 'three/examples/jsm/loaders/MDDLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        MDDLoader: typeof MDDLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mddLoader: MDDLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        mddLoader: string[];
        mdd: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        mddLoader: string[];
        mdd: string[];
    }
}
export type MDDLoaderProps = Node<MDDLoader, typeof MDDLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        mddLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=MDDLoader.d.ts.map