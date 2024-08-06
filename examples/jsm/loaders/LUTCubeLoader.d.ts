import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { LUTCubeLoader } from 'three/examples/jsm/loaders/LUTCubeLoader.js';
export * from 'three/examples/jsm/loaders/LUTCubeLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        LUTCubeLoader: typeof LUTCubeLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lutCubeLoader: LUTCubeLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lutCubeLoader: string[];
        lutCubeResult: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lutCubeLoader: string[];
        lutCubeResult: string[];
    }
}
export type LUTCubeLoaderProps = Node<LUTCubeLoader, typeof LUTCubeLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lutCubeLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=LUTCubeLoader.d.ts.map