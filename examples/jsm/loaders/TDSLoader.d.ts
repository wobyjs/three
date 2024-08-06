import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader.js';
export * from 'three/examples/jsm/loaders/TDSLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        TDSLoader: typeof TDSLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tdsLoader: TDSLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        tdsLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        tdsLoader: string[];
    }
}
export type TDSLoaderProps = Node<TDSLoader, typeof TDSLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        tdsLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=TDSLoader.d.ts.map