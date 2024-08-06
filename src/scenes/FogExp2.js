import { FogExp2 } from 'three/src/scenes/FogExp2.js';
export { FogExp2 } from 'three/src/scenes/FogExp2.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import './Fog';
Three.FogExp2 = FogExp2;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\scenes\FogExp2.d.ts
/**
 * This class contains the parameters that define exponential squared fog, which gives a clear view near the camera and a faster than exponentially densening fog farther from the camera.
 * @example
 * ```typescript
 * const scene = new THREE.Scene(,
 * scene.fog = new THREE.FogExp2(0xcccccc, 0.002,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain geometry terrain}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/FogExp2 Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/FogExp2.js}
 */
consParams.fogExp2 = [
    /**
     * The color parameter is passed to the {@link THREE.Color} constructor to set the color property
     * @remarks Color can be a hexadecimal integer or a css-style string.
     * @param color
     * @param density Expects a `Float`
     */
    'color',
    'density',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\scenes\FogExp2.d.ts
/**
 * This class contains the parameters that define exponential squared fog, which gives a clear view near the camera and a faster than exponentially densening fog farther from the camera.
 * @example
 * ```typescript
 * const scene = new THREE.Scene()
 * scene.fog = new THREE.FogExp2(0xcccccc, 0.002)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain | webgl geometry terrain}
 * @see {@link https://threejs.org/docs/index.html#api/en/scenes/FogExp2 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/scenes/FogExp2.js | Source}
 */
objParams.fogExp2 = [...objParams.fogBase,
    /**
     * Optional name of the object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    'name',
    /**
     * Fog color.
     * @remarks If set to black, far away objects will be rendered black.
     */
    'color',
    /**
     * Defines how fast the fog will grow dense.
     * @defaultValue `0.00025`
     * @remarks Expects a `Float`
     */
    'density',
].distinct();
defaults.fogExp2 = {};
