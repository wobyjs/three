import { MaterialNode } from '../../../src/materials/MaterialNode';
import { MeshPostProcessingMaterial } from 'three/examples/jsm/materials/MeshPostProcessingMaterial.js';
export * from 'three/examples/jsm/materials/MeshPostProcessingMaterial.js';
import { WrapAsString } from '../../../three-types';
import { MeshPhysicalMaterialParameters } from 'three/src/materials/MeshPhysicalMaterial';
declare module '../../../lib/3/three' {
    interface Three {
        MeshPostProcessingMaterial: typeof MeshPostProcessingMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshPostProcessingMaterial: MeshPostProcessingMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        meshPostProcessingMaterial: WrapAsString<MeshPhysicalMaterialParameters>;
        meshPostProcessingMaterialParameters: WrapAsString<MeshPhysicalMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        meshPostProcessingMaterial: string[];
        meshPostProcessingMaterialParameters: string[];
    }
}
export type MeshPostProcessingMaterialProps = MaterialNode<MeshPostProcessingMaterial, typeof MeshPostProcessingMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        meshPostProcessingMaterial: Partial<MeshPostProcessingMaterial>;
    }
}
//# sourceMappingURL=MeshPostProcessingMaterial.d.ts.map