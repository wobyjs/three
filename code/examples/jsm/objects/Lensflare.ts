import { Node } from '../../../three-types'
import { Lensflare } from 'three/examples/jsm/objects/Lensflare.js'
export * from 'three/examples/jsm/objects/Lensflare.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Lensflare: typeof Lensflare
    }
}

Three.Lensflare = Lensflare

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lensflare: LensflareProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lensflare: typeof lensflare
        lensflareElement: typeof lensflareElement
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lensflare: typeof _lensflare
        lensflareElement: typeof _lensflareElement
    }
}



const lensflareElement = ([
    'texture',
    'size',
    'distance',
    'color',
] as const).distinct()
consParams.lensflareElement = lensflareElement


const lensflare = ([
] as const).distinct()
consParams.lensflare = lensflare



const _lensflareElement = ([
    'texture',
    'size',
    'distance',
    'color',
] as const).distinct()
objProps.lensflareElement = _lensflareElement


const _lensflare = ([...objProps.mesh,
] as const).distinct()
objProps.lensflare = _lensflare

export type LensflareProps = Node<Lensflare, typeof Lensflare, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lensflare: Partial<{}>
    }
}

defaults.lensflare = {}

