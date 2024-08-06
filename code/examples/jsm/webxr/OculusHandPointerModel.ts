import { Node } from '../../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { OculusHandPointerModel } from 'three/examples/jsm/webxr/OculusHandPointerModel.js'
export * from 'three/examples/jsm/webxr/OculusHandPointerModel.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        oculusHandPointerModel: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        oculusHandPointerModel: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\OculusHandPointerModel.d.ts

consParams.oculusHandPointerModel = [
    'hand',
    'controller',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\OculusHandPointerModel.d.ts    

objParams.oculusHandPointerModel = [...objParams.object3d,
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
].distinct()

export type OculusHandPointerModelProps = Node<OculusHandPointerModel, typeof OculusHandPointerModel, { hand: Object3D; controller: Object3D; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        oculusHandPointerModel: Partial<{ hand: Object3D; controller: Object3D; }>
    }
}

defaults.oculusHandPointerModel = {}

