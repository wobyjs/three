import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'
export * from 'three/examples/jsm/loaders/KTX2Loader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        ktx2Loader: string[]
        ktx2LoaderWorkerConfig: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        ktx2Loader: string[]
        ktx2LoaderWorkerConfig: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTX2Loader.d.ts

consParams.ktx2LoaderWorkerConfig = [
    'astcSupported',
    'etc1Supported',
    'etc2Supported',
    'dxtSupported',
    'bptcSupported',
    'pvrtcSupported',
].distinct()


consParams.ktx2Loader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTX2Loader.d.ts

objParams.ktx2LoaderWorkerConfig = [
    'astcSupported',
    'etc1Supported',
    'etc2Supported',
    'dxtSupported',
    'bptcSupported',
    'pvrtcSupported',
].distinct()


objParams.ktx2Loader = [...objParams.loader,
    'transcoderPath',
    'transcoderBinary',
    'transcoderPending',
    'workerPool',
    'workerSourceURL',
    'workerConfig',
].distinct()

export type KTX2LoaderProps = Node<KTX2Loader, typeof KTX2Loader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ktx2Loader: { manager?: LoadingManager; }
    }
}

defaults.ktx2Loader = {}

