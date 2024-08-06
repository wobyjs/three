import { MaterialNode } from './MaterialNode';
import { MeshNormalMaterial, MeshNormalMaterialParameters } from 'three/src/materials/MeshNormalMaterial.js';
export { MeshNormalMaterial } from 'three/src/materials/MeshNormalMaterial.js';
import './Material';
import '../../lib/three/extensions';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        MeshNormalMaterial: typeof MeshNormalMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshNormalMaterial: MeshNormalMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        meshNormalMaterial: WrapAsString<MeshNormalMaterialParameters>;
        meshNormalMaterialParameters: WrapAsString<MeshNormalMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        meshNormalMaterial: string[];
        meshNormalMaterialParameters: string[];
    }
}
export type MeshNormalMaterialProps = MaterialNode<MeshNormalMaterial, MeshNormalMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        meshNormalMaterial: Partial<MeshNormalMaterialParameters>;
    }
}
//# sourceMappingURL=MeshNormalMaterial.d.ts.map