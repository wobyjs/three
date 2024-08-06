import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export * from 'three/examples/jsm/loaders/GLTFLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        GLTFLoader: typeof GLTFLoader
    }
}

Three.GLTFLoader = GLTFLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gltfLoader: GLTFLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gltfLoader: string[]
        gltfReference: string[]
        gltfParser: string[]
        gltfLoaderPlugin: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        gltfLoader: string[]
        gltfReference: string[]
        gltfParser: string[]
        gltfLoaderPlugin: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\gltfLoader.d.ts
//@ts-ignore
// consParams.gltf = [
//     'path',
//     'animations',
//     'scene',
//     'scenes',
//     'cameras',
//     'asset',
//     'parser',
//     'userData',
// ].distinct()

//     
consParams.gltfLoader = [
    'manager',
].distinct()


consParams.gltfReference = [
    'materials',
    'nodes',
    'textures',
    'meshes',
].distinct()


consParams.gltfParser = [
].distinct()


consParams.gltfLoaderPlugin = [
    'beforeRoot',
    'afterRoot',
    'loadNode',
    'loadMesh',
    'loadBufferView',
    'loadMaterial',
    'loadTexture',
    'getMaterialType',
    'extendMaterialParams',
    'createNodeMesh',
    'createNodeAttachment',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\GlTFLoader.d.ts
//@ts-ignore
// objParams.gltf = [
//     'animations',
//     'scene',
//     'scenes',
//     'cameras',
//     'asset',
//     'parser',
//     'userData',
// ].distinct()


objParams.gltfLoader = [...objParams.loader,
    'dracoLoader',
].distinct()



objParams.gltfReference = [
    'materials',
    'nodes',
    'textures',
    'meshes',
].distinct()


objParams.gltfParser = [
    'json',
    'options',
    'fileLoader',
    'textureLoader',
    'plugins',
    'extensions',
    'associations',
    'getDependency',
    'getDependencies',
    'loadBuffer',
    'loadBufferView',
    'loadAccessor',
    'loadTexture',
    'loadTextureImage',
    'loadImageSource',
    'assignTexture',
    'assignFinalMaterial',
    'getMaterialType',
    'loadMaterial',
    'createUniqueName',
    'createNodeMesh',
    'loadGeometries',
    'loadMesh',
    'loadCamera',
    'loadSkin',
    'loadAnimation',
    'loadNode',
    'loadScene',
].distinct()


objParams.gltfLoaderPlugin = [
    'beforeRoot',
    'afterRoot',
    'loadNode',
    'loadMesh',
    'loadBufferView',
    'loadMaterial',
    'loadTexture',
    'getMaterialType',
    'extendMaterialParams',
    'createNodeMesh',
    'createNodeAttachment',
].distinct()

export type GLTFLoaderProps = Node<GLTFLoader, typeof GLTFLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gltfLoader: { manager?: LoadingManager; }
    }
}

defaults.gltfLoader = {}

