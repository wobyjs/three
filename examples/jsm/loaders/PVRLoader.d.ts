import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader.js';
export * from 'three/examples/jsm/loaders/PVRLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        PVRLoader: typeof PVRLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pvrLoader: PVRLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        pvrLoader: string[];
        pvr: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        pvrLoader: string[];
        pvr: string[];
    }
}
export type PVRLoaderProps = Node<PVRLoader, typeof PVRLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        pvrLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=PVRLoader.d.ts.map