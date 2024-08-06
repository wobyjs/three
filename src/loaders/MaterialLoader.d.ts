import { Node } from '../../three-types';
import { MaterialLoader } from 'three/src/loaders/MaterialLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        MaterialLoader: typeof MaterialLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            materialLoader: MaterialLoader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        materialLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        materialLoader: string[];
    }
}
export type MaterialLoaderProps = Node<MaterialLoader, typeof MaterialLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        materialLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=MaterialLoader.d.ts.map