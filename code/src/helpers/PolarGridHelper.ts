import { Object3DNode } from '../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { PolarGridHelper } from 'three/src/helpers/PolarGridHelper.js'
export { PolarGridHelper } from 'three/src/helpers/PolarGridHelper.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        PolarGridHelper: typeof PolarGridHelper
    }
}

Three.PolarGridHelper = PolarGridHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            polarGridHelper: PolarGridHelperProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        polarGridHelper: typeof polarGridHelper
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        polarGridHelper: typeof _polarGridHelper
    }
}


/**
 * The {@link PolarGridHelper} is an object to define polar grids
 * @remarks
 * Grids are two-dimensional arrays of lines.
 * @example
 * ```typescript
 * const radius = 10,
 * const sectors = 16,
 * const rings = 8,
 * const divisions = 64,
 * const helper = new THREE.PolarGridHelper(radius, sectors, rings, divisions,
 * scene.add(helper,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PolarGridHelper Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PolarGridHelper.js}
 */

const polarGridHelper = ([
    /**
     * Creates a new {@link PolarGridHelper} of radius 'radius' with 'sectors' number of sectors and 'rings' number of rings, where each circle is smoothed into 'divisions' number of line segments.
     * @remarks Colors are optional.
     * @param radius The radius of the polar grid. This can be any positive number. Default `10`.
     * @param sectors The number of sectors the grid will be divided into. This can be any positive integer. Default `16`.
     * @param rings The number of rings. This can be any positive integer. Default `8`.
     * @param divisions The number of line segments used for each circle. This can be any positive integer that is 3 or greater. Default `64`.
     * @param color1 The first color used for grid elements. This can be a {@link THREE.Color a hexadecimal value and an css-Color name. Default `0x444444`.
     * @param color2 The second color used for grid elements. This can be a {@link THREE.Color a hexadecimal value and an css-Color name. Default `0x888888`.
     */

    'radius',
    'sectors',
    'rings',
    'divisions',
    'color1',
    'color2',
] as const).distinct()
consParams.polarGridHelper = polarGridHelper


/**
 * The {@link PolarGridHelper} is an object to define polar grids
 * @remarks
 * Grids are two-dimensional arrays of lines.
 * @example
 * ```typescript
 * const radius = 10
 * const sectors = 16
 * const rings = 8
 * const divisions = 64
 * const helper = new THREE.PolarGridHelper(radius, sectors, rings, divisions)
 * scene.add(helper)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_helpers | WebGl / helpers}
 * @see {@link https://threejs.org/docs/index.html#api/en/helpers/PolarGridHelper | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/helpers/PolarGridHelper.js | Source}
 */

const _polarGridHelper = ([...objProps.lineSegments,
] as const).distinct()
objProps.polarGridHelper = _polarGridHelper

export type PolarGridHelperProps = Object3DNode<PolarGridHelper, typeof PolarGridHelper, { radius?: number; radials?: number; circles?: number; divisions?: number; color1?: ColorRepresentation; color2?: ColorRepresentation; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        polarGridHelper: { radius?: number; sectors?: number; rings?: number; divisions?: number; color1?: ColorRepresentation; color2?: ColorRepresentation; }
    }
}

defaults.polarGridHelper = { radius: 10, sectors: 16, rings: 8, divisions: 64, color1: 4473924, color2: 8947848, }
