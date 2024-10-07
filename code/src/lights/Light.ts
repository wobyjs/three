import { LightNode } from './LightNode'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { Light } from 'three/src/lights/Light.js'
export { Light } from 'three/src/lights/Light.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import '../../src/core/Object3D'

declare module '../../lib/3/three'
{
    interface Three {
        Light: typeof Light
    }
}

Three.Light = Light

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            light: LightProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        light: typeof light
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        light: typeof _light
    }
}


/**
 * Abstract base class for lights.
 * @remarks All other light types inherit the properties and methods described here.
 */

const light = ([
    /**
     * Creates a new {@link Light}
     * @remarks
     * **Note** that this.is not intended to be called directly (use one of derived classes instead).
     * @param color Hexadecimal color of the light. Default `0xffffff` _(white)_.
     * @param intensity Numeric value of the light's strength/intensity. Expects a `Float`. Default `1`.
     */
    'color',
    'intensity',
] as const).distinct()
consParams.light = light


/**
 * Abstract base class for lights.
 * @remarks All other light types inherit the properties and methods described here.
 */

const _light = ([...objProps.object3d,
    /**
     * Color of the light. \
     * @defaultValue `new THREE.Color(0xffffff)` _(white)_.
     */
    'color',
    /**
     * The light's intensity, or strength.
     * The units of intensity depend on the type of light.
     * @defaultValue `1`
     */
    'intensity',
    /**
     * A {@link THREE.LightShadow | LightShadow} used to calculate shadows for this light.
     * @remarks Available only on Light's that support shadows.
     */
    'shadow',
] as const).distinct()
objProps.light = _light

export type LightProps = LightNode<Light, typeof Light, { color?: ColorRepresentation; intensity?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        light: { color?: ColorRepresentation; intensity?: number; }
    }
}

defaults.light = { color: 16777215, intensity: 1 }
