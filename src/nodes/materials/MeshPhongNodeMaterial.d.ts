import { MaterialNode } from '../../materials/MaterialNode';
import MeshPhongNodeMaterial from 'three/src/nodes/materials/MeshPhongNodeMaterial.js';
export * from 'three/src/nodes/materials/MeshPhongNodeMaterial.js';
import './NodeMaterial';
import '../../materials/MeshPhongMaterial';
import { WrapAsString } from '../../../three-types';
import { NodeMaterialParameters } from 'three/src/nodes/materials/NodeMaterial';
import { MeshPhongMaterialParameters } from 'three/src/materials/MeshPhongMaterial';
declare module '../../../lib/3/three' {
    interface Three {
        MeshPhongNodeMaterial: typeof MeshPhongNodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshPhongNodeMaterial: MeshPhongNodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        meshPhongNodeMaterial: WrapAsString<NodeMaterialParameters & MeshPhongMaterialParameters>;
        meshPhongNodeMaterialParameters: WrapAsString<NodeMaterialParameters & MeshPhongMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        meshPhongNodeMaterial: string[];
        meshPhongNodeMaterialParameters: string[];
    }
}
export type MeshPhongNodeMaterialProps = MaterialNode<MeshPhongNodeMaterial, typeof MeshPhongNodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        meshPhongNodeMaterial: Partial<MeshPhongNodeMaterial>;
    }
}
//# sourceMappingURL=MeshPhongNodeMaterial.d.ts.map