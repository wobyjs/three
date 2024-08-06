import { MaterialNode } from '../../materials/MaterialNode';
import MeshStandardNodeMaterial from 'three/src/nodes/materials/MeshStandardNodeMaterial.js';
export { MeshStandardNodeMaterial };
import './NodeMaterial';
import '../../materials/MeshStandardMaterial';
import { WrapAsString } from '../../../three-types';
import { MeshStandardMaterialParameters } from 'three/src/materials/MeshStandardMaterial';
declare module '../../../lib/3/three' {
    interface Three {
        MeshStandardNodeMaterial: typeof MeshStandardNodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshStandardNodeMaterial: MeshStandardNodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        meshStandardNodeMaterial: WrapAsString<MeshStandardMaterialParameters>;
        meshStandardNodeMaterialParameters: WrapAsString<MeshStandardMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        meshStandardNodeMaterial: string[];
        meshStandardNodeMaterialParameters: string[];
    }
}
export type MeshStandardNodeMaterialProps = MaterialNode<MeshStandardNodeMaterial, typeof MeshStandardNodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        meshStandardNodeMaterial: Partial<MeshStandardNodeMaterial>;
    }
}
//# sourceMappingURL=MeshStandardNodeMaterial.d.ts.map