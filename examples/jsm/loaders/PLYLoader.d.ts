import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
export * from 'three/examples/jsm/loaders/PLYLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        PLYLoader: typeof PLYLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            plyLoader: PLYLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        plyLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        plyLoader: string[];
    }
}
export type PLYLoaderProps = Node<PLYLoader, typeof PLYLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        plyLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=PLYLoader.d.ts.map