import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { Node } from '../../../three-types';
import NodeMaterialLoader from 'three/src/nodes/loaders/NodeMaterialLoader.js';
export { NodeMaterialLoader };
declare module '../../../lib/3/three' {
    interface Three {
        NodeMaterialLoader: typeof NodeMaterialLoader;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeMaterialLoader: NodeMaterialLoaderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeMaterialLoader: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeMaterialLoader: string[];
    }
}
export type NodeMaterialLoaderProps = Node<NodeMaterialLoader, typeof NodeMaterialLoader, {
    manager?: LoadingManager;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeMaterialLoader: {
            manager?: LoadingManager;
        };
    }
}
//# sourceMappingURL=NodeMaterialLoader.d.ts.map