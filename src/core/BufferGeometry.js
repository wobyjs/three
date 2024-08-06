import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
export * from 'three/src/core/BufferGeometry.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.BufferGeometry = BufferGeometry;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\BufferGeometry.d.ts
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
consParams.bufferGeometry = [
// 'points',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\BufferGeometry.d.ts
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
objParams.bufferGeometry = [
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
     * @defaultValue `[].distinct()`
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
//@ts-ignore
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
].distinct();
defaults.bufferGeometry = {};
