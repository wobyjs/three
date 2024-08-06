import { MaterialNode } from './MaterialNode';
import { MeshLambertMaterial, MeshLambertMaterialParameters } from 'three/src/materials/MeshLambertMaterial.js';
export { MeshLambertMaterial } from 'three/src/materials/MeshLambertMaterial.js';
import './Material';
import '../../lib/three/extensions';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        MeshLambertMaterial: typeof MeshLambertMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshLambertMaterial: MeshLambertMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        meshLambertMaterial: WrapAsString<MeshLambertMaterialParameters>;
        meshLambertMaterialParameters: WrapAsString<MeshLambertMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        meshLambertMaterial: string[];
        meshLambertMaterialParameters: string[];
    }
}
export type MeshLambertMaterialProps = MaterialNode<MeshLambertMaterial, MeshLambertMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        meshLambertMaterial: Partial<MeshLambertMaterialParameters>;
    }
}
//# sourceMappingURL=MeshLambertMaterial.d.ts.map