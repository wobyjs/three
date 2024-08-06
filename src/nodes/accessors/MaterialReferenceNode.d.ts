import { Material } from 'three/src/materials/Material.js';
import { Object3DNode } from '../../../three-types';
import MaterialReferenceNode from 'three/src/nodes/accessors/MaterialReferenceNode.js';
export { MaterialReferenceNode };
declare module '../../../lib/3/three' {
    interface Three {
        MaterialReferenceNode: typeof MaterialReferenceNode;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            materialReferenceNode: MaterialReferenceNodeProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        materialReferenceNode: string[];
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        materialReferenceNode: string[];
    }
}
export type MaterialReferenceNodeProps = Object3DNode<MaterialReferenceNode, typeof MaterialReferenceNode, {
    property: string;
    inputType: string;
    material?: Material | null;
}>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        materialReferenceNode: {
            property?: string;
            inputType?: string;
            material?: Material | null;
        };
    }
}
//# sourceMappingURL=MaterialReferenceNode.d.ts.map