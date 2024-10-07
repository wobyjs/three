import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader.js'
export * from 'three/examples/jsm/loaders/VOXLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VOXLoader: typeof VOXLoader
    }
}

Three.VOXLoader = VOXLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            voxLoader: VOXLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        voxLoader: typeof voxLoader
        chunk: typeof chunk
        voxMesh: typeof voxMesh
        voxData3dTexture: typeof voxData3dTexture
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        voxLoader: typeof _voxLoader
        chunk: typeof _chunk
        voxMesh: typeof _voxMesh
        voxData3dTexture: typeof _voxData3dTexture
    }
}



const chunk = ([
    'palette',
    'size',
    'data',
] as const).distinct()
consParams.chunk = chunk


const voxLoader = ([
    'manager',
] as const).distinct()
consParams.voxLoader = voxLoader


const voxMesh = ([
    'chunk',
] as const).distinct()
consParams.voxMesh = voxMesh


const voxData3dTexture = ([
    'chunk',
] as const).distinct()
consParams.voxData3dTexture = voxData3dTexture



const _chunk = ([
    'palette',
    'size',
    'data',
] as const).distinct()
objProps.chunk = _chunk


const _voxLoader = ([...objProps.loader,
] as const).distinct()
objProps.voxLoader = _voxLoader



const _voxMesh = ([...objProps.mesh,
] as const).distinct()
objProps.voxMesh = _voxMesh



const _voxData3dTexture = ([...objProps.data3dTexture,
] as const).distinct()
objProps.voxData3dTexture = _voxData3dTexture

export type VOXLoaderProps = Node<VOXLoader, typeof VOXLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        voxLoader: { manager?: LoadingManager; }
    }
}

defaults.voxLoader = {}

