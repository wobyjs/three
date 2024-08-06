import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { Node } from '../../../three-types';
import NodeLoader from 'three/src/nodes/loaders/NodeLoader.js';
export { NodeLoader };
declare module '../../../lib/3/three' {
    interface Three {
        NodeLoader: typeof NodeLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeLoader: NodeLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeLoader: string[];
        nodeLoaderResult: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeLoader: string[];
        nodeLoaderResult: string[];
    }
}
export type NodeLoaderProps = Node<NodeLoader, typeof NodeLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=NodeLoader.d.ts.map