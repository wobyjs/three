import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import DiscardNode from 'three/src/nodes/utils/DiscardNode.js';
export { DiscardNode };
import '../math/CondNode';
declare module '../../../lib/3/three' {
    interface Three {
        DiscardNode: typeof DiscardNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            discardNode: DiscardNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        discardNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        discardNode: string[];
    }
}
export type DiscardNodeProps = Node<DiscardNode, typeof DiscardNode, {
    condNode: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        discardNode: Partial<{
            condNode: ENode;
        }>;
    }
}
//# sourceMappingURL=DiscardNode.d.ts.map