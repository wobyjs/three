import { Node } from '../../three-types';
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        CubeTextureLoader: typeof CubeTextureLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeTextureLoader: CubeTextureLoader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        cubeTextureLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        cubeTextureLoader: string[];
    }
}
export type CubeTextureLoaderProps = Node<CubeTextureLoader, typeof CubeTextureLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        cubeTextureLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=CubeTextureLoader.d.ts.map