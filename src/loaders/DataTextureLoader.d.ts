import { Node } from '../../three-types';
import { DataTextureLoader } from 'three/src/loaders/DataTextureLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        DataTextureLoader: typeof DataTextureLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dataTextureLoader: DataTextureLoader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        dataTextureLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        dataTextureLoader: string[];
    }
}
export type DataTextureLoaderProps = Node<DataTextureLoader, typeof DataTextureLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        dataTextureLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=DataTextureLoader.d.ts.map