import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { BVHLoader } from 'three/examples/jsm/loaders/BVHLoader.js'
export * from 'three/examples/jsm/loaders/BVHLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        bvhLoader: typeof bvhLoader
        bvh: typeof bvh
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        bvhLoader: typeof _bvhLoader
        bvh: typeof _bvh
    }
}



const bvh = ([
    'clip',
    'skeleton',
] as const).distinct()
consParams.bvh = bvh


const bvhLoader = ([
    'manager',
] as const).distinct()
consParams.bvhLoader = bvhLoader



const _bvh = ([
    'clip',
    'skeleton',
] as const).distinct()
objProps.bvh = _bvh


const _bvhLoader = ([...objProps.loader,
    'animateBonePositions',
    'animateBoneRotations',
] as const).distinct()
objProps.bvhLoader = _bvhLoader


export type BVHLoaderProps = Node<BVHLoader, typeof BVHLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bvhLoader: { manager?: LoadingManager; }
    }
}

defaults.bvhLoader = {}

