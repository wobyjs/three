import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';
export * from 'three/examples/jsm/loaders/TGALoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        TGALoader: typeof TGALoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tgaLoader: TGALoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        tgaLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        tgaLoader: string[];
    }
}
export type TGALoaderProps = Node<TGALoader, typeof TGALoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        tgaLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=TGALoader.d.ts.map