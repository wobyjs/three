import { MaterialNode } from '../../../src/materials/MaterialNode';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
export * from 'three/examples/jsm/lines/LineMaterial.js';
import { WrapAsString } from '../../../three-types';
import { MaterialParameters } from 'three/src/materials/Material';
import '../../../lib/three/extensions';
import '../../../src/materials/Material';
import '../../..//src/materials/ShaderMaterial';
declare module '../../../lib/3/three' {
    interface Three {
        LineMaterial: typeof LineMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineMaterial: LineMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        lineMaterial: WrapAsString<MaterialParameters>;
        lineMaterialParameters: WrapAsString<MaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        lineMaterial: string[];
        lineMaterialParameters: string[];
    }
}
export type LineMaterialProps = MaterialNode<LineMaterial, typeof LineMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        lineMaterial: Partial<LineMaterial>;
    }
}
//# sourceMappingURL=LineMaterial.d.ts.map