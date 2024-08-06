import { MaterialNode } from './MaterialNode';
import { MeshStandardMaterial, MeshStandardMaterialParameters } from 'three/src/materials/MeshStandardMaterial.js';
export { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial.js';
import './Material';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        MeshStandardMaterial: typeof MeshStandardMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshStandardMaterial: MeshStandardMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        meshStandardMaterial: WrapAsString<MeshStandardMaterialParameters>;
        meshStandardMaterialParameters: WrapAsString<MeshStandardMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        meshStandardMaterial: string[];
        meshStandardMaterialParameters: string[];
    }
}
export type MeshStandardMaterialProps = MaterialNode<MeshStandardMaterial, MeshStandardMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        meshStandardMaterial: Partial<MeshStandardMaterialParameters>;
    }
}
//# sourceMappingURL=MeshStandardMaterial.d.ts.map