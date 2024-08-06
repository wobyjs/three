import { MaterialNode } from './MaterialNode';
import { ShaderMaterialParameters } from 'three/src/materials/ShaderMaterial.js';
import { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial.js';
export { RawShaderMaterial } from 'three/src/materials/RawShaderMaterial.js';
import { WrapAsString } from '../../three-types';
import './Material';
import './ShaderMaterial';
declare module '../../lib/3/three' {
    interface Three {
        RawShaderMaterial: typeof RawShaderMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rawShaderMaterial: RawShaderMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        rawShaderMaterial: WrapAsString<ShaderMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        rawShaderMaterial: string[];
    }
}
export type RawShaderMaterialProps = MaterialNode<RawShaderMaterial, ShaderMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        rawShaderMaterial: Partial<ShaderMaterialParameters>;
    }
}
//# sourceMappingURL=RawShaderMaterial.d.ts.map