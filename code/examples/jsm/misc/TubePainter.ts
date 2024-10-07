import { Node } from '../../../three-types'
import { TubePainter } from 'three/examples/jsm/misc/TubePainter.js'
export * from 'three/examples/jsm/misc/TubePainter.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TubePainter: typeof TubePainter
    }
}

Three.TubePainter = TubePainter

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tubePainter: TubePainterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tubePainter: typeof tubePainter
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        tubePainter: typeof _tubePainter
    }
}



const tubePainter = ([
] as const).distinct()
consParams.tubePainter = tubePainter



const _tubePainter = ([
    'mesh',
] as const).distinct()
objProps.tubePainter = _tubePainter

export type TubePainterProps = Node<TubePainter, typeof TubePainter, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tubePainter: {}
    }
}

defaults.tubePainter = {}

