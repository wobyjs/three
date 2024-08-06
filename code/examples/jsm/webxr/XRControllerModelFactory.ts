import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Node } from '../../../three-types'
import { Loader } from 'three/src/loaders/Loader.js'
import { Group } from 'three/src/objects/Group.js'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js'
export * from 'three/examples/jsm/webxr/XRControllerModelFactory.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        xrControllerModelFactory: string[]
        xrControllerModel: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        xrControllerModelFactory: string[]
        xrControllerModel: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRControllerModelFactory.d.ts

consParams.xrControllerModel = [
].distinct()


consParams.xrControllerModelFactory = [
    'gltfLoader',
    'onLoad',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XRControllerModelFactory.d.ts    

objParams.xrControllerModel = [...objParams.object3d,
    'motionController',
    'envMap',
].distinct()


objParams.xrControllerModelFactory = [
    'gltfLoader',
    'path',
].distinct()

export type XRControllerModelFactoryProps = Node<XRControllerModelFactory, typeof XRControllerModelFactory, { gltfLoader?: Loader<GLTF> | null; onLoad?: ((scene: Group) => void) | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrControllerModelFactory: Partial<{ gltfLoader?: Loader<GLTF> | null; onLoad?: ((scene: Group) => void) | null; }>
    }
}

defaults.xrControllerModelFactory = {}
