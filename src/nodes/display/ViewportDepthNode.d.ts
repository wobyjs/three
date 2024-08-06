import { Node } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import ViewportDepthNode, { ViewportDepthNodeScope } from 'three/src/nodes/display/ViewportDepthNode.js';
export { ViewportDepthNode };
declare module '../../../lib/3/three' {
    interface Three {
        ViewportDepthNode: typeof ViewportDepthNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewportDepthNode: ViewportDepthNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        viewportDepthNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        viewportDepthNode: string[];
    }
}
export type ViewportDepthNodeProps = Node<ViewportDepthNode, typeof ViewportDepthNode, {
    scope: ViewportDepthNodeScope;
    valueNode?: ENode | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportDepthNode: Partial<{
            scope: ViewportDepthNodeScope;
            valueNode?: ENode | null;
        }>;
    }
}
//# sourceMappingURL=ViewportDepthNode.d.ts.map