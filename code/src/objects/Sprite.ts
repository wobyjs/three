import { Object3DNode } from '../../three-types'
import { SpriteMaterial } from 'three/src/materials/SpriteMaterial.js'
import { Sprite } from 'three/src/objects/Sprite.js'
export { Sprite } from 'three/src/objects/Sprite.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Sprite: typeof Sprite
    }
}

Three.Sprite = Sprite

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sprite: SpriteProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        sprite: typeof sprite
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        sprite: typeof _sprite
    }
}


/**
 * A {@link Sprite} is a plane that always faces towards the camera, generally with a partially transparent texture applied.
 * @remarks Sprites do not cast shadows, setting `castShadow = true` will have no effect.
 * @example
 * ```typescript
 * const map = new THREE.TextureLoader().load('sprite.png',
 * const material = new THREE.SpriteMaterial({
 * map
 * 
 * const {@link Sprite} = new THREE.Sprite(material,
 * scene.add(sprite,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Sprite Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Sprite.js}
 */

const sprite = ([
    /**
     * Creates a new Sprite.
     * @param material An instance of {@link THREE.SpriteMaterial}. Default {@link THREE.SpriteMaterial | `new SpriteMaterial()` _with white color_.
     */
    'material',
] as const).distinct()
consParams.sprite = sprite


/**
 * A {@link Sprite} is a plane that always faces towards the camera, generally with a partially transparent texture applied.
 * @remarks Sprites do not cast shadows, setting `castShadow = true` will have no effect.
 * @example
 * ```typescript
 * const map = new THREE.TextureLoader().load('sprite.png')
 * const material = new THREE.SpriteMaterial({
 *     map: map
 * })
 * const {@link Sprite} = new THREE.Sprite(material)
 * scene.add(sprite)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Sprite | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Sprite.js | Source}
 */

const _sprite = ([
    /**
     * Whether the object gets rendered into shadow map.
     * No effect in {@link Sprite}.
     * @ignore
     * @hidden
     * @defaultValue `false`
     */
    'castShadow',
    'geometry',
    /**
     * An instance of {@link THREE.SpriteMaterial | SpriteMaterial defining the object's appearance.
     * @defaultValue {@link THREE.SpriteMaterial | `new SpriteMaterial()` _with white color_.
     */
    'material',
    /**
     * The sprite's anchor point, and the point around which the {@link Sprite} rotates.
     * A value of (0.5, 0.5) corresponds to the midpoint of the sprite.
     * A value of (0, 0) corresponds to the lower left corner of the sprite.
     * @defaultValue {@link THREE.Vector2 | `new Vector2(0.5, 0.5)`}.
     */
    'center',
] as const).distinct()
objProps.sprite = _sprite

export type SpriteProps = Object3DNode<Sprite, typeof Sprite, { material?: SpriteMaterial; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        sprite: { material?: SpriteMaterial; }
    }
}

defaults.sprite = {}

