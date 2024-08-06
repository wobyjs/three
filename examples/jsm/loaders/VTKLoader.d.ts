import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { VTKLoader } from 'three/examples/jsm/loaders/VTKLoader.js';
export * from 'three/examples/jsm/loaders/VTKLoader.js';
declare module '../../../lib/3/three' {
    interface Three {
        VTKLoader: typeof VTKLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vtkLoader: VTKLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        vtkLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        vtkLoader: string[];
    }
}
export type VTKLoaderProps = Node<VTKLoader, typeof VTKLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        vtkLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=VTKLoader.d.ts.map