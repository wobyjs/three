import { MaterialNode } from '../../materials/MaterialNode';
import MeshBasicNodeMaterial from 'three/src/nodes/materials/MeshBasicNodeMaterial.js';
export * from 'three/src/nodes/materials/MeshBasicNodeMaterial.js';
import './NodeMaterial';
import '../../materials/MeshBasicMaterial';
import '../../materials/MeshNormalMaterial';
import { WrapAsString } from '../../../three-types';
import { MeshBasicMaterialParameters } from 'three/src/materials/MeshBasicMaterial';
import { MeshNormalMaterialParameters } from 'three/src/materials/MeshNormalMaterial';
declare module '../../../lib/3/three' {
    interface Three {
        MeshBasicNodeMaterial: typeof MeshBasicNodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshBasicNodeMaterial: MeshBasicNodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        meshBasicNodeMaterial: WrapAsString<MeshBasicMaterialParameters & MeshNormalMaterialParameters>;
        meshBasicNodeMaterialParameters: WrapAsString<MeshBasicMaterialParameters & MeshNormalMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        meshBasicNodeMaterial: string[];
        meshBasicNodeMaterialParameters: string[];
    }
}
export type MeshBasicNodeMaterialProps = MaterialNode<MeshBasicNodeMaterial, typeof MeshBasicNodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        meshBasicNodeMaterial: Partial<MeshBasicNodeMaterial>;
    }
}
//# sourceMappingURL=MeshBasicNodeMaterial.d.ts.map