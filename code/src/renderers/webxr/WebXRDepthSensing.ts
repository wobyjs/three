import { Node } from '../../../three-types'
// import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebXRDepthSensing } from 'three/src/renderers/webxr/WebXRDepthSensing.js'
export { WebXRDepthSensing } from 'three/src/renderers/webxr/WebXRDepthSensing.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebXRDepthSensing: typeof WebXRDepthSensing
    }
}

Three.WebXRDepthSensing = WebXRDepthSensing

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webXRDepthSensing: WebXRDepthSensingProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xrWebGlDepthInformation: typeof xrWebGlDepthInformation
        webXrDepthSensing: typeof webXrDepthSensing
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        xrWebGlDepthInformation: typeof _xrWebGlDepthInformation
        webXrDepthSensing: typeof _webXrDepthSensing
    }
}


// FIXME Replace by XRWebGlDepthInformation when typed in @types/webxr

const xrWebGlDepthInformation = ([] as const).distinct()
consParams.xrWebGlDepthInformation = xrWebGlDepthInformation

const webXrDepthSensing = ([] as const).distinct()
consParams.webXrDepthSensing = webXrDepthSensing

// FIXME Replace by XRWebGlDepthInformation when typed in @types/webxr

const _xrWebGlDepthInformation = ([] as const).distinct()
objProps.xrWebGlDepthInformation = _xrWebGlDepthInformation


const _webXrDepthSensing = ([
    'texture',
    'mesh',
    'depthNear',
    'depthFar',
] as const).distinct()

objProps.webXrDepthSensing = _webXrDepthSensing

export type WebXRDepthSensingProps = Node<WebXRDepthSensing, typeof WebXRDepthSensing, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webXRDepthSensing: {}
    }
}

defaults.webXRDepthSensing = {}

