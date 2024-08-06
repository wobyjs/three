import { Node as ENode } from 'three/src/nodes/Nodes.js';
import LightingModel from 'three/src/nodes/core/LightingModel.js';
import { Node } from '../../../three-types';
import LightingContextNode from 'three/src/nodes/lighting/LightingContextNode.js';
export { LightingContextNode };
declare module '../../../lib/3/three' {
    interface Three {
        LightingContextNode: typeof LightingContextNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightingContextNode: LightingContextNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lightingContextNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lightingContextNode: string[];
    }
}
export type LightingContextNodeProps = Node<LightingContextNode, typeof LightingContextNode, {
    node: ENode;
    lightingModel?: LightingModel | null;
    backdropNode?: ENode | null;
    backdropAlphaNode?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lightingContextNode: Partial<{
            node: ENode;
            lightingModel?: LightingModel | null;
            backdropNode?: ENode | null;
            backdropAlphaNode?: ENode | null;
        }>;
    }
}
//# sourceMappingURL=LightingContextNode.d.ts.map