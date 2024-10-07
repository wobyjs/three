import { Node } from '../../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { OculusHandPointerModel } from 'three/examples/jsm/webxr/OculusHandPointerModel.js'
export * from 'three/examples/jsm/webxr/OculusHandPointerModel.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        OculusHandPointerModel: typeof OculusHandPointerModel
    }
}

Three.OculusHandPointerModel = OculusHandPointerModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            oculusHandPointerModel: OculusHandPointerModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        oculusHandPointerModel: typeof oculusHandPointerModel
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        oculusHandPointerModel: typeof _oculusHandPointerModel
    }
}



const oculusHandPointerModel = ([
    'hand',
    'controller',
] as const).distinct()
consParams.oculusHandPointerModel = oculusHandPointerModel



const _oculusHandPointerModel = ([...objProps.object3d,
    'hand',
    'controller',
    'motionController',
    'envMap',
    'mesh',
    'pointerGeometry',
    'pointerMesh',
    'pointerObject',
    'pinched',
    'attached',
    'cursorObject',
    'raycaster',
    'visible',
    'xrInputSource',
] as const).distinct()
objProps.oculusHandPointerModel = _oculusHandPointerModel

export type OculusHandPointerModelProps = Node<OculusHandPointerModel, typeof OculusHandPointerModel, { hand: Object3D; controller: Object3D; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        oculusHandPointerModel: Partial<{ hand: Object3D; controller: Object3D; }>
    }
}

defaults.oculusHandPointerModel = {}

