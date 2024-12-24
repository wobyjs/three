import { Object3DNode } from '../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js'
export { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Mesh'

declare module '../../lib/3/three'
{
    interface Three {
        SkinnedMesh: typeof SkinnedMesh
    }
}

Three.SkinnedMesh = SkinnedMesh

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            skinnedMesh: SkinnedMeshProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        skinnedMesh: typeof skinnedMesh
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        skinnedMesh: typeof _skinnedMesh
    }
}


/**
 * A mesh that has a {@link THREE.Skeleton} with {@link Bone} that can then be used to animate the vertices of the geometry.
 * @example
 * ```typescript
 * const geometry = new THREE.CylinderGeometry(5, 5, 5, 5, 15, 5, 30,
 * // create the skin indices and skin weights manually
 * // (typically a loader would read this.data from a 3d model for you)
 * const position = geometry.attributes.position,
 * const vertex = new THREE.Vector3(,
 * const skinIndices = ,
 * const skinWeights = ,
 * for (let i = 0, i & lt, position.count, i++) {
 * vertex.fromBufferAttribute(position, i,
 *     // compute skinIndex and skinWeight based on some configuration data
 * const y = (vertex.y + sizing.halfHeight,
 * const skinIndex = Math.floor(y / sizing.segmentHeight,
 * const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight,
 * skinIndices.push(skinIndex, skinIndex + 1, 0, 0,
 * skinWeights.push(1 - skinWeight, skinWeight, 0, 0,
 * }
 * geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4),
 * geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4),
 * // create skinned mesh and skeleton
 * const mesh = new THREE.SkinnedMesh(geometry, material,
 * const skeleton = new THREE.Skeleton(bones,
 * // see example from THREE.Skeleton
 * const rootBone = skeleton.bones[0].distinct()
 * mesh.add(rootBone,
 * // bind the skeleton to the mesh
 * mesh.bind(skeleton,
 * // move the bones and manipulate the model
 * skeleton.bones[0].rotation.x = -0.1,
 * skeleton.bones[1].rotation.x = 0.2,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/SkinnedMesh Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/SkinnedMesh.js}
 */

const skinnedMesh = ([
    /**
     * Create a new instance of {@link SkinnedMesh}
     * @param geometry An instance of {@link THREE.BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material A single or an array of {@link THREE.Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     */
    'geometry',
    'material',
    'useVertexTexture',
] as const).distinct()
consParams.skinnedMesh = skinnedMesh


/**
 * A mesh that has a {@link THREE.Skeleton | Skeleton} with {@link Bone | bones} that can then be used to animate the vertices of the geometry.
 * @example
 * ```typescript
 * const geometry = new THREE.CylinderGeometry(5, 5, 5, 5, 15, 5, 30)
 * // create the skin indices and skin weights manually
 * // (typically a loader would read this data from a 3d model for you)
 * const position = geometry.attributes.position
 * const vertex = new THREE.Vector3()
 * const skinIndices = [].distinct()
 
 * const skinWeights = [].distinct()
 
 * for (let i = 0; i & lt; position.count; i++) {
 *     vertex.fromBufferAttribute(position, i)
 *     // compute skinIndex and skinWeight based on some configuration data
 *     const y = (vertex.y + sizing.halfHeight)
 *     const skinIndex = Math.floor(y / sizing.segmentHeight)
 *     const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight
 *     skinIndices.push(skinIndex, skinIndex + 1, 0, 0)
 *     skinWeights.push(1 - skinWeight, skinWeight, 0, 0)
 * }
 * geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4))
 * geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4))
 * // create skinned mesh and skeleton
 * const mesh = new THREE.SkinnedMesh(geometry, material)
 * const skeleton = new THREE.Skeleton(bones)
 * // see example from THREE.Skeleton
 * const rootBone = skeleton.bones[0].distinct()
 
 * mesh.add(rootBone)
 * // bind the skeleton to the mesh
 * mesh.bind(skeleton)
 * // move the bones and manipulate the model
 * skeleton.bones[0].distinct()
.rotation.x = -0.1
 * skeleton.bones[1].distinct()
.rotation.x = 0.2
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/SkinnedMesh | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/SkinnedMesh.js | Source}
 */

const _skinnedMesh = ([...objProps.mesh,
    /**
     * Either {@link AttachedBindMode} or {@link DetachedBindMode}. {@link AttachedBindMode} means the skinned mesh
     * shares the same world space as the skeleton. This is not true when using {@link DetachedBindMode} which is useful
     * when sharing a skeleton across multiple skinned meshes.
     * @defaultValue `AttachedBindMode`
     */
    'bindMode',
    /**
     * The base matrix that is used for the bound bone transforms.
     */
    'bindMatrix',
    /**
     * The base matrix that is used for resetting the bound bone transforms.
     */
    'bindMatrixInverse',
    /**
     * The bounding box of the SkinnedMesh. Can be calculated with {@link computeBoundingBox | .computeBoundingBox()}.
     * @default `null`
     */
    'boundingBox',
    /**
     * The bounding box of the SkinnedMesh. Can be calculated with {@link computeBoundingSphere | .computeBoundingSphere()}.
     * @default `null`
     */
    'boundingSphere',
    /**
     * {@link THREE.Skeleton | Skeleton} representing the bone hierarchy of the skinned mesh.
     */
    'skeleton',
] as const).distinct()
objProps.skinnedMesh = _skinnedMesh

export type SkinnedMeshProps<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> = Object3DNode<SkinnedMesh<TGeometry, TMaterial>, typeof SkinnedMesh<TGeometry, TMaterial>, { geometry?: TGeometry; material?: TMaterial; useVertexTexture?: boolean; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        skinnedMesh: { geometry?: BufferGeometry, material?: Material, useVertexTexture?: boolean }
    }
}

defaults.skinnedMesh = {}


