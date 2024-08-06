import { Node } from '../../three-types';
import { ObjectLoader } from 'three/src/loaders/ObjectLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        ObjectLoader: typeof ObjectLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            objectLoader: ObjectLoader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        objectLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        objectLoader: string[];
    }
}
export type ObjectLoaderProps = Node<ObjectLoader, typeof ObjectLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        objectLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=ObjectLoader.d.ts.map