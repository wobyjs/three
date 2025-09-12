import { Node } from '../../../three-types'
import { Camera } from 'three/src/cameras/Camera.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'
export * from 'three/examples/jsm/controls/TransformControls.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TransformControls: typeof TransformControls
    }
}

Three.TransformControls = TransformControls

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            transformControls: TransformControlsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        transformControls: typeof transformControls
        transformControlsEventMap: typeof transformControlsEventMap
        transformControlsGizmo: typeof transformControlsGizmo
        transformControlsPlane: typeof transformControlsPlane
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        transformControls: typeof _transformControls
        transformControlsEventMap: typeof _transformControlsEventMap
        transformControlsGizmo: typeof _transformControlsGizmo
        transformControlsPlane: typeof _transformControlsPlane
    }
}



const transformControlsEventMap = ([
    'change',
    'mouseDown',
    'mouseUp',
    'objectChange',
    "camera-changed",
    "object-changed",
    "enabled-changed",
    "axis-changed",
    "mode-changed",
    "translationSnap-changed",
    "rotationSnap-changed",
    "scaleSnap-changed",
    "space-changed",
    "size-changed",
    "dragging-changed",
    "showX-changed",
    "showY-changed",
    "showZ-changed",
    "worldPosition-changed",
    "worldPositionStart-changed",
    "worldQuaternion-changed",
    "worldQuaternionStart-changed",
    "cameraPosition-changed",
    "cameraQuaternion-changed",
    "pointStart-changed",
    "pointEnd-changed",
    "rotationAxis-changed",
    "rotationAngle-changed",
    "eye-changed",
] as const).distinct()
consParams.transformControlsEventMap = transformControlsEventMap

const transformControls = ([
    'object',
    'domElement',
] as const).distinct()
consParams.transformControls = transformControls

const transformControlsGizmo = ([
] as const).distinct()
consParams.transformControlsGizmo = transformControlsGizmo

const transformControlsPlane = ([
] as const).distinct()
consParams.transformControlsPlane = transformControlsPlane



const _transformControlsEventMap = ([...objProps.object3dEventMap,
    'change',
    'mouseDown',
    'mouseUp',
    'objectChange',
    "camera-changed",
    "object-changed",
    "enabled-changed",
    "axis-changed",
    "mode-changed",
    "translationSnap-changed",
    "rotationSnap-changed",
    "scaleSnap-changed",
    "space-changed",
    "size-changed",
    "dragging-changed",
    "showX-changed",
    "showY-changed",
    "showZ-changed",
    "worldPosition-changed",
    "worldPositionStart-changed",
    "worldQuaternion-changed",
    "worldQuaternionStart-changed",
    "cameraPosition-changed",
    "cameraQuaternion-changed",
    "pointStart-changed",
    "pointEnd-changed",
    "rotationAxis-changed",
    "rotationAngle-changed",
    "eye-changed",
] as const).distinct()
objProps.transformControlsEventMap = _transformControlsEventMap

const _transformControls = ([...objProps.object3d,
    'domElement',
    // API
    'camera',
    'object',
    'enabled',
    'axis',
    'mode',
    'translationSnap',
    'rotationSnap',
    'space',
    'size',
    'dragging',
    'showX',
    'showY',
    'showZ',

    'mouseButtons',
] as const).distinct()
objProps.transformControls = _transformControls

const _transformControlsGizmo = ([...objProps.object3d,
    'isTransformControlsGizmo',
    'gizmo',
    'helper',
    'picker',
] as const).distinct()
objProps.transformControlsGizmo = _transformControlsGizmo

const _transformControlsPlane = ([...objProps.mesh,
    'isTransformControlsPlane',
    'mode',
    'axis',
    'space',
    'eye',
    'worldPosition',
    'worldQuaternion',
] as const).distinct()
objProps.transformControlsPlane = _transformControlsPlane

export type TransformControlsProps = Node<TransformControls, typeof TransformControls, { object: Camera; domElement: E }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        transformControls: Partial<{ object: Camera; domElement: E }>
    }
}

defaults.transformControls = {}

