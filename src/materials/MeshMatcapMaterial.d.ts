import { MaterialNode } from './MaterialNode';
import { MeshMatcapMaterial, MeshMatcapMaterialParameters } from 'three/src/materials/MeshMatcapMaterial.js';
export { MeshMatcapMaterial } from 'three/src/materials/MeshMatcapMaterial.js';
import './Material';
import '../../lib/three/extensions';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        MeshMatcapMaterial: typeof MeshMatcapMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshMatcapMaterial: MeshMatcapMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        meshMatcapMaterial: WrapAsString<MeshMatcapMaterialParameters>;
        meshMatcapMaterialParameters: WrapAsString<MeshMatcapMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        meshMatcapMaterial: string[];
        meshMatcapMaterialParameters: string[];
    }
}
export type MeshMatcapMaterialProps = MaterialNode<MeshMatcapMaterial, MeshMatcapMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        meshMatcapMaterial: Partial<MeshMatcapMaterialParameters>;
    }
}
//# sourceMappingURL=MeshMatcapMaterial.d.ts.map