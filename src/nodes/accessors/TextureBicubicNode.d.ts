import { Object3DNode } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import TextureBicubicNode from 'three/src/nodes/accessors/TextureBicubicNode.js';
export { TextureBicubicNode };
declare module '../../../lib/3/three' {
    interface Three {
        TextureBicubicNode: typeof TextureBicubicNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textureBicubicNode: TextureBicubicNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        textureBicubicNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        textureBicubicNode: string[];
    }
}
export type TextureBicubicNodeProps = Object3DNode<TextureBicubicNode, typeof TextureBicubicNode, {
    textureNode: ENode;
    blurNode?: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        textureBicubicNode: Partial<{
            textureNode: ENode;
            blurNode?: ENode;
        }>;
    }
}
//# sourceMappingURL=TextureBicubicNode.d.ts.map