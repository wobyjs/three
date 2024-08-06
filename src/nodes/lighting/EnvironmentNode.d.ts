import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import EnvironmentNode from 'three/src/nodes/lighting/EnvironmentNode.js';
export { EnvironmentNode };
declare module '../../../lib/3/three' {
    interface Three {
        EnvironmentNode: typeof EnvironmentNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            environmentNode: EnvironmentNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        environmentNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        environmentNode: string[];
    }
}
export type EnvironmentNodeProps = Node<EnvironmentNode, typeof EnvironmentNode, {
    envNode?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        environmentNode: {
            envNode?: ENode | null;
        };
    }
}
//# sourceMappingURL=EnvironmentNode.d.ts.map