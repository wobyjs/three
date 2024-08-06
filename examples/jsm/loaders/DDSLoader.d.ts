import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js';
export * from 'three/examples/jsm/loaders/DDSLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        DDSLoader: typeof DDSLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ddsLoader: DDSLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        ddsLoader: string[];
        dds: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        ddsLoader: string[];
        dds: string[];
    }
}
export type DDSLoaderProps = Node<DDSLoader, typeof DDSLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        ddsLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=DDSLoader.d.ts.map