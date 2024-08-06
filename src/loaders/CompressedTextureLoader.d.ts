import { Node } from '../../three-types';
import { CompressedTextureLoader } from 'three/src/loaders/CompressedTextureLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        CompressedTextureLoader: typeof CompressedTextureLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            compressedTextureLoader: CompressedTextureLoader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        compressedTextureLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        compressedTextureLoader: string[];
    }
}
export type CompressedTextureLoaderProps = Node<CompressedTextureLoader, typeof CompressedTextureLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        compressedTextureLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=CompressedTextureLoader.d.ts.map