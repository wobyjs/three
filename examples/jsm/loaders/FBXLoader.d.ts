import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
export * from 'three/examples/jsm/loaders/FBXLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        FBXLoader: typeof FBXLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fbxLoader: FBXLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        fbxLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        fbxLoader: string[];
    }
}
export type FBXLoaderProps = Node<FBXLoader, typeof FBXLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        fbxLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=FBXLoader.d.ts.map