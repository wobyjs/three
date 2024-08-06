import { Node } from '../../../three-types';
import UniformNode from 'three/src/nodes/core/UniformNode.js';
import NodeUniform from 'three/src/nodes/core/NodeUniform.js';
export { NodeUniform };
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeUniform: NodeUniformProps<any>;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeUniform: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeUniform: string[];
    }
}
export type NodeUniformProps<T> = Node<NodeUniform<T>, typeof NodeUniform<T>, {
    name: string;
    type: string | null;
    node: UniformNode<T>;
    needsUpdate?: undefined;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeUniform: Partial<{
            name: string;
            type: string | null;
            node: UniformNode<any>;
            needsUpdate?: undefined;
        }>;
    }
}
//# sourceMappingURL=NodeUniform.d.ts.map