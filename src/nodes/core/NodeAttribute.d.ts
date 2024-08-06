import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import NodeAttribute from 'three/src/nodes/core/NodeAttribute.js';
export { NodeAttribute };
declare module '../../../lib/3/three' {
    interface Three {
        NodeAttribute: typeof NodeAttribute;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeAttribute: NodeAttributeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeAttribute: string[];
        node: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeAttribute: string[];
        node: string[];
    }
}
export type NodeAttributeProps = Node<NodeAttribute, typeof NodeAttribute, {
    name: string;
    type: string | null;
    node?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeAttribute: Partial<{
            name: string;
            type: string | null;
            node?: ENode | null;
        }>;
    }
}
//# sourceMappingURL=NodeAttribute.d.ts.map