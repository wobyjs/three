import { Node } from '../../../three-types';
import NodeFunctionInput from 'three/src/nodes/core/NodeFunctionInput.js';
export { NodeFunctionInput };
declare module '../../../lib/3/three' {
    interface Three {
        NodeFunctionInput: typeof NodeFunctionInput;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeFunctionInput: NodeFunctionInputProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeFunctionInput: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeFunctionInput: string[];
    }
}
export type NodeFunctionInputProps = Node<NodeFunctionInput, typeof NodeFunctionInput, {
    type: string;
    name: string;
    count?: number;
    qualifier?: string;
    isConst?: boolean;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeFunctionInput: Partial<{
            type: string;
            name: string;
            count?: number;
            qualifier?: string;
            isConst?: boolean;
        }>;
    }
}
//# sourceMappingURL=NodeFunctionInput.d.ts.map