import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader.js'
export * from 'three/examples/jsm/loaders/RGBMLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        RGBMLoader: typeof RGBMLoader
    }
}

Three.RGBMLoader = RGBMLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rgbmLoader: RGBMLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rgbmLoader: string[]
        rgbm: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        rgbmLoader: string[]
        rgbm: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBMLoader.d.ts

consParams.rgbm = [
    'width',
    'height',
    'data',
    'header',
    'format',
    'type',
    'flipY',
].distinct()

consParams.rgbmLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBMLoader.d.ts

objParams.rgbm = [
    'width',
    'height',
    'data',
    'header',
    'format',
    'type',
    'flipY',
].distinct()


objParams.rgbmLoader = [...objParams.dataTextureLoader,
    'type',
    'maxrange',
].distinct()


export type RGBMLoaderProps = Node<RGBMLoader, typeof RGBMLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rgbmLoader: { manager?: LoadingManager; }
    }
}

defaults.rgbmLoader = {}

