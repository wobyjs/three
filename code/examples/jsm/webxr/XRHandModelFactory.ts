import { Node } from '../../../three-types'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Loader } from 'three/src/loaders/Loader.js'
import { Object3D } from 'three/src/core/Object3D.js'
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory.js'
export * from 'three/examples/jsm/webxr/XRHandModelFactory.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        xrHandModelFactory: string[]
        xrHandModel: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        xrHandModelFactory: string[]
        xrHandModel: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandModelFactory.d.ts

consParams.xrHandModel = [
].distinct()

consParams.xrHandModelFactory = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRHandModelFactory.d.ts    

objParams.xrHandModel = [...objParams.object3d,
    'motionController',
].distinct()

objParams.xrHandModelFactory = [
    'gltfLoader',
    'path',
    'onLoad',
].distinct()

export type XRHandModelFactoryProps = Node<XRHandModelFactory, typeof XRHandModelFactory, { gltfLoader?: Loader<GLTF> | null; onLoad?: ((object: Object3D) => void) | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrHandModelFactory: Partial<{ gltfLoader?: Loader<GLTF> | null; onLoad?: ((object: Object3D) => void) | null; }>
    }
}

defaults.xrHandModelFactory = {}
