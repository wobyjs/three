import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import ColorAdjustmentNode, { ColorAdjustmentMethod } from 'three/src/nodes/display/ColorAdjustmentNode.js';
export { ColorAdjustmentNode };
declare module '../../../lib/3/three' {
    interface Three {
        ColorAdjustmentNode: typeof ColorAdjustmentNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            colorAdjustmentNode: ColorAdjustmentNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        colorAdjustmentNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        colorAdjustmentNode: string[];
    }
}
export type ColorAdjustmentNodeProps = Node<ColorAdjustmentNode, typeof ColorAdjustmentNode, {
    method: ColorAdjustmentMethod;
    colorNode: ENode;
    adjustmentNode?: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        colorAdjustmentNode: Partial<{
            method: ColorAdjustmentMethod;
            colorNode: ENode;
            adjustmentNode?: ENode;
        }>;
    }
}
//# sourceMappingURL=ColorAdjustmentNode.d.ts.map