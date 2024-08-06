import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
export * from 'three/examples/jsm/loaders/DRACOLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        DRACOLoader: typeof DRACOLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dracoLoader: DRACOLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        dracoLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        dracoLoader: string[];
    }
}
export type DRACOLoaderProps = Node<DRACOLoader, typeof DRACOLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        dracoLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=DRACOLoader.d.ts.map