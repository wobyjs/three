import { Object3DNode } from '../../../three-types';
import ModelNode from 'three/src/nodes/accessors/ModelNode.js';
export { ModelNode };
declare module '../../../lib/3/three' {
    interface Three {
        ModelNode: typeof ModelNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            modelNode: ModelNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        modelNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        modelNode: string[];
    }
}
export type ModelNodeProps = Object3DNode<ModelNode, typeof ModelNode, {
    scope?: string;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        modelNode: {
            scope?: string;
        };
    }
}
//# sourceMappingURL=ModelNode.d.ts.map