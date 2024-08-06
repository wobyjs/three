import { Node } from '../../../three-types';
import NodeKeywords from 'three/src/nodes/core/NodeKeywords.js';
export { NodeKeywords };
declare module '../../../lib/3/three' {
    interface Three {
        NodeKeywords: typeof NodeKeywords;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeKeywords: NodeKeywordsProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeKeywords: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeKeywords: string[];
    }
}
export type NodeKeywordsProps = Node<NodeKeywords, typeof NodeKeywords, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeKeywords: {};
    }
}
//# sourceMappingURL=NodeKeywords.d.ts.map