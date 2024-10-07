import { Node } from '../../../three-types'
import Info from 'three/src/renderers/common/Info.js'
export { Info }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Info: typeof Info
    }
}

Three.Info = Info

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            info: InfoProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        info: typeof info
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        info: typeof _info
    }
}



const info = ([
] as const).distinct()
consParams.info = info



const _info = ([
    'autoReset',
    'frame',
    'calls',
    'render',
    'compute',
    'memory',
] as const).distinct()
objProps.info = _info

export type InfoProps = Node<Info, typeof Info, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        info: {}
    }
}

defaults.info = {}

