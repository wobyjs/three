import { MaterialNode } from './MaterialNode';
import { MeshToonMaterial, MeshToonMaterialParameters } from 'three/src/materials/MeshToonMaterial.js';
export { MeshToonMaterial } from 'three/src/materials/MeshToonMaterial.js';
import './Material';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        MeshToonMaterial: typeof MeshToonMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshToonMaterial: MeshToonMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        meshToonMaterial: WrapAsString<MeshToonMaterialParameters>;
        meshToonMaterialParameters: WrapAsString<MeshToonMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        meshToonMaterial: string[];
        meshToonMaterialParameters: string[];
    }
}
export type MeshToonMaterialProps = MaterialNode<MeshToonMaterial, MeshToonMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        meshToonMaterial: Partial<MeshToonMaterialParameters>;
    }
}
//# sourceMappingURL=MeshToonMaterial.d.ts.map