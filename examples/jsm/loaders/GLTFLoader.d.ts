import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
export * from 'three/examples/jsm/loaders/GLTFLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        GLTFLoader: typeof GLTFLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gltfLoader: GLTFLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        gltfLoader: string[];
        gltfReference: string[];
        gltfParser: string[];
        gltfLoaderPlugin: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        gltfLoader: string[];
        gltfReference: string[];
        gltfParser: string[];
        gltfLoaderPlugin: string[];
    }
}
export type GLTFLoaderProps = Node<GLTFLoader, typeof GLTFLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        gltfLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=GLTFLoader.d.ts.map