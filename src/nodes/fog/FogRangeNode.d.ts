import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import FogRangeNode from 'three/src/nodes/fog/FogRangeNode.js';
export { FogRangeNode };
declare module '../../../lib/3/three' {
    interface Three {
        FogRangeNode: typeof FogRangeNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogRangeNode: FogRangeNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        fogRangeNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        fogRangeNode: string[];
    }
}
export type FogRangeNodeProps = Node<FogRangeNode, typeof FogRangeNode, {
    colorNode: ENode | null;
    nearNode: ENode | null;
    farNode: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        fogRangeNode: Partial<{
            colorNode: ENode | null;
            nearNode: ENode | null;
            farNode: ENode | null;
        }>;
    }
}
//# sourceMappingURL=FogRangeNode.d.ts.map