import { Node } from '../../../three-types'
import { Sky } from 'three/examples/jsm/objects/Sky.js'
export * from 'three/examples/jsm/objects/Sky.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Sky: typeof Sky
    }
}

Three.Sky = Sky

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sky: SkyProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        sky: typeof sky
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        sky: typeof _sky
    }
}



const sky = ([
] as const).distinct()
consParams.sky = sky



const _sky = ([...objProps.mesh,
    'geometry',
    'material',
] as const).distinct()
objProps.sky = _sky

export type SkyProps = Node<Sky, typeof Sky, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        sky: Partial<{}>
    }
}

defaults.sky = {}

