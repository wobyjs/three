import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
export * from 'three/examples/jsm/loaders/RGBELoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        RGBELoader: typeof RGBELoader
    }
}

Three.RGBELoader = RGBELoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rgbeLoader: RGBELoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rgbeLoader: string[]
        rgbe: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        rgbeLoader: string[]
        rgbe: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBELoader.d.ts

consParams.rgbe = [
    'width',
    'height',
    'data',
    'header',
    'gamma',
    'exposure',
    'type',
].distinct()


consParams.rgbeLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\RGBELoader.d.ts

objParams.rgbe = [
    'width',
    'height',
    'data',
    'header',
    'gamma',
    'exposure',
    'type',
].distinct()


objParams.rgbeLoader = [...objParams.dataTextureLoader,
    'type',
].distinct()


export type RGBELoaderProps = Node<RGBELoader, typeof RGBELoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rgbeLoader: { manager?: LoadingManager; }
    }
}

defaults.rgbeLoader = {}

