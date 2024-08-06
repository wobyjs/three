import { MaterialNode } from './MaterialNode';
import { ShaderMaterial, ShaderMaterialParameters } from 'three/src/materials/ShaderMaterial.js';
export { ShaderMaterial } from 'three/src/materials/ShaderMaterial.js';
import { WrapAsString } from '../../three-types';
import './Material';
declare module '../../lib/3/three' {
    interface Three {
        ShaderMaterial: typeof ShaderMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shaderMaterial: ShaderMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        shaderMaterial: WrapAsString<ShaderMaterialParameters>;
        shaderMaterialParameters: WrapAsString<ShaderMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        shaderMaterial: string[];
        shaderMaterialParameters: string[];
    }
}
export type ShaderMaterialProps = MaterialNode<ShaderMaterial, ShaderMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        shaderMaterial: Partial<ShaderMaterialParameters>;
    }
}
//# sourceMappingURL=ShaderMaterial.d.ts.map