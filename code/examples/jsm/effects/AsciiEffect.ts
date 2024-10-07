import { AsciiEffectOptions, AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js'
export * from 'three/examples/jsm/effects/AsciiEffect.js'
import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AsciiEffect: typeof AsciiEffect
    }
}

Three.AsciiEffect = AsciiEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            asciiEffect: AsciiEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        asciiEffect: typeof asciiEffect
        asciiEffectOptions: typeof asciiEffectOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        asciiEffect: typeof _asciiEffect
        asciiEffectOptions: typeof _asciiEffectOptions
    }
}



const asciiEffectOptions = ([
    'resolution',
    'scale',
    'color',
    'alpha',
    'block',
    'invert',
] as const).distinct()
consParams.asciiEffectOptions = asciiEffectOptions


const asciiEffect = ([
    'renderer',
    'charSet',
    'options',
] as const).distinct()
consParams.asciiEffect = asciiEffect



const _asciiEffectOptions = ([
    'resolution',
    'scale',
    'color',
    'alpha',
    'block',
    'invert',
] as const).distinct()
objProps.asciiEffectOptions = _asciiEffectOptions


const _asciiEffect = ([
    'domElement',
] as const).distinct()
objProps.asciiEffect = _asciiEffect

export type AsciiEffectProps = Node<AsciiEffect, typeof AsciiEffect, { renderer: WebGLRenderer; charSet?: string; options?: AsciiEffectOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        asciiEffect: Partial<{ renderer: WebGLRenderer; charSet?: string; options?: AsciiEffectOptions; }>
    }
}

defaults.asciiEffect = {}

