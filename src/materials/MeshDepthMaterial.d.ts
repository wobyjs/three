import { MaterialNode } from './MaterialNode';
import { MeshDepthMaterial, MeshDepthMaterialParameters } from 'three/src/materials/MeshDepthMaterial.js';
export { MeshDepthMaterial } from 'three/src/materials/MeshDepthMaterial.js';
import './Material';
import '../../lib/three/extensions';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        MeshDepthMaterial: typeof MeshDepthMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshDepthMaterial: MeshDepthMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        meshDepthMaterial: WrapAsString<MeshDepthMaterialParameters>;
        meshDepthMaterialParameters: WrapAsString<MeshDepthMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        meshDepthMaterial: string[];
        meshDepthMaterialParameters: string[];
    }
}
export type MeshDepthMaterialProps = MaterialNode<MeshDepthMaterial, MeshDepthMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        meshDepthMaterial: Partial<MeshDepthMaterialParameters>;
    }
}
//# sourceMappingURL=MeshDepthMaterial.d.ts.map