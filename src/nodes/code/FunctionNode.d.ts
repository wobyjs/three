import { Node } from '../../../three-types';
import { CodeNodeInclude } from 'three/src/nodes/code/CodeNode.js';
import Node_ from 'three/src/nodes/core/Node.js';
import FunctionNode from 'three/src/nodes/code/FunctionNode.js';
export { FunctionNode };
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            functionNode: FunctionNodeProps<Node_[] | {
                [name: string]: Node_;
            }>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        functionNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        functionNode: string[];
    }
}
export type FunctionNodeProps<T extends Node_[] | {
    [name: string]: Node_;
}> = Node<FunctionNode<T>, typeof FunctionNode<T>, {
    code?: string;
    includes?: CodeNodeInclude[];
    language?: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        functionNode: Partial<{
            code?: string;
            includes?: CodeNodeInclude[];
            language?: string;
        }>;
    }
}
//# sourceMappingURL=FunctionNode.d.ts.map