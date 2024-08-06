import { Object3DNode } from '../../three-types';
import { SpriteMaterial } from 'three/src/materials/SpriteMaterial.js';
import { Sprite } from 'three/src/objects/Sprite.js';
export { Sprite } from 'three/src/objects/Sprite.js';
declare module '../../lib/3/three' {
    interface Three {
        Sprite: typeof Sprite;
    }
}
declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sprite: SpriteProps;
        }
    }
}
declare module '../../lib/3/consParams' {
    interface consParams {
        sprite: string[];
    }
}
declare module '../../lib/3/objParams' {
    interface objParams {
        sprite: string[];
    }
}
export type SpriteProps = Object3DNode<Sprite, typeof Sprite, {
    material?: SpriteMaterial;
}>;
declare module '../../lib/3/defaults' {
    interface defaults {
        sprite: {
            material?: SpriteMaterial;
        };
    }
}
//# sourceMappingURL=Sprite.d.ts.map