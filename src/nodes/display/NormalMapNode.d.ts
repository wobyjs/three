import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import NormalMapNode from 'three/src/nodes/display/NormalMapNode.js';
export { NormalMapNode };
declare module '../../../lib/3/three' {
    interface Three {
        NormalMapNode: typeof NormalMapNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            normalMapNode: NormalMapNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        normalMapNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        normalMapNode: string[];
    }
}
export type NormalMapNodeProps = Node<NormalMapNode, typeof NormalMapNode, {
    node: ENode;
    scaleNode?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        normalMapNode: Partial<{
            node: ENode;
            scaleNode?: ENode | null;
        }>;
    }
}
//# sourceMappingURL=NormalMapNode.d.ts.map