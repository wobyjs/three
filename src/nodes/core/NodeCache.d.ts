import { Node } from '../../../three-types';
import NodeCache from 'three/src/nodes/core/NodeCache.js';
export { NodeCache };
declare module '../../../lib/3/three' {
    interface Three {
        NodeCache: typeof NodeCache;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeCache: NodeCacheProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeCache: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeCache: string[];
    }
}
export type NodeCacheProps = Node<NodeCache, typeof NodeCache, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeCache: {};
    }
}
//# sourceMappingURL=NodeCache.d.ts.map