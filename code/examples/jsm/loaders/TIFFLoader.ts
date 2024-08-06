import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { TIFFLoader } from 'three/examples/jsm/loaders/TIFFLoader.js'
export * from 'three/examples/jsm/loaders/TIFFLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TIFFLoader: typeof TIFFLoader
    }
}

Three.TIFFLoader = TIFFLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tiffLoader: TIFFLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tiffLoader: string[]
        tiffResult: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        tiffLoader: string[]
        tiffResult: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TIFFLoader.d.ts

consParams.tiffResult = [
    'width',
    'height',
    'data',
    'flipY',
    'magFilter',
    'minFilter',
].distinct()


consParams.tiffLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TIFFLoader.d.ts

objParams.tiffResult = [
    'width',
    'height',
    'data',
    'flipY',
    'magFilter',
    'minFilter',
].distinct()


objParams.tiffLoader = [...objParams.dataTextureLoader,
].distinct()

export type TIFFLoaderProps = Node<TIFFLoader, typeof TIFFLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tiffLoader: { manager?: LoadingManager; }
    }
}

defaults.tiffLoader = {}

