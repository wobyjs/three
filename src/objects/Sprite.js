import { Sprite } from 'three/src/objects/Sprite.js';
export { Sprite } from 'three/src/objects/Sprite.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.Sprite = Sprite;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Sprite.d.ts
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
consParams.sprite = [
    /**
     * Creates a new Sprite.
     * @param material An instance of {@link THREE.SpriteMaterial}. Default {@link THREE.SpriteMaterial | `new SpriteMaterial()` _with white color_.
     */
    'material',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\Sprite.d.ts
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
objParams.sprite = [
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
].distinct();
defaults.sprite = {};
