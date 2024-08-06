import { LOD } from 'three/src/objects/LOD.js';
export { LOD } from 'three/src/objects/LOD.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.LOD = LOD;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\LOD.d.ts
/**
 * Every level is associated with an object, and rendering can be switched between them at the distances specified
 * @remarks
 * Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail) and one for close up (high detail).
 * @example
 * ```typescript
 * const {@link LOD} = new THREE.LOD(,
 * //Create spheres with 3 levels of detail and create new {@link LOD} levels for them
 * for (let i = 0, i & lt, 3, i++) {
 * const geometry = new THREE.IcosahedronGeometry(10, 3 - i)
 * const mesh = new THREE.Mesh(geometry, material,
 * lod.addLevel(mesh, i * 75,
 * }
 * scene.add(lod,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lod / {@link LOD} }
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LOD Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LOD.js}
 */
consParams.lod = [].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\LOD.d.ts
/**
 * Every level is associated with an object, and rendering can be switched between them at the distances specified
 * @remarks
 * Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail) and one for close up (high detail).
 * @example
 * ```typescript
 * const {@link LOD} = new THREE.LOD()
 * //Create spheres with 3 levels of detail and create new {@link LOD} levels for them
 * for (let i = 0; i & lt; 3; i++) {
 *     const geometry = new THREE.IcosahedronGeometry(10, 3 - i)
 *     const mesh = new THREE.Mesh(geometry, material)
 *     lod.addLevel(mesh, i * 75)
 * }
 * scene.add(lod)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_lod | webgl / {@link LOD} }
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/LOD | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/LOD.js | Source}
 */
objParams.lod = [
    /**
     * An array of level objects
     */
    'levels',
    /**
     * Whether the {@link LOD} object is updated automatically by the renderer per frame or not.
     * If set to `false`, you have to call {@link update | .update()} in the render loop by yourself.
     * @defaultValue `true`
     */
    'autoUpdate',
].distinct();
defaults.lOD = {};
