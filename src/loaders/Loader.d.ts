import { Node } from '../../three-types';
import { Loader } from 'three/src/loaders/Loader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
declare module '../../lib/3/three' {
    interface Three {
        Loader: typeof Loader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            loader: Loader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        loader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        loader: string[];
    }
}
export type LoaderProps = Node<Loader, typeof Loader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        loader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=Loader.d.ts.map