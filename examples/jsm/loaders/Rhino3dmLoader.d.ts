import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js';
export * from 'three/examples/jsm/loaders/3DMLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        Rhino3dmLoader: typeof Rhino3dmLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rhino3dmLoader: Rhino3dmLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        rhino3dmLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        rhino3dmLoader: string[];
    }
}
export type Rhino3dmLoaderProps = Node<Rhino3dmLoader, typeof Rhino3dmLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        rhino3dmLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=Rhino3dmLoader.d.ts.map