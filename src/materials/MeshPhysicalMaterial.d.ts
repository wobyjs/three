import { MaterialNode } from './MaterialNode';
import { MeshPhysicalMaterial, MeshPhysicalMaterialParameters } from 'three/src/materials/MeshPhysicalMaterial.js';
export { MeshPhysicalMaterial } from 'three/src/materials/MeshPhysicalMaterial.js';
import './MeshStandardMaterial';
import './Material';
import './MeshStandardMaterial';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        MeshPhysicalMaterial: typeof MeshPhysicalMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshPhysicalMaterial: MeshPhysicalMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        meshPhysicalMaterial: WrapAsString<MeshPhysicalMaterialParameters>;
        meshPhysicalMaterialParameters: WrapAsString<MeshPhysicalMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        meshPhysicalMaterial: string[];
        meshPhysicalMaterialParameters: string[];
    }
}
export type MeshPhysicalMaterialProps = MaterialNode<MeshPhysicalMaterial, MeshPhysicalMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        meshPhysicalMaterial: Partial<MeshPhysicalMaterialParameters>;
    }
}
//# sourceMappingURL=MeshPhysicalMaterial.d.ts.map