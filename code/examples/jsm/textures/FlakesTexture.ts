import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js'
export * from 'three/examples/jsm/textures/FlakesTexture.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FlakesTexture: typeof FlakesTexture
    }
}

Three.FlakesTexture = FlakesTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            flakesTexture: FlakesTextureProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        flakesTexture: typeof flakesTexture
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        flakesTexture: typeof _flakesTexture
    }
}



const flakesTexture = ([
    'width',
    'height',
] as const).distinct()
consParams.flakesTexture = flakesTexture



const _flakesTexture = ([
] as const).distinct()
objProps.flakesTexture = _flakesTexture

export type FlakesTextureProps = Node<FlakesTexture, typeof FlakesTexture, { width?: number; height?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        flakesTexture: { width?: number; height?: number; }
    }
}

defaults.flakesTexture = {}

