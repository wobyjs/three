import { Node } from '../../../three-types';
import TempNode from 'three/src/nodes/core/TempNode.js';
export { TempNode };
declare module '../../../lib/3/three' {
    interface Three {
        TempNode: typeof TempNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tempNode: TempNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        tempNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        tempNode: string[];
    }
}
export type TempNodeProps = Node<TempNode, typeof TempNode, {
    type: string | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        tempNode: Partial<{
            type: string | null;
        }>;
    }
}
//# sourceMappingURL=TempNode.d.ts.map