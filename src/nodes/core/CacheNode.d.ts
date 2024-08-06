import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import NodeCache from 'three/src/nodes/core/NodeCache.js';
import CacheNode from 'three/src/nodes/core/CacheNode.js';
export { CacheNode };
declare module '../../../lib/3/three' {
    interface Three {
        CacheNode: typeof CacheNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cacheNode: CacheNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        cacheNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        cacheNode: string[];
    }
}
export type CacheNodeProps = Node<CacheNode, typeof CacheNode, {
    node: ENode;
    cache?: NodeCache;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        cacheNode: Partial<{
            node: ENode;
            cache?: NodeCache;
        }>;
    }
}
//# sourceMappingURL=CacheNode.d.ts.map