import { Object3DNode } from '../../../three-types';
import ClippingNode, { ClippingNodeScope } from 'three/src/nodes/accessors/ClippingNode.js';
export { ClippingNode };
declare module '../../../lib/3/three' {
    interface Three {
        ClippingNode: typeof ClippingNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            clippingNode: ClippingNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        clippingNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        clippingNode: string[];
    }
}
export type ClippingNodeProps = Object3DNode<ClippingNode, typeof ClippingNode, {
    scope?: ClippingNodeScope;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        clippingNode: {
            scope?: ClippingNodeScope;
        };
    }
}
//# sourceMappingURL=ClippingNode.d.ts.map