import { MaterialNode } from '../../materials/MaterialNode';
import MeshNormalNodeMaterial from 'three/src/nodes/materials/MeshNormalNodeMaterial.js';
export { MeshNormalNodeMaterial };
import './NodeMaterial';
import './MeshBasicNodeMaterial';
import '../../materials/MeshPhongMaterial';
import { WrapAsString } from '../../../three-types';
import { MeshBasicNodeMaterialParameters } from 'three/src/nodes/materials/MeshBasicNodeMaterial';
import 'three/examples/jsm/Addons';
declare module '../../../lib/3/three' {
    interface Three {
        MeshNormalNodeMaterial: typeof MeshNormalNodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshNormalNodeMaterial: MeshNormalNodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        meshNormalNodeMaterial: WrapAsString<MeshBasicNodeMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        meshNormalNodeMaterial: string[];
    }
}
export type MeshNormalNodeMaterialProps = MaterialNode<MeshNormalNodeMaterial, typeof MeshNormalNodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        meshNormalNodeMaterial: Partial<MeshNormalNodeMaterial>;
    }
}
//# sourceMappingURL=MeshNormalNodeMaterial.d.ts.map