import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Node } from '../../../three-types'
import { Loader } from 'three/src/loaders/Loader.js'
import { Group } from 'three/src/objects/Group.js'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js'
export * from 'three/examples/jsm/webxr/XRControllerModelFactory.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        XRControllerModelFactory: typeof XRControllerModelFactory
    }
}

Three.XRControllerModelFactory = XRControllerModelFactory

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrControllerModelFactory: XRControllerModelFactoryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xrControllerModelFactory: typeof xrControllerModelFactory
        xrControllerModel: typeof xrControllerModel
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        xrControllerModelFactory: typeof _xrControllerModelFactory
        xrControllerModel: typeof _xrControllerModel
    }
}



const xrControllerModel = ([
] as const).distinct()
consParams.xrControllerModel = xrControllerModel


const xrControllerModelFactory = ([
    'gltfLoader',
    'onLoad',
] as const).distinct()
consParams.xrControllerModelFactory = xrControllerModelFactory



const _xrControllerModel = ([...objProps.object3d,
    'motionController',
    'envMap',
] as const).distinct()
objProps.xrControllerModel = _xrControllerModel


const _xrControllerModelFactory = ([
    'gltfLoader',
    'path',
] as const).distinct()
objProps.xrControllerModelFactory = _xrControllerModelFactory

export type XRControllerModelFactoryProps = Node<XRControllerModelFactory, typeof XRControllerModelFactory, { gltfLoader?: Loader<GLTF> | null; onLoad?: ((scene: Group) => void) | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrControllerModelFactory: Partial<{ gltfLoader?: Loader<GLTF> | null; onLoad?: ((scene: Group) => void) | null; }>
    }
}

defaults.xrControllerModelFactory = {}
