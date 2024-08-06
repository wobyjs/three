import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader.js';
export * from 'three/examples/jsm/loaders/VOXLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        VOXLoader: typeof VOXLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            voxLoader: VOXLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        voxLoader: string[];
        chunk: string[];
        voxMesh: string[];
        voxData3dTexture: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        voxLoader: string[];
        chunk: string[];
        voxMesh: string[];
        voxData3dTexture: string[];
    }
}
export type VOXLoaderProps = Node<VOXLoader, typeof VOXLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        voxLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=VOXLoader.d.ts.map