import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { PeppersGhostEffect } from 'three/examples/jsm/effects/PeppersGhostEffect.js'
export * from 'three/examples/jsm/effects/PeppersGhostEffect.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PeppersGhostEffect: typeof PeppersGhostEffect
    }
}

Three.PeppersGhostEffect = PeppersGhostEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            peppersGhostEffect: PeppersGhostEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        peppersGhostEffect: typeof peppersGhostEffect
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        peppersGhostEffect: typeof _peppersGhostEffect
    }
}



const peppersGhostEffect = ([
    'renderer',
] as const).distinct()
consParams.peppersGhostEffect = peppersGhostEffect



const _peppersGhostEffect = ([
    'cameraDistance',
    'reflectFromAbove',
] as const).distinct()
objProps.peppersGhostEffect = _peppersGhostEffect

export type PeppersGhostEffectProps = Node<PeppersGhostEffect, typeof PeppersGhostEffect, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        peppersGhostEffect: Partial<{ renderer: WebGLRenderer; }>
    }
}

defaults.peppersGhostEffect = {}

