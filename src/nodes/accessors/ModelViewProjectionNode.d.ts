import { Object3DNode } from '../../../three-types';
import { Node as ENode } from 'three/src/nodes/Nodes.js';
import ModelViewProjectionNode from 'three/src/nodes/accessors/ModelViewProjectionNode.js';
export { ModelViewProjectionNode };
declare module '../../../lib/3/three' {
    interface Three {
        ModelViewProjectionNode: typeof ModelViewProjectionNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            modelViewProjectionNode: ModelViewProjectionNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        modelViewProjectionNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        modelViewProjectionNode: string[];
    }
}
export type ModelViewProjectionNodeProps = Object3DNode<ModelViewProjectionNode, typeof ModelViewProjectionNode, {
    positionNode?: ENode;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        modelViewProjectionNode: {
            positionNode?: ENode;
        };
    }
}
//# sourceMappingURL=ModelViewProjectionNode.d.ts.map