import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'
export * from 'three/examples/jsm/loaders/KTX2Loader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        KTX2Loader: typeof KTX2Loader
    }
}

Three.KTX2Loader = KTX2Loader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ktx2Loader: KTX2LoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ktx2Loader: typeof ktx2Loader
        ktx2LoaderWorkerConfig: typeof ktx2LoaderWorkerConfig
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ktx2Loader: typeof _ktx2Loader
        ktx2LoaderWorkerConfig: typeof _ktx2LoaderWorkerConfig
    }
}



const ktx2LoaderWorkerConfig = ([
    'astcSupported',
    'etc1Supported',
    'etc2Supported',
    'dxtSupported',
    'bptcSupported',
    'pvrtcSupported',
] as const).distinct()
consParams.ktx2LoaderWorkerConfig = ktx2LoaderWorkerConfig


const ktx2Loader = ([
    'manager',
] as const).distinct()
consParams.ktx2Loader = ktx2Loader



const _ktx2LoaderWorkerConfig = ([
    'astcSupported',
    'etc1Supported',
    'etc2Supported',
    'dxtSupported',
    'bptcSupported',
    'pvrtcSupported',
] as const).distinct()
objProps.ktx2LoaderWorkerConfig = _ktx2LoaderWorkerConfig


const _ktx2Loader = ([...objProps.loader,
    'transcoderPath',
    'transcoderBinary',
    'transcoderPending',
    'workerPool',
    'workerSourceURL',
    'workerConfig',
] as const).distinct()
objProps.ktx2Loader = _ktx2Loader

export type KTX2LoaderProps = Node<KTX2Loader, typeof KTX2Loader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ktx2Loader: { manager?: LoadingManager; }
    }
}

defaults.ktx2Loader = {}

