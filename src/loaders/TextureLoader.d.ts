import { Node } from '../../three-types';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
export * from 'three/src/loaders/TextureLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
export * from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        TextureLoader: typeof TextureLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textureLoader: TextureLoader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        textureLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        textureLoader: string[];
    }
}
export type TextureLoaderProps = Node<TextureLoader, typeof TextureLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        textureLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=TextureLoader.d.ts.map