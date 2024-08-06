import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { USDZLoader } from 'three/examples/jsm/loaders/USDZLoader.js';
export * from 'three/examples/jsm/loaders/USDZLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        USDZLoader: typeof USDZLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            usdzLoader: USDZLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        usdzLoader: string[];
        usdaParser: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        usdzLoader: string[];
        usdaParser: string[];
    }
}
export type USDZLoaderProps = Node<USDZLoader, typeof USDZLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        usdzLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=USDZLoader.d.ts.map