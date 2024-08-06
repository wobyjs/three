import { Node } from '../../../three-types';
import ExpressionNode from 'three/src/nodes/code/ExpressionNode.js';
export { ExpressionNode };
declare module '../../../lib/3/three' {
    interface Three {
        ExpressionNode: typeof ExpressionNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            expressionNode: ExpressionNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        expressionNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        expressionNode: string[];
    }
}
export type ExpressionNodeProps = Node<ExpressionNode, typeof ExpressionNode, {
    snipped?: string;
    nodeType?: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        expressionNode: Partial<{
            snipped?: string;
            nodeType?: string;
        }>;
    }
}
//# sourceMappingURL=ExpressionNode.d.ts.map