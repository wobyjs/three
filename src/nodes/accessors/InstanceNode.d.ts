import { InstancedMesh } from 'three/src/objects/InstancedMesh.js';
import { Object3DNode } from '../../../three-types';
import InstanceNode from 'three/src/nodes/accessors/InstanceNode.js';
export { InstanceNode };
declare module '../../../lib/3/three' {
    interface Three {
        InstanceNode: typeof InstanceNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            instanceNode: InstanceNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        instanceNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        instanceNode: string[];
    }
}
export type InstanceNodeProps = Object3DNode<InstanceNode, typeof InstanceNode, {
    instanceMesh: InstancedMesh;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        instanceNode: {
            instanceMesh?: InstancedMesh;
        };
    }
}
//# sourceMappingURL=InstanceNode.d.ts.map