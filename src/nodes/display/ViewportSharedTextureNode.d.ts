import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import ViewportSharedTextureNode from 'three/src/nodes/display/ViewportSharedTextureNode.js';
export { ViewportSharedTextureNode };
declare module '../../../lib/3/three' {
    interface Three {
        ViewportSharedTextureNode: typeof ViewportSharedTextureNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewportSharedTextureNode: ViewportSharedTextureNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        viewportSharedTextureNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        viewportSharedTextureNode: string[];
    }
}
export type ViewportSharedTextureNodeProps = Node<ViewportSharedTextureNode, typeof ViewportSharedTextureNode, {
    uvNode?: ENode;
    levelNode?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportSharedTextureNode: Partial<{
            uvNode?: ENode;
            levelNode?: ENode | null;
        }>;
    }
}
//# sourceMappingURL=ViewportSharedTextureNode.d.ts.map