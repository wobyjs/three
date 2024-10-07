import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { BoxGeometry } from 'three/src/geometries/BoxGeometry.js'
export { BoxGeometry } from 'three/src/geometries/BoxGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import '../core/BufferGeometry'

declare module '../../lib/3/three'
{
    interface Three {
        BoxGeometry: typeof BoxGeometry
    }
}

Three.BoxGeometry = BoxGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            boxGeometry: BoxGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        boxGeometry: typeof boxGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        boxGeometry: typeof _boxGeometry
    }
}


/**
 * {@link BoxGeometry} is a geometry class for a rectangular cuboid with a given 'width',
'height', and 'depth'
 * @remarks On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const cube = new THREE.Mesh(geometry, material,
 * scene.add(cube,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/BoxGeometry.js}
 */

const boxGeometry = ([
    /**
     * Create a new instance of {@link BoxGeometry}
     * @param width Width, that is, the length of the edges parallel to the X axis. Optional, Expects a `Float`. Default `1`
     * @param height Height, that is, the length of the edges parallel to the Y axis. Optional, Expects a `Float`. Default `1`
     * @param depth Depth, that is, the length of the edges parallel to the Z axis. Optional, Expects a `Float`. Default `1`
     * @param widthSegments Number of segmented rectangular faces along the width of the sides. Optional, Expects a `Integer`. Default `1`
     * @param heightSegments Number of segmented rectangular faces along the height of the sides. Optional, Expects a `Integer`. Default `1`
     * @param depthSegments Number of segmented rectangular faces along the depth of the sides. Optional, Expects a `Integer`. Default `1`
     */

    'width',
    'height',
    'depth',
    'widthSegments',
    'heightSegments',
    'depthSegments',
] as const).distinct()
consParams.boxGeometry = boxGeometry


/**
 * {@link BoxGeometry} is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'
 * @remarks On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(1, 1, 1)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * })
 * const cube = new THREE.Mesh(geometry, material)
 * scene.add(cube)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/BoxGeometry.js | Source}
 */

const _boxGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.boxGeometry = _boxGeometry

export type BoxGeometryProps = BufferGeometryNode<BoxGeometry, typeof BoxGeometry, { width?: number; height?: number; depth?: number; widthSegments?: number; heightSegments?: number; depthSegments?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        boxGeometry: { width?: number; height?: number; depth?: number; widthSegments?: number; heightSegments?: number; depthSegments?: number; }
    }
}

defaults.boxGeometry = { width: 1, height: 1, depth: 1, widthSegments: 1, heightSegments: 1, depthSegments: 1 }