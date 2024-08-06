import { Node } from '../../../three-types';
import { Object3D } from 'three/src/core/Object3D.js';
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js';
export * from 'three/examples/jsm/helpers/VertexNormalsHelper.js';
declare module '../../../lib/3/three' {
    interface Three {
        VertexNormalsHelper: typeof VertexNormalsHelper;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vertexNormalsHelper: VertexNormalsHelperProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        vertexNormalsHelper: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        vertexNormalsHelper: string[];
    }
}
export type VertexNormalsHelperProps = Node<VertexNormalsHelper, typeof VertexNormalsHelper, {
    object: Object3D;
    size?: number;
    color?: number;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        vertexNormalsHelper: Partial<{
            object: Object3D;
            size?: number;
            color?: number;
        }>;
    }
}
//# sourceMappingURL=VertexNormalsHelper.d.ts.map