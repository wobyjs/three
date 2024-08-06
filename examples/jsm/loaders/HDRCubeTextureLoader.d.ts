import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js';
export * from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        HDRCubeTextureLoader: typeof HDRCubeTextureLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hdrCubeTextureLoader: HDRCubeTextureLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        hdrCubeTextureLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        hdrCubeTextureLoader: string[];
    }
}
export type HDRCubeTextureLoaderProps = Node<HDRCubeTextureLoader, typeof HDRCubeTextureLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        hdrCubeTextureLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=HDRCubeTextureLoader.d.ts.map