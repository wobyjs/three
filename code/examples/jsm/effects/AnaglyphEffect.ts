import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { AnaglyphEffect } from 'three/examples/jsm/effects/AnaglyphEffect.js'
export * from 'three/examples/jsm/effects/AnaglyphEffect.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AnaglyphEffect: typeof AnaglyphEffect
    }
}

Three.AnaglyphEffect = AnaglyphEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            anaglyphEffect: AnaglyphEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        anaglyphEffect: typeof anaglyphEffect
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        anaglyphEffect: typeof _anaglyphEffect
    }
}



const anaglyphEffect = ([
    'renderer',
    'width',
    'height',
] as const).distinct()
consParams.anaglyphEffect = anaglyphEffect



const _anaglyphEffect = ([
    'colorMatrixLeft',
    'colorMatrixright',
] as const).distinct()
objProps.anaglyphEffect = _anaglyphEffect

export type AnaglyphEffectProps = Node<AnaglyphEffect, typeof AnaglyphEffect, { renderer: WebGLRenderer; width?: number; height?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        anaglyphEffect: Partial<{ renderer: WebGLRenderer; width?: number; height?: number; }>
    }
}

defaults.anaglyphEffect = {}

