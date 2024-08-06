import { Node } from '../../../three-types';
import ViewportNode, { ViewportNodeScope } from 'three/src/nodes/display/ViewportNode.js';
export { ViewportNode };
declare module '../../../lib/3/three' {
    interface Three {
        ViewportNode: typeof ViewportNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewportNode: ViewportNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        viewportNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        viewportNode: string[];
    }
}
export type ViewportNodeProps = Node<ViewportNode, typeof ViewportNode, {
    scope: ViewportNodeScope;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportNode: Partial<{
            scope: ViewportNodeScope;
        }>;
    }
}
//# sourceMappingURL=ViewportNode.d.ts.map