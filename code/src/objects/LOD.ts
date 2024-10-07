import { Object3DNode } from '../../three-types'
import { LOD } from 'three/src/objects/LOD.js'
export { LOD } from 'three/src/objects/LOD.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        LOD: typeof LOD
    }
}

Three.LOD = LOD

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lod: LODProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        lod: typeof lod
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        lod: typeof _lod
    }
}


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

const lod = ([
] as const).distinct()
consParams.lod = lod


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

const _lod = ([
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
] as const).distinct()
objProps.lod = _lod

export type LODProps = Object3DNode<LOD, typeof LOD, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        lOD: {}
    }
}

defaults.lOD = {}

