import { Object3DNode } from '../../three-types'
import { Group } from 'three/src/objects/Group.js'
export { Group } from 'three/src/objects/Group.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'
import '../core/Object3D'

declare module '../../lib/3/three'
{
    interface Three {
        Group: typeof Group
    }
}

Three.Group = Group

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            group: GroupProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        group: typeof group
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        group: typeof _group
    }
}


/**
 * Its purpose is to make working with groups of objects syntactically clearer.
 * @remarks This is almost identical to an {@link Object3d}
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const cubeA = new THREE.Mesh(geometry, material,
 * cubeA.position.set(100, 100, 0,
 * const cubeB = new THREE.Mesh(geometry, material,
 * cubeB.position.set(-100,
-100, 0,
 * //create a {@link Group} and add the two cubes
 * //These cubes can now be rotated / scaled etc as a {@link Group}  * const {@link Group} = new THREE.Group(,
 * group.add(cubeA,
 * group.add(cubeB,
 * scene.add(group,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Group Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Group.js}
 */

const group = ([
] as const).distinct()
consParams.group = group


/**
 * Its purpose is to make working with groups of objects syntactically clearer.
 * @remarks This is almost identical to an {@link Object3d | Object3d}
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * })
 * const cubeA = new THREE.Mesh(geometry, material)
 * cubeA.position.set(100, 100, 0)
 * const cubeB = new THREE.Mesh(geometry, material)
 * cubeB.position.set(-100, -100, 0)
 * //create a {@link Group} and add the two cubes
 * //These cubes can now be rotated / scaled etc as a {@link Group}  * const {@link Group} = new THREE.Group()
 * group.add(cubeA)
 * group.add(cubeB)
 * scene.add(group)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/objects/Group | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/objects/Group.js | Source}
 */

const _group = ([...objProps.object3d,
] as const).distinct()
objProps.group = _group


export type GroupProps = Object3DNode<Group, typeof Group, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        group: {}
    }
}

defaults.group = {}

