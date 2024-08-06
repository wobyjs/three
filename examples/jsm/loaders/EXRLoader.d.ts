import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
export * from 'three/examples/jsm/loaders/EXRLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        EXRLoader: typeof EXRLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            exrLoader: EXRLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        exrLoader: string[];
        exr: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        exrLoader: string[];
        exr: string[];
    }
}
export type EXRLoaderProps = Node<EXRLoader, typeof EXRLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        exrLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=EXRLoader.d.ts.map