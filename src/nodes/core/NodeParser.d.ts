import { Node } from '../../../three-types';
import NodeParser from 'three/src/nodes/core/NodeParser.js';
export { NodeParser };
declare module '../../../lib/3/three' {
    interface Three {
        NodeParser: typeof NodeParser;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeParser: NodeParserProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeParser: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeParser: string[];
    }
}
export type NodeParserProps = Node<NodeParser, typeof NodeParser, {}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeParser: {};
    }
}
//# sourceMappingURL=NodeParser.d.ts.map