import { Object3DNode } from '../../../three-types';
import VertexColorNode from 'three/src/nodes/accessors/VertexColorNode.js';
export { VertexColorNode };
declare module '../../../lib/3/three' {
    interface Three {
        VertexColorNode: typeof VertexColorNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vertexColorNode: VertexColorNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        vertexColorNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        vertexColorNode: string[];
    }
}
export type VertexColorNodeProps = Object3DNode<VertexColorNode, typeof VertexColorNode, {
    index?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        vertexColorNode: {
            index?: number;
        };
    }
}
//# sourceMappingURL=VertexColorNode.d.ts.map