import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import ConvertNode from 'three/src/nodes/utils/ConvertNode.js';
export { ConvertNode };
import '../core/NodeAttribute';
declare module '../../../lib/3/three' {
    interface Three {
        ConvertNode: typeof ConvertNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            convertNode: ConvertNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        convertNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        convertNode: string[];
    }
}
export type ConvertNodeProps = Node<ConvertNode, typeof ConvertNode, {
    node: ENode;
    convertTo: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        convertNode: Partial<{
            node: ENode;
            convertTo: string;
        }>;
    }
}
//# sourceMappingURL=ConvertNode.d.ts.map