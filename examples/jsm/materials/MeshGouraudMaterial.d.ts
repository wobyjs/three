import { MaterialNode } from '../../../src/materials/MaterialNode';
import { MeshGouraudMaterial } from 'three/examples/jsm/materials/MeshGouraudMaterial.js';
export * from 'three/examples/jsm/materials/MeshGouraudMaterial.js';
import { WrapAsString } from '../../../three-types';
import { ShaderMaterialParameters } from 'three/src/materials/ShaderMaterial';
declare module '../../../lib/3/three' {
    interface Three {
        MeshGouraudMaterial: typeof MeshGouraudMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshGouraudMaterial: MeshGouraudMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        meshGouraudMaterial: WrapAsString<ShaderMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        meshGouraudMaterial: string[];
    }
}
export type MeshGouraudMaterialProps = MaterialNode<MeshGouraudMaterial, typeof MeshGouraudMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        meshGouraudMaterial: Partial<MeshGouraudMaterial>;
    }
}
//# sourceMappingURL=MeshGouraudMaterial.d.ts.map