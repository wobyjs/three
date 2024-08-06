import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import OperatorNode, { OperatorNodeOp } from 'three/src/nodes/math/OperatorNode.js';
export { OperatorNode };
declare module '../../../lib/3/three' {
    interface Three {
        OperatorNode: typeof OperatorNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            operatorNode: OperatorNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        operatorNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        operatorNode: string[];
    }
}
export type OperatorNodeProps = Node<OperatorNode, typeof OperatorNode, {
    op: OperatorNodeOp;
    params: [ENode, ENode, ...ENode[]];
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        operatorNode: Partial<{
            op: OperatorNodeOp;
            params: [ENode, ENode, ...ENode[]];
        }>;
    }
}
//# sourceMappingURL=OperatorNode.d.ts.map