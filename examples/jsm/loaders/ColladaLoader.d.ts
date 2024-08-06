import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
export * from 'three/examples/jsm/loaders/ColladaLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        ColladaLoader: typeof ColladaLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            colladaLoader: ColladaLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        colladaLoader: string[];
        collada: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        colladaLoader: string[];
        collada: string[];
    }
}
export type ColladaLoaderProps = Node<ColladaLoader, typeof ColladaLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        colladaLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=ColladaLoader.d.ts.map