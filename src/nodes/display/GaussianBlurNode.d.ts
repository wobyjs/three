import { Node } from '../../../three-types';
import TextureNode from 'three/src/nodes/accessors/TextureNode.js';
import GaussianBlurNode from 'three/src/nodes/display/GaussianBlurNode.js';
export { GaussianBlurNode };
declare module '../../../lib/3/three' {
    interface Three {
        GaussianBlurNode: typeof GaussianBlurNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gaussianBlurNode: GaussianBlurNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        gaussianBlurNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        gaussianBlurNode: string[];
    }
}
export type GaussianBlurNodeProps = Node<GaussianBlurNode, typeof GaussianBlurNode, {
    textureNode: TextureNode;
    sigma?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        gaussianBlurNode: Partial<{
            textureNode: TextureNode;
            sigma?: number;
        }>;
    }
}
//# sourceMappingURL=GaussianBlurNode.d.ts.map