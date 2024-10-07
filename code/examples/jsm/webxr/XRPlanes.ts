import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { XRPlanes } from 'three/examples/jsm/webxr/XRPlanes.js'
export * from 'three/examples/jsm/webxr/XRPlanes.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        XRPlanes: typeof XRPlanes
    }
}

Three.XRPlanes = XRPlanes

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrPlanes: XRPlanesProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xrPlanes: typeof xrPlanes
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        xrPlanes: typeof _xrPlanes
    }
}



const xrPlanes = ([
    'renderer',
] as const).distinct()
consParams.xrPlanes = xrPlanes



const _xrPlanes = ([...objProps.object3d,
] as const).distinct()
objProps.xrPlanes = _xrPlanes

export type XRPlanesProps = Node<XRPlanes, typeof XRPlanes, { renderer: WebGLRenderer; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrPlanes: { renderer?: WebGLRenderer; }
    }
}

defaults.xrPlanes = {}

