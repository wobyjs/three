import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { USDZLoader } from 'three/examples/jsm/loaders/USDZLoader.js'
export * from 'three/examples/jsm/loaders/USDZLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        USDZLoader: typeof USDZLoader
    }
}

Three.USDZLoader = USDZLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            usdzLoader: USDZLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        usdzLoader: string[]
        usdaParser: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        usdzLoader: string[]
        usdaParser: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\usdzLoader.d.ts

consParams.usdaParser = [
].distinct()


consParams.usdzLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\USDZLoader.d.ts

objParams.usdaParser = [
].distinct()


objParams.usdzLoader = [...objParams.loader,
].distinct()

export type USDZLoaderProps = Node<USDZLoader, typeof USDZLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        usdzLoader: { manager?: LoadingManager; }
    }
}

defaults.usdzLoader = {}

