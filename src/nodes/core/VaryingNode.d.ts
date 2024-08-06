import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import VaryingNode from 'three/src/nodes/core/VaryingNode.js';
export { VaryingNode };
declare module '../../../lib/3/three' {
    interface Three {
        VaryingNode: typeof VaryingNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            varyingNode: VaryingNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        varyingNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        varyingNode: string[];
    }
}
export type VaryingNodeProps = Node<VaryingNode, typeof VaryingNode, {
    node: ENode;
    name?: string | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        varyingNode: Partial<{
            node: ENode;
            name?: string | null;
        }>;
    }
}
//# sourceMappingURL=VaryingNode.d.ts.map