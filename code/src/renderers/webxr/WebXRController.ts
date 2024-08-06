import { Object3DNode } from '../../../three-types'
import { WebXRController } from 'three/src/renderers/webxr/WebXRController.js'
export { WebXRController } from 'three/src/renderers/webxr/WebXRController.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        webxrController: string[]
        xrJointSpace: string[]
        xrHandInputState: string[]
        webXrSpaceEventMap: string[]
        xrHandSpace: string[]
        xrTargetRaySpace: string[]
        xrGripSpace: string[]
        webXrController: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webxrController: string[]
        xrJointSpace: string[]
        xrHandInputState: string[]
        webXrSpaceEventMap: string[]
        xrHandSpace: string[]
        xrTargetRaySpace: string[]
        xrGripSpace: string[]
        webXrController: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRController.d.ts

consParams.xrJointSpace = [
].distinct()


consParams.xrHandInputState = [
    'pinching',
].distinct()

consParams.webXrSpaceEventMap = [
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
].distinct()


consParams.xrHandSpace = [
].distinct()


consParams.xrTargetRaySpace = [
].distinct()


consParams.xrGripSpace = [
].distinct()


consParams.webXrController = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webxr\WebXRController.d.ts    

objParams.xrJointSpace = [...objParams.group,
].distinct()



objParams.xrHandInputState = [
    'pinching',
].distinct()


objParams.webXrSpaceEventMap = [...objParams.object3dEventMap,
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
].distinct()

objParams.xrHandSpace = [...objParams.group,
].distinct()

objParams.xrTargetRaySpace = [...objParams.group,
    'hasLinearVelocity',
    'hasAngularVelocity',
].distinct()

objParams.xrGripSpace = [...objParams.group,
    'hasLinearVelocity',
    'hasAngularVelocity',
].distinct()

objParams.webXrController = [
].distinct()

export type WebXRControllerProps = Object3DNode<WebXRController, typeof WebXRController, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webXRController: {}
    }
}

defaults.webXRController = {}

