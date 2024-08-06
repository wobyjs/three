import { Node } from '../../three-types';
import { DefaultLoadingManager, LoadingManager } from 'three/src/loaders/LoadingManager.js';
export { DefaultLoadingManager, LoadingManager };
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        LoadingManager: typeof LoadingManager;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            loadingManager: LoadingManager;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        loadingManager: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        loadingManager: string[];
    }
}
export type LoadingManagerProps = Node<LoadingManager, typeof LoadingManager, {
    onLoad?: () => void;
    onProgress?: (url: string, loaded: number, total: number) => void;
    onError?: (url: string) => void;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        loadingManager: {
            onLoad?: () => void;
            onProgress?: (url: string, loaded: number, total: number) => void;
            onError?: (url: string) => void;
        };
    }
}
//# sourceMappingURL=LoadingManager.d.ts.map