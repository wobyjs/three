import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { BVHLoader } from 'three/examples/jsm/loaders/BVHLoader.js'
export * from 'three/examples/jsm/loaders/BVHLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BVHLoader: typeof BVHLoader
    }
}

Three.BVHLoader = BVHLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bvhLoader: BVHLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        bvhLoader: string[]
        bvh: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        bvhLoader: string[]
        bvh: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\BVHLoader.d.ts

consParams.bvh = [
    'clip',
    'skeleton',
].distinct()


consParams.bvhLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\BVHLoader.d.ts

objParams.bvh = [
    'clip',
    'skeleton',
].distinct()


objParams.bvhLoader = [...objParams.loader,
    'animateBonePositions',
    'animateBoneRotations',
].distinct()


export type BVHLoaderProps = Node<BVHLoader, typeof BVHLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bvhLoader: { manager?: LoadingManager; }
    }
}

defaults.bvhLoader = {}

