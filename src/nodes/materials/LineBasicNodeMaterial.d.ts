import { MaterialNode } from '../../materials/MaterialNode';
import LineBasicNodeMaterial from 'three/src/nodes/materials/LineBasicNodeMaterial.js';
export { LineBasicNodeMaterial };
import './NodeMaterial';
import '../../materials/LineBasicMaterial';
import { WrapAsString } from '../../../three-types';
import { NodeMaterialParameters } from 'three/src/nodes/materials/NodeMaterial';
import { LineBasicMaterialParameters } from '../../materials/LineBasicMaterial';
declare module '../../../lib/3/three' {
    interface Three {
        LineBasicNodeMaterial: typeof LineBasicNodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineBasicNodeMaterial: LineBasicNodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lineBasicNodeMaterial: WrapAsString<NodeMaterialParameters & LineBasicMaterialParameters>;
        lineBasicNodeMaterialParameters: WrapAsString<NodeMaterialParameters & LineBasicMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lineBasicNodeMaterial: string[];
        lineBasicNodeMaterialParameters: string[];
    }
}
export type LineBasicNodeMaterialProps = MaterialNode<LineBasicNodeMaterial, typeof LineBasicNodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lineBasicNodeMaterial: Partial<LineBasicNodeMaterial>;
    }
}
//# sourceMappingURL=LineBasicNodeMaterial.d.ts.map