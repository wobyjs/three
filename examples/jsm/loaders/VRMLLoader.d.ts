import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader.js';
export * from 'three/examples/jsm/loaders/VRMLLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        VRMLLoader: typeof VRMLLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vrmlLoader: VRMLLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        vrmlLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        vrmlLoader: string[];
    }
}
export type VRMLLoaderProps = Node<VRMLLoader, typeof VRMLLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        vrmlLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=VRMLLoader.d.ts.map