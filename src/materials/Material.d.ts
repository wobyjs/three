import { MaterialNode } from './MaterialNode';
import { Material, MaterialParameters } from 'three/src/materials/Material.js';
export { Material } from 'three/src/materials/Material.js';
import '../../lib/three/extensions';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        Material: typeof Material;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            material: MaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        material: WrapAsString<MaterialParameters>;
        materialParameters: WrapAsString<MaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        material: string[];
        materialParameters: string[];
    }
}
export type MaterialProps = MaterialNode<Material, MaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        material: Partial<MaterialParameters>;
    }
}
//# sourceMappingURL=Material.d.ts.map