import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { XYZLoader } from 'three/examples/jsm/loaders/XYZLoader.js';
export * from 'three/examples/jsm/loaders/XYZLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        XYZLoader: typeof XYZLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xyzLoader: XYZLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        xyzLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        xyzLoader: string[];
    }
}
export type XYZLoaderProps = Node<XYZLoader, typeof XYZLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        xyzLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=XYZLoader.d.ts.map