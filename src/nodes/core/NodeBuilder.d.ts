import { Node } from '../../../three-types';
import NodeBuilder from 'three/src/nodes/core/NodeBuilder.js';
export { NodeBuilder };
declare module '../../../lib/3/three' {
    interface Three {
        NodeBuilder: typeof NodeBuilder;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeBuilder: NodeBuilderProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeBuilder: string[];
        flowData: string[];
        nodeData: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeBuilder: string[];
        flowData: string[];
        nodeData: string[];
    }
}
export type NodeBuilderProps = Node<NodeBuilder, typeof NodeBuilder, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeBuilder: {};
    }
}
//# sourceMappingURL=NodeBuilder.d.ts.map