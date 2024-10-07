import { Object3DNode } from '../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { Mesh } from 'three/src/objects/Mesh.js'
export { Mesh } from 'three/src/objects/Mesh.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import '../../src/core/Object3D'
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial'

declare module '../../lib/3/three'
{
    interface Three {
        Mesh: typeof Mesh
    }
}

Three.Mesh = Mesh

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mesh: MeshProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        mesh: typeof mesh
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        mesh: typeof _mesh
    }
}


/**
 * Class representing triangular {@link https://en.wikipedia.org/wiki/Polygon_mesh mesh} based objects.
 * @remarks
 * Also serves as a base for other classes such as {@link THREE.SkinnedMesh
 {@link THREE.InstancedMesh}.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const {@link Mesh} = new THREE.Mesh(geometry, material,
 * scene.add(mesh,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Mesh Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Mesh.js}
 */

const mesh = ([ //...consParams.object3d,
    /**
     * Create a new instance of {@link Mesh}
     * @param geometry An instance of {@link THREE.BufferGeometry}. Default {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
     * @param material A single or an array of {@link THREE.Material}. Default {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
     */
    'geometry',
    'material',
] as const).distinct()
consParams.mesh = mesh


/**
 * Class representing triangular {@link https://en.wikipedia.org/wiki/Polygon_mesh | polygon mesh} based objects.
 * @remarks
 * Also serves as a base for other classes such as {@link THREE.SkinnedMesh | SkinnedMesh  {@link THREE.InstancedMesh | InstancedMesh}.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * })
 * const {@link Mesh} = new THREE.Mesh(geometry, material)
 * scene.add(mesh)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Mesh | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Mesh.js | Source}
 */

const _mesh = ([...objProps.object3d,
    // /**
    //  * An instance of {@link THREE.BufferGeometry | BufferGeometry} (or derived classes), defining the object's structure.
    //  * @defaultValue {@link THREE.BufferGeometry | `new THREE.BufferGeometry()`}.
    //  */
    // 'geometry',
    // /**
    //  * An instance of material derived from the {@link THREE.Material | Material} base class or an array of materials, defining the object's appearance.
    //  * @defaultValue {@link THREE.MeshBasicMaterial | `new THREE.MeshBasicMaterial()`}.
    //  */
    // 'material',
    /**
     * An array of weights typically from `0-1` that specify how much of the morph is applied.
     * @defaultValue `undefined`, _but reset to a blank array by {@link updateMorphTargets | .updateMorphTargets()}._
     */
    'morphTargetInfluences',
    /**
     * A dictionary of morphTargets based on the `morphTarget.name` property.
     * @defaultValue `undefined`, _but rebuilt by {@link updateMorphTargets | .updateMorphTargets()}._
     */
    'morphTargetDictionary',
] as const).distinct()
objProps.mesh = _mesh

export type MeshProps<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[]
> = Object3DNode<Mesh<TGeometry, TMaterial>, typeof Mesh<TGeometry, TMaterial>, { geometry?: TGeometry; material?: TMaterial; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        mesh: { geometry?: BufferGeometry, material?: Material }
    }
}

defaults.mesh = { geometry: new BufferGeometry(), material: new MeshBasicMaterial() }
