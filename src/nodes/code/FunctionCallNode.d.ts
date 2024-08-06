import { Node } from '../../../three-types';
import Node_ from 'three/src/nodes/core/Node.js';
import FunctionNode from 'three/src/nodes/code/FunctionNode.js';
import FunctionCallNode from 'three/src/nodes/code/FunctionCallNode.js';
export { FunctionCallNode };
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            functionCallNode: FunctionCallNodeProps<Node_[] | {
                [name: string]: Node_;
            }>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        functionCallNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        functionCallNode: string[];
    }
}
export type FunctionCallNodeProps<T extends Node_[] | {
    [name: string]: Node_;
}> = Node<FunctionCallNode<T>, typeof FunctionCallNode<T>, {
    functionNode?: FunctionNode<T>;
    parameters?: T;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        functionCallNode: Partial<{
            functionNode?: FunctionNode<any>;
            parameters?: any;
        }>;
    }
}
//# sourceMappingURL=FunctionCallNode.d.ts.map