import { MaterialNode } from '../../materials/MaterialNode';
import MeshPhysicalNodeMaterial from 'three/src/nodes/materials/MeshPhysicalNodeMaterial.js';
export { MeshPhysicalNodeMaterial };
import './NodeMaterial';
import '../../materials/MeshPhysicalMaterial';
import '../../materials/MeshStandardMaterial';
import { WrapAsString } from '../../../three-types';
import { MeshPhysicalMaterialParameters } from 'three/src/materials/MeshPhysicalMaterial';
declare module '../../../lib/3/three' {
    interface Three {
        MeshPhysicalNodeMaterial: typeof MeshPhysicalNodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshPhysicalNodeMaterial: MeshPhysicalNodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        meshPhysicalNodeMaterial: WrapAsString<MeshPhysicalMaterialParameters>;
        meshPhysicalNodeMaterialParameters: WrapAsString<MeshPhysicalMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        meshPhysicalNodeMaterial: string[];
        meshPhysicalNodeMaterialParameters: string[];
    }
}
export type MeshPhysicalNodeMaterialProps = MaterialNode<MeshPhysicalNodeMaterial, typeof MeshPhysicalNodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        meshPhysicalNodeMaterial: Partial<MeshPhysicalNodeMaterial>;
    }
}
//# sourceMappingURL=MeshPhysicalNodeMaterial.d.ts.map