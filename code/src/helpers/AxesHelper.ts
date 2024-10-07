import { Object3DNode } from '../../three-types'
import { AxesHelper } from 'three/src/helpers/AxesHelper.js'
export { AxesHelper } from 'three/src/helpers/AxesHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import '../../src/core/Object3D'

declare module '../../lib/3/three'
{
    interface Three {
        AxesHelper: typeof AxesHelper
    }
}

Three.AxesHelper = AxesHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            axesHelper: AxesHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        axesHelper: typeof axesHelper
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        axesHelper: typeof _axesHelper
    }
}


/**
 * An axis object to visualize the 3 axes in a simple way.
 * @remarks
 * The X axis is red
 * The Y axis is green
 * The Z axis is blue.
 * @example
 * ```typescript
 * const {@link AxesHelper} = new THREE.AxesHelper(5,
 * scene.add(axesHelper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_compression / buffergeometry / compression}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_convex / geometry / convex}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd / loader / nrrd}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/AxesHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/AxesHelper.js}
 */

const axesHelper = ([
    /**
     * Create a new instance of {@link AxesHelper}
     * @param size Size of the lines representing the axes. Default `1`
     */
    'size',
] as const).distinct()
consParams.axesHelper = axesHelper


/**
 * An axis object to visualize the 3 axes in a simple way.
 * @remarks
 * The X axis is red
 * The Y axis is green
 * The Z axis is blue.
 * @example
 * ```typescript
 * const {@link AxesHelper} = new THREE.AxesHelper(5)
 * scene.add(axesHelper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry_compression | WebGl / buffergeometry / compression}
 * @see Example: {@link https://threejs.org/examples/#webgl_geometry_convex | WebGl / geometry / convex}
 * @see Example: {@link https://threejs.org/examples/#webgl_loader_nrrd | WebGl / loader / nrrd}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/AxesHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/AxesHelper.js | Source}
 */

const _axesHelper = ([...objProps.lineSegments,
] as const).distinct()
objProps.axesHelper = _axesHelper

export type AxesHelperProps = Object3DNode<AxesHelper, typeof AxesHelper, { size?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        axesHelper: { size?: number; }
    }
}

defaults.axesHelper = { size: 1 }
