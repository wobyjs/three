import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { ParallaxBarrierEffect } from 'three/examples/jsm/effects/ParallaxBarrierEffect.js'
export * from 'three/examples/jsm/effects/ParallaxBarrierEffect.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ParallaxBarrierEffect: typeof ParallaxBarrierEffect
    }
}

Three.ParallaxBarrierEffect = ParallaxBarrierEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            parallaxBarrierEffect: ParallaxBarrierEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        parallaxBarrierEffect: typeof parallaxBarrierEffect
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        parallaxBarrierEffect: typeof _parallaxBarrierEffect
    }
}



const parallaxBarrierEffect = ([
    'renderer',
] as const).distinct()
consParams.parallaxBarrierEffect = parallaxBarrierEffect



const _parallaxBarrierEffect = ([
] as const).distinct()
objProps.parallaxBarrierEffect = _parallaxBarrierEffect

export type ParallaxBarrierEffectProps = Node<ParallaxBarrierEffect, typeof ParallaxBarrierEffect, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        parallaxBarrierEffect: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.parallaxBarrierEffect = {}

