import { Node } from '../../../three-types'
import { WebXRController } from 'three/src/renderers/webxr/WebXRController.js'
export { WebXRController } from 'three/src/renderers/webxr/WebXRController.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../src/objects/Group'

declare module '../../../lib/3/three'
{
    interface Three {
        WebXRController: typeof WebXRController
    }
}

Three.WebXRController = WebXRController

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webxrController: WebXRControllerProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webxrController: typeof webXrController
        xrJointSpace: typeof xrJointSpace
        xrHandInputState: typeof xrHandInputState
        webXrSpaceEventMap: typeof webXrSpaceEventMap
        xrHandSpace: typeof xrHandSpace
        xrTargetRaySpace: typeof xrTargetRaySpace
        xrGripSpace: typeof xrGripSpace
        webXrController: typeof webXrController
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webxrController: typeof _webXrController
        xrJointSpace: typeof _xrJointSpace
        xrHandInputState: typeof _xrHandInputState
        webXrSpaceEventMap: typeof _webXrSpaceEventMap
        xrHandSpace: typeof _xrHandSpace
        xrTargetRaySpace: typeof _xrTargetRaySpace
        xrGripSpace: typeof _xrGripSpace
        webXrController: typeof _webXrController
    }
}



const xrJointSpace = ([
] as const).distinct()
consParams.xrJointSpace = xrJointSpace


const xrHandInputState = ([
    'pinching',
] as const).distinct()
consParams.xrHandInputState = xrHandInputState

const webXrSpaceEventMap = ([
    'select',
    'selectstart',
    'selectend',
    'squeeze',
    'squeezestart',
    'squeezeend',
    'connected',
    'disconnected',
    'pinchend',
    'pinchstart',
    'move',
] as const).distinct()
consParams.webXrSpaceEventMap = webXrSpaceEventMap


const xrHandSpace = ([
] as const).distinct()
consParams.xrHandSpace = xrHandSpace


const xrTargetRaySpace = ([
] as const).distinct()
consParams.xrTargetRaySpace = xrTargetRaySpace


const xrGripSpace = ([
] as const).distinct()
consParams.xrGripSpace = xrGripSpace


const webXrController = ([
] as const).distinct()
consParams.webXrController = webXrController



const _xrJointSpace = ([...objProps.group,
] as const).distinct()
objProps.xrJointSpace = _xrJointSpace



const _xrHandInputState = ([
    'pinching',
] as const).distinct()
objProps.xrHandInputState = _xrHandInputState


const _webXrSpaceEventMap = ([...objProps.object3dEventMap,
    'select',
    'selectstart',
    'selectend',
    'squeeze',
    'squeezestart',
    'squeezeend',
    'connected',
    'disconnected',
    'pinchend',
    'pinchstart',
    'move',
] as const).distinct()
objProps.webXrSpaceEventMap = _webXrSpaceEventMap

const _xrHandSpace = ([...objProps.group,
] as const).distinct()
objProps.xrHandSpace = _xrHandSpace

const _xrTargetRaySpace = ([...objProps.group,
    'hasLinearVelocity',
    'hasAngularVelocity',
] as const).distinct()
objProps.xrTargetRaySpace = _xrTargetRaySpace

const _xrGripSpace = ([...objProps.group,
    'hasLinearVelocity',
    'hasAngularVelocity',
] as const).distinct()
objProps.xrGripSpace = _xrGripSpace

const _webXrController = ([
] as const).distinct()
objProps.webXrController = _webXrController

export type WebXRControllerProps = Node<WebXRController, typeof WebXRController, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webXRController: {}
    }
}

defaults.webXRController = {}

