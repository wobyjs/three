import { Vector3, Vector2 } from '../../three-types'
import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
export * from 'three/src/core/BufferGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        BufferGeometry: typeof BufferGeometry
    }
}

Three.BufferGeometry = BufferGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bufferGeometry: BufferGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        bufferGeometry: typeof bufferGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        bufferGeometry: typeof _bufferGeometry
    }
}


/**
 * A representation of mesh, line, or point geometry
 * Includes vertex positions, face indices, normals, colors, UVs, and custom attributes within buffers, reducing the cost of passing all this.data to the Gpu.
 * @remarks
 * To read and edit data in BufferGeometry attributes, see {@link THREE.BufferAttribute} documentation.
 * @example
 * ```typescript
 * const geometry = new THREE.BufferGeometry(,
 *
 * // create a simple square shape. We duplicate the top left and bottom right
 * // vertices because each vertex needs to appear once per triangle.
 * const vertices = new Float32Array( [
 *   -1.0,
-1.0,
1.0,
// v0
 *1.0,
-1.0,
1.0,
// v1
 *1.0,
1.0,
1.0,
// v2
 *
 *1.0,
1.0,
1.0,
// v3
 *   -1.0,
1.0,
1.0,
// v4
 *   -1.0,
-1.0,
1.0  // v5
 * ] ,
 *
 * // itemSize = 3 because there are 3 values (components) per vertex
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) ,
 * const material = new THREE.MeshBasicMaterial( { color } ,
 * const mesh = new THREE.Mesh( geometry, material ,
 * ```
 * @example
 * ```typescript
 * const geometry = new THREE.BufferGeometry(,
 *
 * const vertices = new Float32Array( [
 *   -1.0,
-1.0,
1.0,
// v0
 *1.0,
-1.0,
1.0,
// v1
 *1.0,
1.0,
1.0,
// v2
 *   -1.0,
1.0,
1.0,
// v3
 * ] ,
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) ,
 *
 * const indices = [
 *   0, 1, 2,
 *   2, 3, 0,
 * ].distinct()
 *
 * geometry.setIndex( indices ,
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) ,
 *
 * const material = new THREE.MeshBasicMaterial( { color } ,
 * const mesh = new THREE.Mesh( geometry, material ,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry with non-indexed faces}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_indexed with indexed faces}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines_indexed Lines}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_custom_attributes_particles}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_rawshader Shaders}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js}
 */

const bufferGeometry = ([
    // 'points',
] as const).distinct()
consParams.bufferGeometry = bufferGeometry


/**
 * A representation of mesh, line, or point geometry
 * Includes vertex positions, face indices, normals, colors, Uvs, and custom attributes within buffers, reducing the cost of passing all this data to the Gpu.
 * @remarks
 * To read and edit data in BufferGeometry attributes, see {@link THREE.BufferAttribute | BufferAttribute} documentation.
 * @example
 * ```typescript
 * const geometry = new THREE.BufferGeometry()
 *
 * // create a simple square shape. We duplicate the top left and bottom right
 * // vertices because each vertex needs to appear once per triangle.
 * const vertices = new Float32Array( [
 *   -1.0, -1.0,  1.0, // v0
 *    1.0, -1.0,  1.0, // v1
 *    1.0,  1.0,  1.0, // v2
 *
 *    1.0,  1.0,  1.0, // v3
 *   -1.0,  1.0,  1.0, // v4
 *   -1.0, -1.0,  1.0  // v5
 * ].distinct() )
 *
 * // itemSize = 3 because there are 3 values (components) per vertex
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) )
 * const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } )
 * const mesh = new THREE.Mesh( geometry, material )
 * ```
 * @example
 * ```typescript
 * const geometry = new THREE.BufferGeometry()
 *
 * const vertices = new Float32Array( [
 *   -1.0, -1.0,  1.0, // v0
 *    1.0, -1.0,  1.0, // v1
 *    1.0,  1.0,  1.0, // v2
 *   -1.0,  1.0,  1.0, // v3
 * ].distinct() )
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) )
 *
 * const indices = [
 *   0, 1, 2,
 *   2, 3, 0,
 * ].distinct()
 *
 * geometry.setIndex( indices )
 * geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) )
 *
 * const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } )
 * const mesh = new THREE.Mesh( geometry, material )
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | Mesh with non-indexed faces}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_indexed | Mesh with indexed faces}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines | Lines}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_lines_indexed | Indexed Lines}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_custom_attributes_particles | Particles}
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_rawshader | Raw Shaders}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferGeometry.js | Source}
 */

const _bufferGeometry = ([
    /**
     * Unique number for this {@link THREE.BufferGeometry | BufferGeometry} instance.
     * @remarks Expects a `Integer`
     */
    'id',
    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    'uuid',
    /**
     * Optional name for this {@link THREE.BufferGeometry | BufferGeometry} instance.
     * @defaultValue `''`
     */
    'name',
    /**
     * A Read-only _string_ to check if `this` object type.
     * @remarks Sub-classes will update this value.
     * @defaultValue `BufferGeometry`
     */
    /**
     * Allows for vertices to be re-used across multiple triangles; this is called using "indexed triangles".
     * Each triangle is associated with the indices of three vertices. This attribute therefore stores the index of each vertex for each triangular face.
     * If this attribute is not set, the {@link THREE.webglRenderer | renderer}  assumes that each three contiguous positions represent a single triangle.
     * @defaultValue `null`
     */
    'index',
    /**
     * This hashmap has as id the name of the attribute to be set and as value the {@link THREE.BufferAttribute | buffer} to set it to. Rather than accessing this property directly,
     * use {@link setAttribute | .setAttribute} and {@link getAttribute | .getAttribute} to access attributes of this geometry.
     * @defaultValue `{}`
     */
    'attributes',
    /**
     * Hashmap of {@link THREE.BufferAttribute | BufferAttributes} holding details of the geometry's morph targets.
     * @remarks
     * Once the geometry has been rendered, the morph attribute data cannot be changed.
     * You will have to call {@link dispose | .dispose}(), and create a new instance of {@link THREE.BufferGeometry | BufferGeometry}.
     * @defaultValue `{}`
     */
    'morphAttributes',
    /**
     * Used to control the morph target behavior; when set to true, the morph target data is treated as relative offsets, rather than as absolute positions/normals.
     * @defaultValue `false`
     */
    'morphTargetsRelative',
    /**
     * Split the geometry into groups, each of which will be rendered in a separate WebGl draw call. This allows an array of materials to be used with the geometry.
     * @remarks Every vertex and index must belong to exactly one group — groups must not share vertices or indices, and must not leave vertices or indices unused.
     * @remarks Use {@link addGroup | .addGroup} to add groups, rather than modifying this array directly.
     * @defaultValue []
     */
    'groups',
    /**
     * Bounding box for the {@link THREE.BufferGeometry | BufferGeometry which can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    'boundingBox',
    /**
     * Bounding sphere for the {@link THREE.BufferGeometry | BufferGeometry which can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    'boundingSphere',
    /**
     * Determines the part of the geometry to render. This should not be set directly, instead use {@link setDrawRange | .setDrawRange(...this.)}.
     * @remarks For non-indexed {@link THREE.BufferGeometry | BufferGeometry count is the number of vertices to render.
     * @remarks For indexed {@link THREE.BufferGeometry | BufferGeometry count is the number of indices to render.
     * @defaultValue `{ start: 0, count: Infinity }`
     */
    'drawRange',
    /**
     * An object that can be used to store custom data about the BufferGeometry. It should not hold references to functions as these will not be cloned.
     * @defaultValue `{}`
     */
    'userData',

    /**
     * Set the {@link THREE.BufferGeometry.index | .index} buffer.
     * @param index
     */
    'setIndex',
    /**
     * Sets an {@link attributes | attribute} to this geometry with the specified name.
     * @remarks
     * Use this rather than the attributes property, because an internal hashmap of {@link attributes | .attributes} is maintained to speed up iterating over attributes.
     * @param name
     * @param attribute
     */
    'setAttribute',
    /**
     * Deletes the  {@link attributes | attribute} with the specified name.
     * @param name
     */
    'deleteAttribute',
    /**
     * Adds a group to this geometry
     * @see the {@link BufferGeometry.groups | groups} property for details.
     * @param start
     * @param count
     * @param materialIndex
     */
    'addGroup',
    /**
     * Clears all groups.
     */
    'clearGroups',
    /**
     * Set the {@link drawRange | .drawRange} property
     * @remarks For non-indexed BufferGeometry, count is the number of vertices to render
     * @remarks For indexed BufferGeometry, count is the number of indices to render.
     * @param start
     * @param count is the number of vertices or indices to render. Expects a `Integer`
     */
    'setDrawRange',
    /**
     * Applies the matrix transform to the geometry.
     * @param matrix
     */
    'applyMatrix4',
    /**
     * Applies the rotation represented by the quaternion to the geometry.
     * @param quaternion
     */
    'applyQuaternion',
    /**
     * Rotate the geometry about the X axis. This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    'rotateX',
    /**
     * Rotate the geometry about the Y axis.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    'rotateY',
    /**
     * Rotate the geometry about the Z axis.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.rotation | Object3D.rotation} for typical real-time mesh rotation.
     * @param angle radians. Expects a `Float`
     */
    'rotateZ',
    /**
     * Translate the geometry.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.position | Object3D.position} for typical real-time mesh rotation.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    'translate',
    /**
     * Scale the geometry data.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.scale | Object3D.scale} for typical real-time mesh scaling.
     * @param x Expects a `Float`
     * @param y Expects a `Float`
     * @param z Expects a `Float`
     */
    'scale',
    /**
     * Rotates the geometry to face a point in space.
     * @remarks This is typically done as a one time operation, and not during a loop.
     * @remarks Use {@link THREE.Object3D.lookAt | Object3D.lookAt} for typical real-time mesh usage.
     * @param vector A world vector to look at.
     */
    'lookAt',
    /**
     * Center the geometry based on the bounding box.
     */
    'center',
    /**
     * Sets the attributes for this BufferGeometry from an array of points.
     * @param points
     */
    'setFromPoints',
    /**
     * Computes the bounding box of the geometry, and updates the {@link .boundingBox} attribute. The bounding box is
     * not computed by the engine; it must be computed by your app. You may need to recompute the bounding box if the
     * geometry vertices are modified.
     */
    'computeBoundingBox',
    /**
     * Computes the bounding sphere of the geometry, and updates the {@link .boundingSphere} attribute. The engine
     * automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling. You
     * may need to recompute the bounding sphere if the geometry vertices are modified.
     */
    'computeBoundingSphere',
    /**
     * Calculates and adds a tangent attribute to this geometry.
     * The computation is only supported for indexed geometries and if position, normal, and uv attributes are defined
     * @remarks
     * When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
     * {@link BufferGeometryUtils.computeMikkTSpaceTangents} instead.
     */
    'computeTangents',
    /**
     * Computes vertex normals for the given vertex data. For indexed geometries, the method sets each vertex normal to
     * be the average of the face normals of the faces that share that vertex. For non-indexed geometries, vertices are
     * not shared, and the method sets each vertex normal to be the same as the face normal.
     */
    'computeVertexNormals',
    /**
     * Every normal vector in a geometry will have a magnitude of 1
     * @remarks This will correct lighting on the geometry surfaces.
     */
    'normalizeNormals',
    /**
     * Copies another BufferGeometry to this BufferGeometry.
     * @param source
     */
    'copy',
    /**
     * Frees the GPU-related resources allocated by this instance.
     * @remarks Call this method whenever this instance is no longer used in your app.
     */
    'dispose',
] as const).distinct()
objProps.bufferGeometry = _bufferGeometry

export type BufferGeometryProps = BufferGeometryNode<BufferGeometry & { points: Vector3[] | Vector2[]; }, typeof BufferGeometry & { points: Vector3[] | Vector2[]; }, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        bufferGeometry: Partial<{}>
    }
}

defaults.bufferGeometry = {}
