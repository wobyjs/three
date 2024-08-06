import { LWOLoaderParameters, LWOLoader } from 'three/examples/jsm/loaders/LWOLoader.js';
export * from 'three/examples/jsm/loaders/LWOLoader.js';
import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import '../../../lib/three/extensions';
declare module '../../../lib/3/three' {
    interface Three {
        LWOLoader: typeof LWOLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lwoLoader: LWOLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lwoLoader: string[];
        lwo: string[];
        lwoLoaderParameters: {
            resourcePath: 'resourcePath';
        };
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lwoLoader: string[];
        lwo: string[];
        lwoLoaderParameters: string[];
    }
}
export type LWOLoaderProps = Node<LWOLoader, typeof LWOLoader, {
    manager?: LoadingManager;
    parameters?: LWOLoaderParameters;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lwoLoader: {
            manager?: LoadingManager;
            parameters?: LWOLoaderParameters;
        };
    }
}
//# sourceMappingURL=LWOLoader.d.ts.map