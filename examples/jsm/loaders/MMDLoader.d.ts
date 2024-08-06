import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js';
export * from 'three/examples/jsm/loaders/MMDLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        MMDLoader: typeof MMDLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mmdLoader: MMDLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        mmdLoader: string[];
        mmdLoaderAnimationObject: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        mmdLoader: string[];
        mmdLoaderAnimationObject: string[];
    }
}
export type MMDLoaderProps = Node<MMDLoader, typeof MMDLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=MMDLoader.d.ts.map