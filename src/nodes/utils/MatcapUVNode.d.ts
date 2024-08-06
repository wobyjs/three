import { Node } from '../../../three-types';
import MatcapUVNode from 'three/src/nodes/utils/MatcapUVNode.js';
export { MatcapUVNode };
import '../core/TempNode';
declare module '../../../lib/3/three' {
    interface Three {
        MatcapUVNode: typeof MatcapUVNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            matcapUvNode: MatcapUVNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        matcapUvNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        matcapUvNode: string[];
    }
}
export type MatcapUVNodeProps = Node<MatcapUVNode, typeof MatcapUVNode, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        matcapUvNode: Partial<{}>;
    }
}
//# sourceMappingURL=MatcapUVNode.d.ts.map