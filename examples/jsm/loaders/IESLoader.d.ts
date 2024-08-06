import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { IESLoader } from 'three/examples/jsm/loaders/IESLoader.js';
export * from 'three/examples/jsm/loaders/IESLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        IESLoader: typeof IESLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            iesLoader: IESLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        iesLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        iesLoader: string[];
    }
}
export type IESLoaderProps = Node<IESLoader, typeof IESLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        iesLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=IESLoader.d.ts.map