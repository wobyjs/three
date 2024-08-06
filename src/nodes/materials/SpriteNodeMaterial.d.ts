import { MaterialNode } from '../../materials/MaterialNode';
import SpriteNodeMaterial from 'three/src/nodes/materials/SpriteNodeMaterial.js';
import { SpriteMaterialParameters } from 'three/src/materials/SpriteMaterial';
export * from 'three/src/materials/SpriteMaterial';
import './NodeMaterial';
import '../../materials/SpriteMaterial';
import { WrapAsString } from '../../../three-types';
import './NodeMaterial';
import '../../materials/SpriteMaterial';
declare module '../../../lib/3/three' {
    interface Three {
        SpriteNodeMaterial: typeof SpriteNodeMaterial;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spriteNodeMaterial: SpriteNodeMaterialProps;
        }
    }
}
declare module '../../../lib/3/consParams' {
    interface consParams {
        spriteNodeMaterial: WrapAsString<SpriteMaterialParameters>;
        spriteNodeMaterialParameters: WrapAsString<SpriteMaterialParameters>;
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        spriteNodeMaterial: string[];
        spriteNodeMaterialParameters: String[];
    }
}
export type SpriteNodeMaterialProps = MaterialNode<SpriteNodeMaterial, typeof SpriteNodeMaterial>;
declare module '../../../lib/3/defaults' {
    interface defaults {
        spriteNodeMaterial: Partial<SpriteNodeMaterial>;
    }
}
//# sourceMappingURL=SpriteNodeMaterial.d.ts.map