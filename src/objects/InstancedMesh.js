import { InstancedMesh } from 'three/src/objects/InstancedMesh.js';
export { InstancedMesh } from 'three/src/objects/InstancedMesh.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.InstancedMesh = InstancedMesh;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\InstancedMesh.d.ts
consParams.instancedMeshEventMap = [].distinct();
/**
 * A special version of {@link THREE.Mesh} with instanced rendering support
 * @remarks
 * Use {@link InstancedMesh} if you have to render a large number of objects with the same geometry and material but with different world transformations
 * @remarks
 * The usage of {@link InstancedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_dynamic / instancing / dynamic}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_performance / instancing / performance}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_scatter / instancing / scatter}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast / instancing / raycast}
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/InstancedMesh Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/InstancedMesh.js}
 */
consParams.instancedMesh = [
    /**
     * Create a new instance of {@link InstancedMesh}
     * @param geometry An instance of {@link THREE.BufferGeometry}.
     * @param material A single or an array of {@link THREE.Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     * @param count The **maximum** number of instances of this.mesh. Expects a `Integer`
     */
    'geometry',
    'material',
    'count',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\objects\InstancedMesh.d.ts    
objParams.instancedMeshEventMap = [...objParams.object3dEventMap,
].distinct();
/**
 * A special version of {@link THREE.Mesh | Mesh} with instanced rendering support
 * @remarks
 * Use {@link InstancedMesh} if you have to render a large number of objects with the same geometry and material but with different world transformations
 * @remarks
 * The usage of {@link InstancedMesh} will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_dynamic | WebGl / instancing / dynamic}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_performance | WebGl / instancing / performance}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_scatter | WebGl / instancing / scatter}
 * @see Example: {@link https://threejs.org/examples/#webgl_instancing_raycast | WebGl / instancing / raycast}
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/InstancedMesh | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/InstancedMesh.js | Source}
 */
objParams.instancedMesh = [...objParams.mesh,
    /**
     * Create a new instance of {@link InstancedMesh}
     * @param geometry An instance of {@link THREE.BufferGeometry | BufferGeometry}.
     * @param material A single or an array of {@link THREE.Material | Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     * @param count The **maximum** number of instances of this Mesh. Expects a `Integer`
     */
    /**
     * Read-only flag to check if a given object is of type {@link InstancedMesh}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    /**
     * This bounding box encloses all instances of the {@link InstancedMesh, which can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
     * @remarks Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    'boundingBox',
    /**
     * This bounding sphere encloses all instances of the {@link InstancedMesh which can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
     * @remarks bounding spheres aren't computed by default. They need to be explicitly computed, otherwise they are `null`.
     * @defaultValue `null`
     */
    'boundingSphere',
    /**
     * The number of instances.
     * @remarks
     * The `count` value passed into the {@link InstancedMesh | constructor} represents the **maximum** number of instances of this mesh.
     * You can change the number of instances at runtime to an integer value in the range `[0, count].distinct()
`.
     * @remarks If you need more instances than the original `count` value, you have to create a new InstancedMesh.
     * @remarks Expects a `Integer`
     */
    'count',
    /**
     * Represents the colors of all instances.
     * You have to set {@link InstancedBufferAttribute.needsUpdate | .instanceColor.needsUpdate()} flag to `true` if you modify instanced data via {@link setColorAt | .setColorAt()}.
     * @defaultValue `null`
     */
    'instanceColor',
    /**
     * Represents the local transformation of all instances.
     * You have to set {@link InstancedBufferAttribute.needsUpdate | .instanceMatrix.needsUpdate()} flag to `true` if you modify instanced data via {@link setMatrixAt | .setMatrixAt()}.
     */
    'instanceMatrix',
    /**
     * Represents the morph target weights of all instances. You have to set its {@link .needsUpdate} flag to true if
     * you modify instanced data via {@link .setMorphAt}.
     */
    'morphTexture',
].distinct();
defaults.instancedMesh = {};
