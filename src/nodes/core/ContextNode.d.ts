import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import NodeBuilderContext from 'three/src/nodes/core/NodeBuilder.js';
import ContextNode from 'three/src/nodes/core/ContextNode.js';
export { ContextNode };
declare module '../../../lib/3/three' {
    interface Three {
        ContextNode: typeof ContextNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            contextNode: ContextNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        contextNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        contextNode: string[];
    }
}
export type ContextNodeProps = Node<ContextNode, typeof ContextNode, {
    node: ENode;
    context: NodeBuilderContext;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        contextNode: Partial<{
            node: ENode;
            context: NodeBuilderContext;
        }>;
    }
}
//# sourceMappingURL=ContextNode.d.ts.map