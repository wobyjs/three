import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import AttributeNode from 'three/src/nodes/core/AttributeNode.js';
export { AttributeNode };
declare module '../../../lib/3/three' {
    interface Three {
        AttributeNode: typeof AttributeNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            attributeNode: AttributeNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        attributeNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        attributeNode: string[];
    }
}
export type AttributeNodeProps = Node<AttributeNode, typeof AttributeNode, {
    attributeName: string;
    nodeType?: string | null;
    defaultNode?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        attributeNode: Partial<{
            attributeName: string;
            nodeType?: string | null;
            defaultNode?: ENode | null;
        }>;
    }
}
//# sourceMappingURL=AttributeNode.d.ts.map