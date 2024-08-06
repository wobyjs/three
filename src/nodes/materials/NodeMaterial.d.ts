import { MaterialNode } from '../../materials/MaterialNode';
import NodeMaterial, { NodeMaterialParameters } from 'three/src/nodes/materials/NodeMaterial.js';
export { NodeMaterial };
import '../../lib/three/extensions';
import './NodeMaterial';
import '../../materials/ShaderMaterial';
import { WrapAsString } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        NodeMaterial: typeof NodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeMaterial: NodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeMaterial: WrapAsString<NodeMaterialParameters>;
        nodeMaterialParameters: WrapAsString<NodeMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeMaterial: string[];
        nodeMaterialParameters: string[];
    }
}
export type NodeMaterialProps = MaterialNode<NodeMaterial, typeof NodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeMaterial: Partial<NodeMaterial>;
    }
}
//# sourceMappingURL=NodeMaterial.d.ts.map