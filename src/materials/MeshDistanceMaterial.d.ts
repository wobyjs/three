import { MaterialNode } from './MaterialNode';
import { MeshDistanceMaterial, MeshDistanceMaterialParameters } from 'three/src/materials/MeshDistanceMaterial.js';
export { MeshDistanceMaterial } from 'three/src/materials/MeshDistanceMaterial.js';
import './Material';
import '../../lib/three/extensions';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        MeshDistanceMaterial: typeof MeshDistanceMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshDistanceMaterial: MeshDistanceMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        meshDistanceMaterial: WrapAsString<MeshDistanceMaterialParameters>;
        meshDistanceMaterialParameters: WrapAsString<MeshDistanceMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        meshDistanceMaterial: string[];
        meshDistanceMaterialParameters: string[];
    }
}
export type MeshDistanceMaterialProps = MaterialNode<MeshDistanceMaterial, MeshDistanceMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        meshDistanceMaterial: Partial<MeshDistanceMaterialParameters>;
    }
}
//# sourceMappingURL=MeshDistanceMaterial.d.ts.map