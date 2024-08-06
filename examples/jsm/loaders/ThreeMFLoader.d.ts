import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MfLoader.js';
export * from 'three/examples/jsm/loaders/3MfLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        ThreeMfLoader: typeof ThreeMFLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            threeMfLoader: ThreeMfLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        threeMfLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        threeMfLoader: string[];
    }
}
export type ThreeMfLoaderProps = Node<ThreeMFLoader, typeof ThreeMFLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        threeMfLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=ThreeMFLoader.d.ts.map