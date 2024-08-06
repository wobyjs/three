import { Node } from '../../../three-types';
import RangeNode, { RangeModeBound } from 'three/src/nodes/geometry/RangeNode.js';
export { RangeNode };
declare module '../../../lib/3/three' {
    interface Three {
        RangeNode: typeof RangeNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rangeNode: RangeNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        rangeNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        rangeNode: string[];
    }
}
export type RangeNodeProps = Node<RangeNode, typeof RangeNode, {
    min: RangeModeBound;
    max: RangeModeBound;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        rangeNode: Partial<{
            min: RangeModeBound;
            max: RangeModeBound;
        }>;
    }
}
//# sourceMappingURL=RangeNode.d.ts.map