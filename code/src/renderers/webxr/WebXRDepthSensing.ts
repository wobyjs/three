import { Object3DNode } from '../../../three-types'
// import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebXRDepthSensing } from 'three/src/renderers/webxr/WebXRDepthSensing.js'
export { WebXRDepthSensing } from 'three/src/renderers/webxr/WebXRDepthSensing.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        webXRDepthSensing: string[]
        xrWebGlDepthInformation: string[]
        webXrDepthSensing: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webXRDepthSensing: string[]
        xrWebGlDepthInformation: string[]
        webXrDepthSensing: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRDepthSensing.d.ts
// FIXME Replace by XRWebGlDepthInformation when typed in @types/webxr

consParams.xrWebGlDepthInformation = []

consParams.webXrDepthSensing = []

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRDepthSensing.d.ts
// FIXME Replace by XRWebGlDepthInformation when typed in @types/webxr

objParams.xrWebGlDepthInformation = [].distinct()


objParams.webXRDepthSensing = [
    'texture',
    'mesh',
    'depthNear',
    'depthFar',
].distinct()


export type WebXRDepthSensingProps = Object3DNode<WebXRDepthSensing, typeof WebXRDepthSensing, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webXRDepthSensing: {}
    }
}

defaults.webXRDepthSensing = {}

