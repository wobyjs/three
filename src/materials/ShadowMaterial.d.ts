import { MaterialNode } from './MaterialNode';
import { ShadowMaterial, ShadowMaterialParameters } from 'three/src/materials/ShadowMaterial.js';
export { ShadowMaterial } from 'three/src/materials/ShadowMaterial.js';
import './Material';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        ShadowMaterial: typeof ShadowMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shadowMaterial: ShadowMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        shadowMaterial: WrapAsString<ShadowMaterialParameters>;
        shadowMaterialParameters: WrapAsString<ShadowMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        shadowMaterial: string[];
        shadowMaterialParameters: string[];
    }
}
export type ShadowMaterialProps = MaterialNode<ShadowMaterial, ShadowMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        shadowMaterial: Partial<ShadowMaterialParameters>;
    }
}
//# sourceMappingURL=ShadowMaterial.d.ts.map