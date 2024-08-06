import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import BlendModeNode, { BlendMode } from 'three/src/nodes/display/BlendModeNode.js';
export { BlendModeNode };
declare module '../../../lib/3/three' {
    interface Three {
        BlendModeNode: typeof BlendModeNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            blendModeNode: BlendModeNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        blendModeNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        blendModeNode: string[];
    }
}
export type BlendModeNodeProps = Node<BlendModeNode, typeof BlendModeNode, {
    blendMode: BlendMode;
    baseNode: ENode;
    blendNode: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        blendModeNode: Partial<{
            blendMode: BlendMode;
            baseNode: ENode;
            blendNode: ENode;
        }>;
    }
}
//# sourceMappingURL=BlendModeNode.d.ts.map