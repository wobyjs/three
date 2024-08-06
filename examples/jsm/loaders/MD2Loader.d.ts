import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { MD2Loader } from 'three/examples/jsm/loaders/MD2Loader.js';
export * from 'three/examples/jsm/loaders/MD2Loader.js';
declare module '../../../lib/3/three' {
    interface Three {
        MD2Loader: typeof MD2Loader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            md2Loader: MD2LoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        md2Loader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        md2Loader: string[];
    }
}
export type MD2LoaderProps = Node<MD2Loader, typeof MD2Loader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        md2Loader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=MD2Loader.d.ts.map