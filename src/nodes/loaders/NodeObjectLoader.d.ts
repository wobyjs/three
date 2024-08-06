import { Node } from '../../../three-types';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import NodeObjectLoader from 'three/src/nodes/loaders/NodeObjectLoader.js';
export { NodeObjectLoader };
declare module '../../../lib/3/three' {
    interface Three {
        NodeObjectLoader: typeof NodeObjectLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeObjectLoader: NodeObjectLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeObjectLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeObjectLoader: string[];
    }
}
export type NodeObjectLoaderProps = Node<NodeObjectLoader, typeof NodeObjectLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeObjectLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=NodeObjectLoader.d.ts.map