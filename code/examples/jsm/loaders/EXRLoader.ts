import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
export * from 'three/examples/jsm/loaders/EXRLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        EXRLoader: typeof EXRLoader
    }
}

Three.EXRLoader = EXRLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            exrLoader: EXRLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        exrLoader: string[]
        exr: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        exrLoader: string[]
        exr: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\EXRLoader.d.ts

consParams.exr = [
    'header',
    'width',
    'height',
    'data',
    'format',
    'colorSpace',
    'type',
].distinct()


consParams.exrLoader = [
    'manager',
].distinct()
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\EXRLoader.d.ts

objParams.exr = [
    'header',
    'width',
    'height',
    'data',
    'format',
    'colorSpace',
    'type',
].distinct()


objParams.exrLoader = [...objParams.dataTextureLoader,
    'type',
].distinct()

export type EXRLoaderProps = Node<EXRLoader, typeof EXRLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        exrLoader: { manager?: LoadingManager; }
    }
}

defaults.exrLoader = {}

