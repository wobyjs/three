import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader.js';
export * from 'three/examples/jsm/loaders/RGBMLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        RGBMLoader: typeof RGBMLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rgbmLoader: RGBMLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        rgbmLoader: string[];
        rgbm: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        rgbmLoader: string[];
        rgbm: string[];
    }
}
export type RGBMLoaderProps = Node<RGBMLoader, typeof RGBMLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        rgbmLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=RGBMLoader.d.ts.map