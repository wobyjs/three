import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import OscNode, { OscNodeMethod } from 'three/src/nodes/utils/OscNode.js';
export { OscNode };
import '../core/NodeAttribute';
declare module '../../../lib/3/three' {
    interface Three {
        OscNode: typeof OscNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            oscNode: OscNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        oscNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        oscNode: string[];
    }
}
export type OscNodeProps = Node<OscNode, typeof OscNode, {
    method: OscNodeMethod;
    timeNode?: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        oscNode: Partial<{
            method?: OscNodeMethod;
            timeNode?: ENode;
        }>;
    }
}
//# sourceMappingURL=OscNode.d.ts.map