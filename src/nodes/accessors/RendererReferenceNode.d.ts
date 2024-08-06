import { Object3DNode } from '../../../three-types';
import Renderer from 'three/src/renderers/common/Renderer.js';
import RendererReferenceNode from 'three/src/nodes/accessors/RendererReferenceNode.js';
export { RendererReferenceNode };
declare module '../../../lib/3/three' {
    interface Three {
        RendererReferenceNode: typeof RendererReferenceNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rendererReferenceNode: RendererReferenceNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        rendererReferenceNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        rendererReferenceNode: string[];
    }
}
export type RendererReferenceNodeProps = Object3DNode<RendererReferenceNode, typeof RendererReferenceNode, {
    property: string;
    inputType: string;
    renderer?: Renderer | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        rendererReferenceNode: {
            property?: string;
            inputType?: string;
            renderer?: Renderer | null;
        };
    }
}
//# sourceMappingURL=RendererReferenceNode.d.ts.map