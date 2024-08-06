import { Node } from '../../three-types';
import { FileLoader } from 'three/src/loaders/FileLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        FileLoader: typeof FileLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fileLoader: FileLoader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        fileLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        fileLoader: string[];
    }
}
export type FileLoaderProps = Node<FileLoader, typeof FileLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        fileLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=FileLoader.d.ts.map