import { MaterialNode } from './MaterialNode';
import { LineDashedMaterial, LineDashedMaterialParameters } from 'three/src/materials/LineDashedMaterial.js';
export { LineDashedMaterial } from 'three/src/materials/LineDashedMaterial.js';
import './LineBasicMaterial';
import '../../lib/three/extensions';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        LineDashedMaterial: typeof LineDashedMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineDashedMaterial: LineDashedMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        lineDashedMaterial: WrapAsString<LineDashedMaterialParameters>;
        lineDashedMaterialParameters: WrapAsString<LineDashedMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        lineDashedMaterial: string[];
        lineDashedMaterialParameters: string[];
    }
}
export type LineDashedMaterialProps = MaterialNode<LineDashedMaterial, LineDashedMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        lineDashedMaterial: Partial<LineDashedMaterialParameters>;
    }
}
//# sourceMappingURL=LineDashedMaterial.d.ts.map