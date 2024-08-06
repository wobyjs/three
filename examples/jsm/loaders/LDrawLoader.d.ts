import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { LDrawLoader } from 'three/examples/jsm/loaders/LDrawLoader.js';
export * from 'three/examples/jsm/loaders/LDrawLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        LDrawLoader: typeof LDrawLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lDrawLoader: LDrawLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lDrawLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lDrawLoader: string[];
    }
}
export type LDrawLoaderProps = Node<LDrawLoader, typeof LDrawLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lDrawLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=LDrawLoader.d.ts.map