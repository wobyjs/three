import { Object3DNode } from '../../../three-types';
import UniformsNode from 'three/src/nodes/accessors/UniformsNode.js';
export { UniformsNode };
declare module '../../../lib/3/three' {
    interface Three {
        UniformsNode: typeof UniformsNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniformsNode: UniformsNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        uniformsNode: string[];
        uniformsElementNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        uniformsNode: string[];
        uniformsElementNode: string[];
    }
}
export type UniformsNodeProps = Object3DNode<UniformsNode, typeof UniformsNode, {
    value: unknown[];
    elementType?: string | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        uniformsNode: Partial<{
            value: unknown[];
            elementType?: string | null;
        }>;
    }
}
//# sourceMappingURL=UniformsNode.d.ts.map