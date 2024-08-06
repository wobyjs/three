import { Node } from '../../three-types';
import { ImageBitmapLoader } from 'three/src/loaders/ImageBitmapLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        ImageBitmapLoader: typeof ImageBitmapLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            imageBitmapLoader: ImageBitmapLoader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        imageBitmapLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        imageBitmapLoader: string[];
    }
}
export type ImageBitmapLoaderProps = Node<ImageBitmapLoader, typeof ImageBitmapLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        imageBitmapLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=ImageBitmapLoader.d.ts.map