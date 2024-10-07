import { Node } from '../../three-types'
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js'
import { PointLightShadow } from 'three/src/lights/PointLightShadow.js'
export { PointLightShadow } from 'three/src/lights/PointLightShadow.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './LightShadow'

declare module '../../lib/3/three'
{
    interface Three {
        PointLightShadow: typeof PointLightShadow
    }
}

Three.PointLightShadow = PointLightShadow

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointLightShadow: PointLightShadowProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        pointLightShadow: typeof pointLightShadow
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        pointLightShadow: typeof _pointLightShadow
    }
}


/**
 * Shadow for {@link THREE.PointLight}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js}
 */

const pointLightShadow = ([
] as const).distinct()
consParams.pointLightShadow = pointLightShadow


/**
 * Shadow for {@link THREE.PointLight | PointLight}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/PointLightShadow.js | Source}
 */

const _pointLightShadow = ([...objProps.lightShadow,
] as const).distinct()
objProps.pointLightShadow = _pointLightShadow

export type PointLightShadowProps = Node<PointLightShadow, typeof PointLightShadow, { camera: PerspectiveCamera; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        pointLightShadow: Partial<{ camera: PerspectiveCamera; }>
    }
}

defaults.pointLightShadow = {}

