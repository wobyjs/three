import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js'
export * from 'three/examples/jsm/loaders/MMDLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MMDLoader: typeof MMDLoader
    }
}

Three.MMDLoader = MMDLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mmdLoader: MMDLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        mmdLoader: string[]
        mmdLoaderAnimationObject: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        mmdLoader: string[]
        mmdLoaderAnimationObject: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MMDLoader.d.ts

consParams.mmdLoaderAnimationObject = [
    'animation',
    'mesh',
].distinct()


consParams.mmdLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MMDLoader.d.ts

objParams.mmdLoaderAnimationObject = [
    'animation',
    'mesh',
].distinct()


objParams.mmdLoader = [...objParams.loader,
    'animationBuilder',
    'animationPath',
    'loader',
    'meshBuilder',
    'parser',
].distinct()

export type MMDLoaderProps = Node<MMDLoader, typeof MMDLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdLoader: { manager?: LoadingManager; }
    }
}

defaults.mmdLoader = {}

