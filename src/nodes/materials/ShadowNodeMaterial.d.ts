import { MaterialNode } from '../../materials/MaterialNode';
import ShadowNodeMaterial, { ShadowNodeMaterialParameters } from 'three/src/nodes/materials/ShadowNodeMaterial.js';
export { ShadowNodeMaterial };
import './NodeMaterial';
import '../../materials/ShadowMaterial';
import { WrapAsString } from '../../../three-types';
declare module '../../../lib/3/three' {
    interface Three {
        ShadowNodeMaterial: typeof ShadowNodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shadowNodeMaterial: ShadowNodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        shadowNodeMaterial: WrapAsString<ShadowNodeMaterialParameters>;
        shadowNodeMaterialParameters: WrapAsString<ShadowNodeMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        shadowNodeMaterial: string[];
        shadowNodeMaterialParameters: string[];
    }
}
export type ShadowNodeMaterialProps = MaterialNode<ShadowNodeMaterial, typeof ShadowNodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        shadowNodeMaterial: Partial<ShadowNodeMaterial>;
    }
}
//# sourceMappingURL=ShadowNodeMaterial.d.ts.map