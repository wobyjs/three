import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import AfterImageNode from 'three/src/nodes/display/AfterImageNode.js';
export { AfterImageNode };
declare module '../../../lib/3/three' {
    interface Three {
        AfterImageNode: typeof AfterImageNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            afterImageNode: AfterImageNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        afterImageNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        afterImageNode: string[];
    }
}
export type AfterImageNodeProps = Node<AfterImageNode, typeof AfterImageNode, {
    textureNode: ENode;
    damp?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        afterImageNode: Partial<{
            textureNode: ENode;
            damp?: number;
        }>;
    }
}
//# sourceMappingURL=AfterImageNode.d.ts.map