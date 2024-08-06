import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { GCodeLoader } from 'three/examples/jsm/loaders/GCodeLoader.js';
export * from 'three/examples/jsm/loaders/GCodeLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        GCodeLoader: typeof GCodeLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gCodeLoader: GCodeLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        gCodeLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        gCodeLoader: string[];
    }
}
export type GCodeLoaderProps = Node<GCodeLoader, typeof GCodeLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        gCodeLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=GCodeLoader.d.ts.map