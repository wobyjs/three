import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { StereoEffect } from 'three/examples/jsm/effects/StereoEffect.js'
export * from 'three/examples/jsm/effects/StereoEffect.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        StereoEffect: typeof StereoEffect
    }
}

Three.StereoEffect = StereoEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stereoEffect: StereoEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        stereoEffect: typeof stereoEffect
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        stereoEffect: typeof _stereoEffect
    }
}



const stereoEffect = ([
    'renderer',
] as const).distinct()
consParams.stereoEffect = stereoEffect



const _stereoEffect = ([
] as const).distinct()
objProps.stereoEffect = _stereoEffect

export type StereoEffectProps = Node<StereoEffect, typeof StereoEffect, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stereoEffect: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.stereoEffect = {}

