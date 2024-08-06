import { MaterialNode } from './MaterialNode';
import { MeshBasicMaterial, MeshBasicMaterialParameters } from 'three/src/materials/MeshBasicMaterial.js';
export { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial.js';
import './Material';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        MeshBasicMaterial: typeof MeshBasicMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshBasicMaterial: MeshBasicMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        meshBasicMaterial: WrapAsString<MeshBasicMaterialParameters>;
        meshBasicMaterialParameters: WrapAsString<MeshBasicMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        meshBasicMaterial: string[];
        meshBasicMaterialParameters: string[];
    }
}
export type MeshBasicMaterialProps = MaterialNode<MeshBasicMaterial, MeshBasicMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        meshBasicMaterial: Partial<MeshBasicMaterialParameters>;
    }
}
//# sourceMappingURL=MeshBasicMaterial.d.ts.map