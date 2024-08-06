import { Node } from '../../../three-types';
import FrontFacingNode from 'three/src/nodes/display/FrontFacingNode.js';
export { FrontFacingNode };
declare module '../../../lib/3/three' {
    interface Three {
        FrontFacingNode: typeof FrontFacingNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            frontFacingNode: FrontFacingNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        frontFacingNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        frontFacingNode: string[];
    }
}
export type FrontFacingNodeProps = Node<FrontFacingNode, typeof FrontFacingNode, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        frontFacingNode: {};
    }
}
//# sourceMappingURL=FrontFacingNode.d.ts.map