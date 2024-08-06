import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import PMREMNode from 'three/src/nodes/pmrem/PMREMNode.js';
import { Texture } from 'three/src/textures/Texture.js';
export * from 'three/src/textures/Texture.js';
declare module '../../../lib/3/three' {
    interface Three {
        PMREMNode: typeof PMREMNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pmremNode: PMREMNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        pmremNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        pmremNode: string[];
    }
}
export type PMREMNodeProps = Node<PMREMNode, typeof PMREMNode, {
    value: Texture;
    uvNode?: ENode | null;
    levelNode?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        pMREMNode: Partial<{
            value: Texture;
            uvNode?: ENode | null;
            levelNode?: ENode | null;
        }>;
    }
}
//# sourceMappingURL=PMREMNode.d.ts.map