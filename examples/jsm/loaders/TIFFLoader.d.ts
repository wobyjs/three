import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { TIFFLoader } from 'three/examples/jsm/loaders/TIFFLoader.js';
export * from 'three/examples/jsm/loaders/TIFFLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        TIFFLoader: typeof TIFFLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tiffLoader: TIFFLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        tiffLoader: string[];
        tiffResult: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        tiffLoader: string[];
        tiffResult: string[];
    }
}
export type TIFFLoaderProps = Node<TIFFLoader, typeof TIFFLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        tiffLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=TIFFLoader.d.ts.map