import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { EdgesGeometry } from 'three/src/geometries/EdgesGeometry.js'
export * from 'three/src/geometries/EdgesGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        EdgesGeometry: typeof EdgesGeometry
    }
}

Three.EdgesGeometry = EdgesGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            edgesGeometry: EdgesGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        edgesGeometry: typeof edgesGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        edgesGeometry: typeof _edgesGeometry
    }
}


/**
 * This can be used as a helper object to view the edges of a {@link THREE.BufferGeometry}.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(100, 100, 100,
 * const edges = new THREE.EdgesGeometry(geometry,
 * const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
 * color
 * }),
 * scene.add(line,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/EdgesGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/EdgesGeometry.js}
 */

const edgesGeometry = ([
    /**
     * Create a new instance of {@link EdgesGeometry}
     * @param geometry Any geometry object. Default `null`.
     * @param thresholdAngle An edge is only rendered if the angle (in degrees) between the face normals of the adjoining faces exceeds this.value. Expects a `Integer`. Default `1` _degree_.
     */
    'geometry',
    'thresholdAngle',
] as const).distinct()
consParams.edgesGeometry = edgesGeometry


/**
 * This can be used as a helper object to view the edges of a {@link THREE.BufferGeometry | geometry}.
 * @example
 * ```typescript
 * const geometry = new THREE.BoxGeometry(100, 100, 100)
 * const edges = new THREE.EdgesGeometry(geometry)
 * const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({
 *     color: 0xffffff
 * }))
 * scene.add(line)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/EdgesGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/EdgesGeometry.js | Source}
 */

const _edgesGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.edgesGeometry = _edgesGeometry

export type EdgesGeometryProps<TBufferGeometry extends BufferGeometry = BufferGeometry> = BufferGeometryNode<EdgesGeometry<TBufferGeometry>, typeof EdgesGeometry, { geometry?: TBufferGeometry | null; thresholdAngle?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        edgesGeometry: { geometry?: BufferGeometry | null; thresholdAngle?: number; }
    }
}

defaults.edgesGeometry = { thresholdAngle: 1 }
