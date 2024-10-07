import { Object3DNode } from '../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { InstancedMesh } from 'three/src/objects/InstancedMesh.js'
export { InstancedMesh } from 'three/src/objects/InstancedMesh.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        InstancedMesh: typeof InstancedMesh
    }
}

Three.InstancedMesh = InstancedMesh

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            instancedMesh: InstancedMeshProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        instancedMesh: typeof instancedMesh
        instancedMeshEventMap: typeof instancedMeshEventMap
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        instancedMesh: typeof _instancedMesh
        instancedMeshEventMap: typeof _instancedMeshEventMap
    }
}



const instancedMeshEventMap = ([
] as const).distinct()
consParams.instancedMeshEventMap = instancedMeshEventMap

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

const instancedMesh = ([
    /**
     * Create a new instance of {@link InstancedMesh}
     * @param geometry An instance of {@link THREE.BufferGeometry}.
     * @param material A single or an array of {@link THREE.Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     * @param count The **maximum** number of instances of this.mesh. Expects a `Integer`
     */
    'geometry',
    'material',
    'count',
] as const).distinct()
consParams.instancedMesh = instancedMesh



const _instancedMeshEventMap = ([...objProps.object3dEventMap,
] as const).distinct()
objProps.instancedMeshEventMap = _instancedMeshEventMap


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

const _instancedMesh = ([...objProps.mesh,
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
     * You can change the number of instances at runtime to an integer value in the range `[0, count] as const).distinct()
objProps.instancedMesh = _instancedMesh
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
] as const).distinct()

export type InstancedMeshProps<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> = Object3DNode<InstancedMesh<TGeometry, TMaterial>, typeof InstancedMesh<TGeometry, TMaterial>, { geometry: TGeometry | undefined; material: TMaterial | undefined; count: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        instancedMesh: { geometry?: BufferGeometry, material?: Material }
    }
}

defaults.instancedMesh = {}

