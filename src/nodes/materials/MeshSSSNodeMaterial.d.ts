import { MaterialNode } from '../../materials/MaterialNode';
import MeshSSSNodeMaterial from 'three/src/nodes/materials/MeshSSSNodeMaterial.js';
export * from 'three/src/nodes/materials/MeshSSSNodeMaterial.js';
import './NodeMaterial';
import './MeshPhysicalNodeMaterial';
import { WrapAsString } from '../../../three-types';
import { MeshPhysicalMaterialParameters } from 'three/src/materials/MeshPhysicalMaterial';
declare module '../../../lib/3/three' {
    interface Three {
        MeshSSSNodeMaterial: typeof MeshSSSNodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshSssNodeMaterial: MeshSSSNodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        meshSssNodeMaterial: WrapAsString<MeshPhysicalMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        meshSssNodeMaterial: string[];
    }
}
export type MeshSSSNodeMaterialProps = MaterialNode<MeshSSSNodeMaterial, typeof MeshSSSNodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        meshSssNodeMaterial: Partial<MeshSSSNodeMaterial>;
    }
}
//# sourceMappingURL=MeshSSSNodeMaterial.d.ts.map