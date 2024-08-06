import { Object3DNode } from '../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
export { Object3D } from 'three/src/core/Object3D.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Object3D: typeof Object3D
    }
}

Three.Object3D = Object3D

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            object3d: Object3DProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        object3d: string[]
        object3dEventMap: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        object3d: string[]
        object3dEventMap: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Object3d.d.ts


consParams.object3dEventMap = [
    /**
     * Fires when the object has been added to its parent object.
     */
    'added',
    /**
     * Fires when the object has been removed from its parent object.
     */
    'removed',
    /**
     * Fires when a new child object has been added.
     */
    'childadded',
    /**
     * Fires when a new child object has been removed.
     */
    'childremoved',
].distinct()

/**
 * This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3d space.
 * @remarks Note that this.can be used for grouping objects via the {@link THREE.Object3d.add | .add()} method which adds the object as a child,
 * however it is better to use {@link THREE.Group} for this.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Object3d Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Object3d.js}
 */

consParams.object3d = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\Object3d.d.ts

objParams.object3dEventMap = [
    /**
     * Fires when the object has been added to its parent object.
     */
    'added',
    /**
     * Fires when the object has been removed from its parent object.
     */
    'removed',
    /**
     * Fires when a new child object has been added.
     */
    'childadded',
    /**
     * Fires when a new child object has been removed.
     */
    'childremoved',
].distinct()

/**
 * This is the base class for most objects in three.js and provides a set of properties and methods for manipulating objects in 3d space.
 * @remarks Note that this can be used for grouping objects via the {@link THREE.Object3d.add | .add()} method which adds the object as a child,
 * however it is better to use {@link THREE.Group | Group} for this.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Object3d | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Object3d.js | Source}
 */

objParams.object3d = [
    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    'uuid',
    /**
     * Optional name of the object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    'name',
    /**
     * A Read-only _string_ to check `this` object type.
     * @remarks This can be used to find a specific type of Object3d in a scene.
     * Sub-classes will update this value.
     * @defaultValue `Object3d`
     */
    /**
     * Object's parent in the {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}.
     * @remarks An object can have at most one parent.
     * @defaultValue `null`
     */
    'parent',
    /**
     * Array with object's children.
     * @see {@link THREE.Object3dGroup | Group} for info on manually grouping objects.
     * @defaultValue `[].distinct()`
     */
    'children',
    /**
     * This is used by the {@link lookAt | lookAt} method, for example, to determine the orientation of the result.
     * @defaultValue {@link DEFAULT_UP | Object3d.DEFAULT_UP} - that is `(0, 1, 0)`.
     */
    'up',
    /**
     * The local transform matrix.
     * @defaultValue `new THREE.Matrix4()`
     */
    'matrix',
    /**
     * The global transform of the object.
     * @remarks If the {@link Object3d} has no parent, then it's identical to the local transform {@link THREE.Object3d.matrix | .matrix}.
     * @defaultValue `new THREE.Matrix4()`
     */
    'matrixWorld',
    /**
     * When this is set, it calculates the matrix of position, (rotation or quaternion) and
     * scale every frame and also recalculates the matrixWorld property.
     * @defaultValue {@link DEFAULT_MATRIX_AUTO_UPDATE} - that is `(true)`.
     */
    'matrixAutoUpdate',
    /**
     * If set, then the renderer checks every frame if the object and its children need matrix updates.
     * When it isn't, then you have to maintain all matrices in the object and its children yourself.
     * @defaultValue {@link DEFAULT_MATRIX_WORLD_AUTO_UPDATE} - that is `(true)`.
     */
    'matrixWorldAutoUpdate',
    /**
     * When this is set, it calculates the matrixWorld in that frame and resets this property to false.
     * @defaultValue `false`
     */
    'matrixWorldNeedsUpdate',
    /**
     * The layer membership of the object.
     * @remarks The object is only visible if it has at least one layer in common with the {@link THREE.Object3dCamera | Camera} in use.
     * This property can also be used to filter out unwanted objects in ray-intersection tests when using {@link THREE.Raycaster | Raycaster}.
     * @defaultValue `new THREE.Layers()`
     */
    'layers',
    /**
     * Object gets rendered if `true`.
     * @defaultValue `true`
     */
    'visible',
    /**
     * Whether the object gets rendered into shadow map.
     * @defaultValue `false`
     */
    'castShadow',
    /**
     * Whether the material receives shadows.
     * @defaultValue `false`
     */
    'receiveShadow',
    /**
     * When this is set, it checks every frame if the object is in the frustum of the camera before rendering the object.
     * If set to `false` the object gets rendered every frame even if it is not in the frustum of the camera.
     * @defaultValue `true`
     */
    'frustumCulled',
    /**
     * This value allows the default rendering order of {@link https://en.wikipedia.org/wiki/Scene_graph | scene graph}
     * objects to be overridden although opaque and transparent objects remain sorted independently.
     * @remarks When this property is set for an instance of {@link Group | Group all descendants objects will be sorted and rendered together.
     * Sorting is from lowest to highest renderOrder.
     * @defaultValue `0`
     */
    'renderOrder',
    /**
     * Array with object's animation clips.
     * @defaultValue `[].distinct()`
     */
    'animations',
    /**
     * An object that can be used to store custom data about the {@link Object3d}.
     * @remarks It should not hold references to _functions_ as these **will not** be cloned.
     * @default `{}`
     */
    'userData',
    /**
     * Custom depth material to be used when rendering to the depth map.
     * @remarks Can only be used in context of meshes.
     * When shadow-casting with a {@link THREE.DirectionalLight | DirectionalLight} or {@link THREE.SpotLight | SpotLight
     * if you are modifying vertex positions in the vertex shader you must specify a customDepthMaterial for proper shadows.
     * @defaultValue `undefined`
     */
    'customDepthMaterial',
    /**
     * Same as {@link customDepthMaterial but used with {@link THREE.Object3dPointLight | PointLight}.
     * @defaultValue `undefined`
     */
    'customDistanceMaterial',
].distinct()


export type Object3DProps = Object3DNode<Object3D, typeof Object3D, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        object3D: Partial<{}>
    }
}

defaults.object3D = {}

