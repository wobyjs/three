import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { AMFLoader } from 'three/examples/jsm/loaders/AMFLoader.js';
export * from 'three/examples/jsm/loaders/AMFLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        AMFLoader: typeof AMFLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            amfLoader: AMFLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        amfLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        amfLoader: string[];
    }
}
export type AMFLoaderProps = Node<AMFLoader, typeof AMFLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        amfLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=AMFLoader.d.ts.map