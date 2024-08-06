import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { SphereGeometry } from 'three/src/geometries/SphereGeometry.js'
export { SphereGeometry } from 'three/src/geometries/SphereGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        SphereGeometry: typeof SphereGeometry
    }
}

Three.SphereGeometry = SphereGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sphereGeometry: SphereGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        sphereGeometry: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        sphereGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\SphereGeometry.d.ts
/**
 * A class for generating sphere geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.SphereGeometry(15, 32, 16,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const sphere = new THREE.Mesh(geometry, material,
 * scene.add(sphere,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/SphereGeometry.js}
 */

consParams.sphereGeometry = [
    /**
     * Create a new instance of {@link SphereGeometry}
     * @remarks
     * The geometry is created by sweeping and calculating vertexes
     * around the **Y** axis (horizontal sweep) and the **Z** axis (vertical sweep)
     * Thus, incomplete spheres (akin to `'sphere slices'`) can be created
     * through the use of different values of {@link phiStart
{@link phiLength
{@link thetaStart} and {@link thetaLength
     * in order to define the points in which we start (or end) calculating those vertices.
     * @param radius Sphere radius. Expects a `Float`. Default `1`
     * @param widthSegments Number of horizontal segments. Minimum value is 3, and the Expects a `Integer`. Default `32`
     * @param heightSegments Number of vertical segments. Minimum value is 2, and the Expects a `Integer`. Default `16`
     * @param phiStart Specify horizontal starting angle. Expects a `Float`. Default `0`
     * @param phiLength Specify horizontal sweep angle size. Expects a `Float`. Default `Math.PI * 2`
     * @param thetaStart Specify vertical starting angle. Expects a `Float`. Default `0`
     * @param thetaLength Specify vertical sweep angle size. Expects a `Float`. Default `Math.PI`
     */

    'radius',
    'widthSegments',
    'heightSegments',
    'phiStart',
    'phiLength',
    'thetaStart',
    'thetaLength',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\SphereGeometry.d.ts
/**
 * A class for generating sphere geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.SphereGeometry(15, 32, 16)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * })
 * const sphere = new THREE.Mesh(geometry, material)
 * scene.add(sphere)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/SphereGeometry.js | Source}
 */

objParams.sphereGeometry = [...objParams.bufferGeometry, ...objParams.parametricGeometry,
].distinct()

export type SphereGeometryProps = BufferGeometryNode<SphereGeometry, typeof SphereGeometry, { radius?: number; widthSegments?: number; heightSegments?: number; phiStart?: number; phiLength?: number; thetaStart?: number; thetaLength?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        sphereGeometry: { radius?: number; widthSegments?: number; heightSegments?: number; phiStart?: number; phiLength?: number; thetaStart?: number; thetaLength?: number; }
    }
}

defaults.sphereGeometry = { radius: 1, widthSegments: 32, heightSegments: 16, phiStart: 0, phiLength: Math.PI * 2, thetaStart: 0, thetaLength: Math.PI, }
