import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
export * from 'three/examples/jsm/loaders/STLLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        STLLoader: typeof STLLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stlLoader: STLLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        stlLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        stlLoader: string[];
    }
}
export type STLLoaderProps = Node<STLLoader, typeof STLLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        stlLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=STLLoader.d.ts.map