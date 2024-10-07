import { Node } from '../../../three-types'
import { XRButton } from 'three/examples/jsm/webxr/XRButton.js'
export * from 'three/examples/jsm/webxr/XRButton.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        XRButton: typeof XRButton
    }
}

Three.XRButton = XRButton

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrButton: XRButtonProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xrButton: typeof xrButton
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        xrButton: typeof _xrButton
    }
}



const xrButton = ([
] as const).distinct()
consParams.xrButton = xrButton



const _xrButton = ([
] as const).distinct()
objProps.xrButton = _xrButton

export type XRButtonProps = Node<XRButton, typeof XRButton, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrButton: {}
    }
}

defaults.xrButton = {}

