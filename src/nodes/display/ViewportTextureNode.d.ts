import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import ViewportTextureNode from 'three/src/nodes/display/ViewportTextureNode.js';
import { FramebufferTexture } from 'three/src/textures/FramebufferTexture.js';
export * from 'three/src/textures/FramebufferTexture.js';
declare module '../../../lib/3/three' {
    interface Three {
        ViewportTextureNode: typeof ViewportTextureNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewportTextureNode: ViewportTextureNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        viewportTextureNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        viewportTextureNode: string[];
    }
}
export type ViewportTextureNodeProps = Node<ViewportTextureNode, typeof ViewportTextureNode, {
    uvNode?: ENode;
    levelNode?: ENode | null;
    framebufferTexture?: FramebufferTexture | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportTextureNode: Partial<{
            uvNode?: ENode;
            levelNode?: ENode | null;
            framebufferTexture?: FramebufferTexture | null;
        }>;
    }
}
//# sourceMappingURL=ViewportTextureNode.d.ts.map