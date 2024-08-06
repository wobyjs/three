import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { SwizzleOption } from 'three/src/nodes/Nodes.js';
import SplitNode from 'three/src/nodes/utils/SplitNode.js';
export { SplitNode };
import '../core/NodeAttribute';
declare module '../../../lib/3/three' {
    interface Three {
        SplitNode: typeof SplitNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            splitNode: SplitNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        splitNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        splitNode: string[];
    }
}
export type SplitNodeProps = Node<SplitNode, typeof SplitNode, {
    node: ENode;
    components?: SwizzleOption;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        splitNode: Partial<{
            node?: ENode;
            components?: SwizzleOption;
        }>;
    }
}
//# sourceMappingURL=SplitNode.d.ts.map