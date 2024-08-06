import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
export * from 'three/examples/jsm/loaders/MTLLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        MTLLoader: typeof MTLLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mtlLoader: MTLLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        mtlLoader: string[];
        materialCreatorOptions: string[];
        materialInfo: string[];
        texParams: string[];
        materialCreator: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        mtlLoader: string[];
        materialCreatorOptions: string[];
        materialInfo: string[];
        texParams: string[];
        materialCreator: string[];
    }
}
export type MTLLoaderProps = Node<MTLLoader, typeof MTLLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        mtlLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=MTLLoader.d.ts.map