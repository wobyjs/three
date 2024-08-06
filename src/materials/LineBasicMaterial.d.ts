import { MaterialNode } from './MaterialNode';
import { LineBasicMaterial, LineBasicMaterialParameters } from 'three/src/materials/LineBasicMaterial';
export * from 'three/src/materials/LineBasicMaterial';
import './Material';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        LineBasicMaterial: typeof LineBasicMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineBasicMaterial: LineBasicMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        lineBasicMaterial: WrapAsString<LineBasicMaterialParameters>;
        lineBasicMaterialParameters: WrapAsString<LineBasicMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        lineBasicMaterial: string[];
        lineBasicMaterialParameters: string[];
    }
}
export type LineBasicMaterialProps = MaterialNode<LineBasicMaterial, LineBasicMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        lineBasicMaterialParameters: Partial<LineBasicMaterialParameters>;
    }
}
//# sourceMappingURL=LineBasicMaterial.d.ts.map