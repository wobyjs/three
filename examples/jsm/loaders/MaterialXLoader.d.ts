import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { MaterialXLoader } from 'three/examples/jsm/loaders/MaterialXLoader.js';
export * from 'three/examples/jsm/loaders/MaterialXLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        MaterialXLoader: typeof MaterialXLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            materialXLoader: MaterialXLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        materialXLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        materialXLoader: string[];
    }
}
export type MaterialXLoaderProps = Node<MaterialXLoader, typeof MaterialXLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        materialXLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=MaterialXLoader.d.ts.map