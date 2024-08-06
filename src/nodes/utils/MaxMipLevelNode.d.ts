import { Node } from '../../../three-types';
import TextureNode from 'three/src/nodes/accessors/TextureNode.js';
import MaxMipLevelNode from 'three/src/nodes/utils/MaxMipLevelNode.js';
export { MaxMipLevelNode };
import '../core/UniformNode';
declare module '../../../lib/3/three' {
    interface Three {
        MaxMipLevelNode: typeof MaxMipLevelNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            maxMipLevelNode: MaxMipLevelNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        maxMipLevelNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        maxMipLevelNode: string[];
    }
}
export type MaxMipLevelNodeProps = Node<MaxMipLevelNode, typeof MaxMipLevelNode, {
    textureNode: TextureNode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        maxMipLevelNode: Partial<{
            textureNode?: TextureNode;
        }>;
    }
}
//# sourceMappingURL=MaxMipLevelNode.d.ts.map