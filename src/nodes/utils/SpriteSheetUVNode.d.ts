import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import SpriteSheetUVNode from 'three/src/nodes/utils/SpriteSheetUVNode.js';
export { SpriteSheetUVNode };
import '../core/NodeAttribute';
declare module '../../../lib/3/three' {
    interface Three {
        SpriteSheetUVNode: typeof SpriteSheetUVNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spriteSheetUvNode: SpriteSheetUVNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        spriteSheetUvNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        spriteSheetUvNode: string[];
    }
}
export type SpriteSheetUVNodeProps = Node<SpriteSheetUVNode, typeof SpriteSheetUVNode, {
    countNode: ENode;
    uvNode?: ENode;
    frameNode?: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        spriteSheetUvNode: Partial<{
            countNode: ENode;
            uvNode?: ENode;
            frameNode?: ENode;
        }>;
    }
}
//# sourceMappingURL=SpriteSheetUVNode.d.ts.map