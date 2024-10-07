import { Node } from '../../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import Color4 from 'three/src/renderers/common/Color4.js'
export { Color4 }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Color4: typeof Color4
    }
}

Three.Color4 = Color4

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            color4: Color4Props,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        color4: typeof color4
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        color4: typeof _color4
    }
}



const color4 = ([
    'r',
    'g',
    'b',
    'a',
] as const).distinct()
consParams.color4 = color4



const _color4 = ([...objProps.color,
] as const).distinct()
objProps.color4 = _color4

export type Color4Props = Node<Color4, typeof Color4, { color?: ColorRepresentation; } | { r: number; g: number; b: number; a?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        color4: { color?: ColorRepresentation; } | { r: number; g: number; b: number; a?: number; }
    }
}

defaults.color4 = {}

