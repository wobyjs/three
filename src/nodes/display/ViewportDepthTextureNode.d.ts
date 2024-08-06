import { Node as ENode } from 'three/src/nodes/Nodes.js';
import { Node } from '../../../three-types';
import ViewportDepthTextureNode from 'three/src/nodes/display/ViewportDepthTextureNode.js';
export { ViewportDepthTextureNode };
declare module '../../../lib/3/three' {
    interface Three {
        ViewportDepthTextureNode: typeof ViewportDepthTextureNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewportDepthTextureNode: ViewportDepthTextureNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        viewportDepthTextureNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        viewportDepthTextureNode: string[];
    }
}
export type ViewportDepthTextureNodeProps = Node<ViewportDepthTextureNode, typeof ViewportDepthTextureNode, {
    uvNode?: ENode;
    levelNode?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportDepthTextureNode: {
            uvNode?: ENode;
            levelNode?: ENode | null;
        };
    }
}
//# sourceMappingURL=ViewportDepthTextureNode.d.ts.map