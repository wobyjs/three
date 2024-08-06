import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { LogLuvLoader } from 'three/examples/jsm/loaders/LogLuvLoader.js'
export * from 'three/examples/jsm/loaders/LogLuvLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LogLuvLoader: typeof LogLuvLoader
    }
}

Three.LogLuvLoader = LogLuvLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            logLuvLoader: LogLuvLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        logLuvLoader: string[]
        logLuv: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        logLuvLoader: string[]
        logLuv: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LogLuvLoader.d.ts

consParams.logLuv = [
    'width',
    'height',
    'data',
    'format',
    'type',
    'flipY',
].distinct()


consParams.logLuvLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LogLuvLoader.d.ts

objParams.logLuv = [
    'width',
    'height',
    'data',
    'format',
    'type',
    'flipY',
].distinct()


objParams.logLuvLoader = [...objParams.dataTextureLoader,
    'type',
].distinct()

export type LogLuvLoaderProps = Node<LogLuvLoader, typeof LogLuvLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        logLuvLoader: { manager?: LoadingManager; }
    }
}

defaults.logLuvLoader = {}

