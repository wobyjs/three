import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import ToneMappingNode from 'three/src/nodes/display/ToneMappingNode.js';
import { ToneMapping } from 'three/src/constants.js';
export * from 'three/src/constants.js';
declare module '../../../lib/3/three' {
    interface Three {
        ToneMappingNode: typeof ToneMappingNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            toneMappingNode: ToneMappingNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        toneMappingNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        toneMappingNode: string[];
    }
}
export type ToneMappingNodeProps = Node<ToneMappingNode, typeof ToneMappingNode, {
    toneMapping: ToneMapping;
    exposureNode?: ENode;
    colorNode?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        toneMappingNode: Partial<{
            toneMapping: ToneMapping;
            exposureNode?: ENode;
            colorNode?: ENode | null;
        }>;
    }
}
//# sourceMappingURL=ToneMappingNode.d.ts.map