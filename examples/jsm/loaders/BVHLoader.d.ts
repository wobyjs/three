import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { BVHLoader } from 'three/examples/jsm/loaders/BVHLoader.js';
export * from 'three/examples/jsm/loaders/BVHLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        BVHLoader: typeof BVHLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bvhLoader: BVHLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        bvhLoader: string[];
        bvh: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        bvhLoader: string[];
        bvh: string[];
    }
}
export type BVHLoaderProps = Node<BVHLoader, typeof BVHLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        bvhLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=BVHLoader.d.ts.map