import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import ColorSpaceNode, { ColorSpaceNodeMethod } from 'three/src/nodes/display/ColorSpaceNode.js';
export { ColorSpaceNode };
declare module '../../../lib/3/three' {
    interface Three {
        ColorSpaceNode: typeof ColorSpaceNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            colorSpaceNode: ColorSpaceNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        colorSpaceNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        colorSpaceNode: string[];
    }
}
export type ColorSpaceNodeProps = Node<ColorSpaceNode, typeof ColorSpaceNode, {
    method: ColorSpaceNodeMethod | null;
    node: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        colorSpaceNode: Partial<{
            method: ColorSpaceNodeMethod | null;
            node: ENode;
        }>;
    }
}
//# sourceMappingURL=ColorSpaceNode.d.ts.map