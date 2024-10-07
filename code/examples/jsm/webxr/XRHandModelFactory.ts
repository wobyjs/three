import { Node } from '../../../three-types'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Loader } from 'three/src/loaders/Loader.js'
import { Object3D } from 'three/src/core/Object3D.js'
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory.js'
export * from 'three/examples/jsm/webxr/XRHandModelFactory.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        XRHandModelFactory: typeof XRHandModelFactory
    }
}

Three.XRHandModelFactory = XRHandModelFactory

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrHandModelFactory: XRHandModelFactoryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xrHandModelFactory: typeof xrHandModelFactory
        xrHandModel: typeof xrHandModel
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        xrHandModelFactory: typeof _xrHandModelFactory
        xrHandModel: typeof _xrHandModel
    }
}



const xrHandModel = ([
] as const).distinct()
consParams.xrHandModel = xrHandModel

const xrHandModelFactory = ([
] as const).distinct()
consParams.xrHandModelFactory = xrHandModelFactory



const _xrHandModel = ([...objProps.object3d,
    'motionController',
] as const).distinct()
objProps.xrHandModel = _xrHandModel

const _xrHandModelFactory = ([
    'gltfLoader',
    'path',
    'onLoad',
] as const).distinct()
objProps.xrHandModelFactory = _xrHandModelFactory

export type XRHandModelFactoryProps = Node<XRHandModelFactory, typeof XRHandModelFactory, { gltfLoader?: Loader<GLTF> | null; onLoad?: ((object: Object3D) => void) | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrHandModelFactory: Partial<{ gltfLoader?: Loader<GLTF> | null; onLoad?: ((object: Object3D) => void) | null; }>
    }
}

defaults.xrHandModelFactory = {}
