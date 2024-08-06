import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { WireframeGeometry } from 'three/src/geometries/WireframeGeometry.js'
export { WireframeGeometry } from 'three/src/geometries/WireframeGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        WireframeGeometry: typeof WireframeGeometry
    }
}

Three.WireframeGeometry = WireframeGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wireframeGeometry: WireframeGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        wireframeGeometry: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        wireframeGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\WireframeGeometry.d.ts
/**
 * This can be used as a helper object to view a {@link BufferGeometry} as a wireframe.
 * @example
 * ```typescript
 * const geometry = new THREE.SphereGeometry(100, 100, 100,
 * const wireframe = new THREE.WireframeGeometry(geometry,
 * const line = new THREE.LineSegments(wireframe,
 * line.material.depthTest = false,
 * line.material.opacity = 0.25,
 * line.material.transparent = true,
 * scene.add(line,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/WireframeGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/WireframeGeometry.js}
 */

consParams.wireframeGeometry = [
    /**
     * Create a new instance of {@link WireframeGeometry}
     * @param geometry Any geometry object. Default `null`.
     */
    'geometry',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\WireframeGeometry.d.ts
/**
 * This can be used as a helper object to view a {@link BufferGeometry | geometry} as a wireframe.
 * @example
 * ```typescript
 * const geometry = new THREE.SphereGeometry(100, 100, 100)
 * const wireframe = new THREE.WireframeGeometry(geometry)
 * const line = new THREE.LineSegments(wireframe)
 * line.material.depthTest = false
 * line.material.opacity = 0.25
 * line.material.transparent = true
 * scene.add(line)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/WireframeGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/WireframeGeometry.js | Source}
 */

objParams.wireframeGeometry = [...objParams.bufferGeometry,
].distinct()

export type WireframeGeometryProps<TBufferGeometry extends BufferGeometry = BufferGeometry> = BufferGeometryNode<WireframeGeometry<TBufferGeometry>, typeof WireframeGeometry, { geometry?: TBufferGeometry; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        wireframeGeometry: { geometry?: BufferGeometry }
    }
}

defaults.wireframeGeometry = {}

