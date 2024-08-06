import { Node as ENode, FogNode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
export * from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        FogNode: typeof FogNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogNode: FogNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        fogNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        fogNode: string[];
    }
}
export type FogNodeProps = Node<FogNode, typeof FogNode, {
    colorNode: ENode | null;
    factorNode: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        fogNode: Partial<{
            colorNode: ENode | null;
            factorNode: ENode | null;
        }>;
    }
}
//# sourceMappingURL=FogNode.d.ts.map