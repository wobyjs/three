import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
export * from 'three/examples/jsm/loaders/GLTFLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        gltfLoader: typeof gltfLoader
        gltfReference: typeof gltfReference
        gltfParser: typeof gltfParser
        gltfLoaderPlugin: typeof gltfLoaderPlugin
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        gltfLoader: typeof _gltfLoader
        gltfReference: typeof _gltfReference
        gltfParser: typeof _gltfParser
        gltfLoaderPlugin: typeof _gltfLoaderPlugin
    }
}


//@ts-ignore
// const gltf = ([
//     'path',
//     'animations',
//     'scene',
//     'scenes',
//     'cameras',
//     'asset',
//     'parser',
//     'userData',
// ] as const).distinct()
consParams.gltf = gltf

//     
const gltfLoader = ([
    'manager',
] as const).distinct()
consParams.gltfLoader = gltfLoader


const gltfReference = ([
    'materials',
    'nodes',
    'textures',
    'meshes',
] as const).distinct()
consParams.gltfReference = gltfReference


const gltfParser = ([
] as const).distinct()
consParams.gltfParser = gltfParser


const gltfLoaderPlugin = ([
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
] as const).distinct()
consParams.gltfLoaderPlugin = gltfLoaderPlugin


//@ts-ignore
// const _gltf = ([
//     'animations',
//     'scene',
//     'scenes',
//     'cameras',
//     'asset',
//     'parser',
//     'userData',
// ] as const).distinct()
objProps.gltf = _gltf


const _gltfLoader = ([...objProps.loader,
    'dracoLoader',
] as const).distinct()
objProps.gltfLoader = _gltfLoader



const _gltfReference = ([
    'materials',
    'nodes',
    'textures',
    'meshes',
] as const).distinct()
objProps.gltfReference = _gltfReference


const _gltfParser = ([
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
] as const).distinct()
objProps.gltfParser = _gltfParser


const _gltfLoaderPlugin = ([
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
] as const).distinct()
objProps.gltfLoaderPlugin = _gltfLoaderPlugin

export type GLTFLoaderProps = Node<GLTFLoader, typeof GLTFLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gltfLoader: { manager?: LoadingManager; }
    }
}

defaults.gltfLoader = {}

