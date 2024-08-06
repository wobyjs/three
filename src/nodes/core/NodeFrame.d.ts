import { Node } from '../../../three-types';
import NodeFrame from 'three/src/nodes/core/NodeFrame.js';
export { NodeFrame };
declare module '../../../lib/3/three' {
    interface Three {
        NodeFrame: typeof NodeFrame;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeFrame: NodeFrameProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeFrame: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeFrame: string[];
    }
}
export type NodeFrameProps = Node<NodeFrame, typeof NodeFrame, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeFrame: {};
    }
}
//# sourceMappingURL=NodeFrame.d.ts.map