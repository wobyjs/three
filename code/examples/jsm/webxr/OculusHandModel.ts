import { Node } from '../../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { Loader } from 'three/src/loaders/Loader.js'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OculusHandModel } from 'three/examples/jsm/webxr/OculusHandModel.js'
export * from 'three/examples/jsm/webxr/OculusHandModel.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        OculusHandModel: typeof OculusHandModel
    }
}

Three.OculusHandModel = OculusHandModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            oculusHandModel: OculusHandModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        oculusHandModel: typeof oculusHandModel
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        oculusHandModel: typeof _oculusHandModel
    }
}



const oculusHandModel = ([
    'controller',
    'loader',
    'onLoad',
] as const).distinct()
consParams.oculusHandModel = oculusHandModel



const _oculusHandModel = ([...objProps.object3d,
    'controller',
    'motionController',
    'envMap',
    'loader',
    'onLoad',
    'mesh',
] as const).distinct()
objProps.oculusHandModel = _oculusHandModel

export type OculusHandModelProps = Node<OculusHandModel, typeof OculusHandModel, { controller: Object3D; loader?: Loader<GLTF> | null; onLoad?: ((object: Object3D) => void) | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        oculusHandModel: Partial<{ controller: Object3D; loader?: Loader<GLTF> | null; onLoad?: ((object: Object3D) => void) | null; }>
    }
}

defaults.oculusHandModel = {}

