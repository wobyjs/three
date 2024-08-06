import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
export * from 'three/examples/jsm/loaders/RGBELoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        RGBELoader: typeof RGBELoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rgbeLoader: RGBELoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        rgbeLoader: string[];
        rgbe: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        rgbeLoader: string[];
        rgbe: string[];
    }
}
export type RGBELoaderProps = Node<RGBELoader, typeof RGBELoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        rgbeLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=RGBELoader.d.ts.map