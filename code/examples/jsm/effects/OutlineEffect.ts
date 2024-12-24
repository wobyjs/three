import { OutlineEffectParameters, OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js'
export * from 'three/examples/jsm/effects/OutlineEffect.js'
import { Functionant, Node, WrapAsString } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        OutlineEffect: typeof OutlineEffect
    }
}

Three.OutlineEffect = OutlineEffect

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            outlineEffect: OutlineEffectProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        outlineEffect: typeof outlineEffect
        outlineEffectParameters: WrapAsString<OutlineEffectParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        outlineEffect: typeof _outlineEffect
        outlineEffectParameters: typeof _outlineEffectParameters
    }
}



consParams.outlineEffectParameters = ([
    'defaultThickness',
    'defaultColor',
    'defaultAlpha',
    'defaultKeepAlive',
] as const).toObject()


const outlineEffect = ([
    'renderer',
    'parameters', //outlineEffectParameters
] as const).distinct()
consParams.outlineEffect = outlineEffect



const _outlineEffectParameters = ([
    'defaultThickness',
    'defaultColor',
    'defaultAlpha',
    'defaultKeepAlive',
] as const).distinct()
objProps.outlineEffectParameters = _outlineEffectParameters


const _outlineEffect = ([
    'enabled',
    'autoClear',
    'domElement',
    'shadowMap',
] as const).distinct()
objProps.outlineEffect = _outlineEffect

export type OutlineEffectProps = Node<OutlineEffect, typeof OutlineEffect, { renderer: WebGLRenderer; parameters?: Functionant<OutlineEffectParameters>; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        outlineEffect: Partial<{ renderer: WebGLRenderer; parameters?: Functionant<OutlineEffectParameters>; }>
    }
}

defaults.outlineEffect = {}

