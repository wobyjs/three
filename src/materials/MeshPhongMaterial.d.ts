import { MaterialNode } from './MaterialNode';
import { MeshPhongMaterial, MeshPhongMaterialParameters } from 'three/src/materials/MeshPhongMaterial.js';
export { MeshPhongMaterial } from 'three/src/materials/MeshPhongMaterial.js';
import './Material';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        MeshPhongMaterial: typeof MeshPhongMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshPhongMaterial: MeshPhongMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        meshPhongMaterial: WrapAsString<MeshPhongMaterialParameters>;
        meshPhongMaterialParameters: WrapAsString<MeshPhongMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        meshPhongMaterial: string[];
        meshPhongMaterialParameters: string[];
    }
}
export type MeshPhongMaterialProps = MaterialNode<MeshPhongMaterial, MeshPhongMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        meshPhongMaterial: Partial<MeshPhongMaterialParameters>;
    }
}
//# sourceMappingURL=MeshPhongMaterial.d.ts.map