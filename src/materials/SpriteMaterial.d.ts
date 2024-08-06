import { MaterialNode } from './MaterialNode';
import { SpriteMaterial, SpriteMaterialParameters } from 'three/src/materials/SpriteMaterial.js';
export { SpriteMaterial } from 'three/src/materials/SpriteMaterial.js';
import './Material';
import '../../lib/three/extensions';
import { WrapAsString } from '../../three-types';
declare module '../../lib/3/three' {
    interface Three {
        SpriteMaterial: typeof SpriteMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spriteMaterial: SpriteMaterialProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        spriteMaterial: WrapAsString<SpriteMaterialParameters>;
        spriteMaterialParameters: WrapAsString<SpriteMaterialParameters>;
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        spriteMaterial: string[];
        spriteMaterialParameters: string[];
    }
}
export type SpriteMaterialProps = MaterialNode<SpriteMaterial, SpriteMaterialParameters>;
declare module '../../lib/3/defaults' {
    interface defaults {
        spriteMaterial: Partial<SpriteMaterialParameters>;
    }
}
//# sourceMappingURL=SpriteMaterial.d.ts.map