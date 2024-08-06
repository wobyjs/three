import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import AnamorphicNode from 'three/src/nodes/display/AnamorphicNode.js';
export { AnamorphicNode };
declare module '../../../lib/3/three' {
    interface Three {
        AnamorphicNode: typeof AnamorphicNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            anamorphicNode: AnamorphicNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        anamorphicNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        anamorphicNode: string[];
    }
}
export type AnamorphicNodeProps = Node<AnamorphicNode, typeof AnamorphicNode, {
    textureNode: ENode;
    thresholdNode: ENode;
    scaleNode: ENode;
    samples: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        anamorphicNode: Partial<{
            textureNode: ENode;
            thresholdNode: ENode;
            scaleNode: ENode;
            samples: number;
        }>;
    }
}
//# sourceMappingURL=AnamorphicNode.d.ts.map