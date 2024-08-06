import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
export * from 'three/examples/jsm/loaders/OBJLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        OBJLoader: typeof OBJLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            objLoader: OBJLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        objLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        objLoader: string[];
    }
}
export type OBJLoaderProps = Node<OBJLoader, typeof OBJLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        objLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=OBJLoader.d.ts.map