import { Node } from '../../three-types';
import { BufferGeometryLoader } from 'three/src/loaders/BufferGeometryLoader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import './Loader';
declare module '../../lib/3/three' {
    interface Three {
        BufferGeometryLoader: typeof BufferGeometryLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bufferGeometryLoader: BufferGeometryLoader;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        bufferGeometryLoader: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        bufferGeometryLoader: string[];
    }
}
export type BufferGeometryLoaderProps = Node<BufferGeometryLoader, typeof BufferGeometryLoader, {
    manager?: LoadingManager;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        bufferGeometryLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=BufferGeometryLoader.d.ts.map