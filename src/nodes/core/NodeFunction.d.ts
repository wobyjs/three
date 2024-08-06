import { Node } from '../../../three-types';
import NodeFunctionInput from 'three/src/nodes/core/NodeFunctionInput.js';
import NodeFunction from 'three/src/nodes/core/NodeFunction.js';
export { NodeFunction };
declare module '../../../lib/3/three' {
    interface Three {
        NodeFunction: typeof NodeFunction;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeFunction: NodeFunctionProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeFunction: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeFunction: string[];
    }
}
export type NodeFunctionProps = Node<NodeFunction, typeof NodeFunction, {
    type: string;
    inputs: NodeFunctionInput[];
    name?: string;
    presicion?: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeFunction: Partial<{
            type: string;
            inputs: NodeFunctionInput[];
            name?: string;
            presicion?: string;
        }>;
    }
}
//# sourceMappingURL=NodeFunction.d.ts.map