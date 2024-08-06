import { Raycaster } from 'three/src/core/Raycaster.js';
export { Raycaster } from 'three/src/core/Raycaster.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
import '../../lib/three/extensions';
Three.Raycaster = Raycaster;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Raycaster.d.ts
consParams.face = [
    'a',
    'b',
    'c',
    'normal',
    'materialIndex',
].distinct();
consParams.intersection = [
    /** Distance between the origin of the ray and the intersection */
    'distance',
    'distanceToRay',
    /** Point of intersection, in world coordinates */
    'point',
    'index',
    /** Intersected face */
    'face',
    /** Index of the intersected face */
    'faceIndex',
    /** The intersected object */
    'object',
    'uv',
    'uv1',
    'normal',
    /** The index number of the instance where the ray intersects the {@link THREE.InstancedMesh } */
    'instanceId',
    'pointOnLine',
    'batchId',
].distinct();
consParams.raycasterParameters = [
    'Mesh',
    'Line',
    'Line2',
    'LOD',
    'Points',
    'Sprite',
].toObject();
/**
 * This class is designed to assist with {@link https://en.wikipedia.org/wiki/Ray_casting}
 * @remarks
 * Raycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things.
 * @example
 * ```typescript
 * const raycaster = new THREE.Raycaster(,
 * const pointer = new THREE.Vector2(,
 *
 * function onPointerMove(event) {
 *     // calculate pointer position in normalized device coordinates (-1 to +1) for both components
 * pointer.x = (event.clientX / window.innerWidth) * 2 - 1,
 * pointer.y = -(event.clientY / window.innerHeight) * 2 + 1,
 * }
 *
 * function render() {
 *     // update the picking ray with the camera and pointer position
 * raycaster.setFromCamera(pointer, camera,
 *     // calculate objects intersecting the picking ray
 * const intersects = raycaster.intersectObjects(scene.children,
 * for (let i = 0, i & lt, intersects.length, i++) {
 *     intersects[i].object.material.color.set(0xff0000,
 *     }
 * renderer.render(scene, camera,
 * }
 * window.addEventListener('pointermove', onPointerMove,
 * window.requestAnimationFrame(render,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes to a Mesh}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho to a Mesh in using an OrthographicCamera}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_buffergeometry to a Mesh with BufferGeometry}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast to a InstancedMesh}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_lines to a Line}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_raycasting_points to Points}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain_raycast raycasting}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_voxelpainter to paint voxels}
 * @see Example: {@link https://threejs.org/examples/#webgl_raycaster_texture to a Texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Raycaster Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Raycaster.js}
 */
consParams.raycaster = [
    /**
     * This creates a new {@link Raycaster} object.
     * @param origin The origin vector where the ray casts from. Default `new Vector3()`
     * @param direction The direction vector that gives direction to the ray. Should be normalized. Default `new Vector3(0, 0,
-1)`
     * @param near All results returned are further away than near. Near can't be negative. Expects a `Float`. Default `0`
     * @param far All results returned are closer than far. Far can't be lower than near. Expects a `Float`. Default `Infinity`
     */
    'origin',
    'direction',
    'near',
    'far',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Raycaster.d.ts
objParams.face = [
    'a',
    'b',
    'c',
    'normal',
    'materialIndex',
    'normal',
    'midpoint',
    'area',
    'constant',
    'outside',
    'mark',
    'edge',
].distinct();
objParams.intersection = [
    /** Distance between the origin of the ray and the intersection */
    'distance',
    'distanceToRay',
    /** Point of intersection, in world coordinates */
    'point',
    'index',
    /** Intersected face */
    'face',
    /** Index of the intersected face */
    'faceIndex',
    /** The intersected object */
    'object',
    'uv',
    'uv1',
    'normal',
    /** The index number of the instance where the ray intersects the {@link THREE.InstancedMesh | InstancedMesh } */
    'instanceId',
    'pointOnLine',
    'batchId',
].distinct();
objParams.raycasterParameters = [
    'Mesh',
    'Line',
    'Line2',
    'LOD',
    'Points',
    'Sprite',
].distinct();
/**
 * This class is designed to assist with {@link https://en.wikipedia.org/wiki/Ray_casting | raycasting}
 * @remarks
 * Raycasting is used for mouse picking (working out what objects in the 3d space the mouse is over) amongst other things.
 * @example
 * ```typescript
 * const raycaster = new THREE.Raycaster()
 * const pointer = new THREE.Vector2()
 *
 * function onPointerMove(event) {
 *     // calculate pointer position in normalized device coordinates (-1 to +1) for both components
 *     pointer.x = (event.clientX / window.innerWidth) * 2 - 1
 *     pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
 * }
 *
 * function render() {
 *     // update the picking ray with the camera and pointer position
 *     raycaster.setFromCamera(pointer, camera)
 *     // calculate objects intersecting the picking ray
 *     const intersects = raycaster.intersectObjects(scene.children)
 *     for (let i = 0; i & lt; intersects.length; i++) {
 *         intersects[i].distinct().object.material.color.set(0xff0000)
 *     }
 *     renderer.render(scene, camera)
 * }
 * window.addEventListener('pointermove', onPointerMove)
 * window.requestAnimationFrame(render)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes | Raycasting to a Mesh}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_cubes_ortho | Raycasting to a Mesh in using an OrthographicCamera}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_buffergeometry | Raycasting to a Mesh with BufferGeometry}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast | Raycasting to a InstancedMesh}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_lines | Raycasting to a Line}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_raycasting_points | Raycasting to Points}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_terrain_raycast | Terrain raycasting}
 * @see Example: {@link https://threejs.org/examples/#webgl_interactive_voxelpainter | Raycasting to paint voxels}
 * @see Example: {@link https://threejs.org/examples/#webgl_raycaster_texture | Raycast to a Texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Raycaster | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Raycaster.js | Source}
 */
objParams.raycaster = [
    /**
     * The {@link THREE.RaycasterRay | Ray} used for the raycasting.
     */
    'ray',
    /**
     * The near factor of the raycaster. This value indicates which objects can be discarded based on the distance.
     * This value shouldn't be negative and should be smaller than the far property.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'near',
    /**
     * The far factor of the raycaster. This value indicates which objects can be discarded based on the distance.
     * This value shouldn't be negative and should be larger than the near property.
     * @remarks Expects a `Float`
     * @defaultValue `Infinity`
     */
    'far',
    /**
     * The camera to use when raycasting against view-dependent objects such as billboarded objects like {@link THREE.Sprites | Sprites}.
     * This field can be set manually or is set when calling  {@link setFromCamera}.
     * @defaultValue `null`
     */
    'camera',
    /**
     * Used by {@link Raycaster} to selectively ignore 3d objects when performing intersection tests.
     * The following code example ensures that only 3d objects on layer `1` will be honored by the instance of Raycaster.
     * ```
     * raycaster.layers.set( 1 )
     * object.layers.enable( 1 )
     * ```
     * @defaultValue `new THREE.Layers()` - See {@link THREE.Layers | Layers}.
     */
    'layers',
    /**
     * An data object where threshold is the precision of the {@link Raycaster} when intersecting objects, in world units.
     * @defaultValue `{ Mesh: { Line: { threshold: 1  LOD: { Points: { threshold: 1  Sprite: {} }`
     */
    'params',
].distinct();
defaults.raycaster = { near: 0, far: Infinity };
