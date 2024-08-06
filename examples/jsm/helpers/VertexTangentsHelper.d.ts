import { Node } from '../../../three-types';
import { Object3D } from 'three/src/core/Object3D.js';
import { VertexTangentsHelper } from 'three/examples/jsm/helpers/VertexTangentsHelper.js';
export * from 'three/examples/jsm/helpers/VertexTangentsHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        VertexTangentsHelper: typeof VertexTangentsHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vertexTangentsHelper: VertexTangentsHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        vertexTangentsHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        vertexTangentsHelper: string[];
    }
}
export type VertexTangentsHelperProps = Node<VertexTangentsHelper, typeof VertexTangentsHelper, {
    object: Object3D;
    size?: number;
    color?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        vertexTangentsHelper: Partial<{
            object: Object3D;
            size?: number;
            color?: number;
        }>;
    }
}
//# sourceMappingURL=VertexTangentsHelper.d.ts.map