import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { MDDLoader } from 'three/examples/jsm/loaders/MDDLoader.js'
export * from 'three/examples/jsm/loaders/MDDLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MDDLoader: typeof MDDLoader
    }
}

Three.MDDLoader = MDDLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mddLoader: MDDLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        mddLoader: string[]
        mdd: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        mddLoader: string[]
        mdd: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MDDLoader.d.ts

consParams.mdd = [
    'morphTargets',
    'clip',
].distinct()


consParams.mddLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MDDLoader.d.ts

objParams.mdd = [
    'morphTargets',
    'clip',
].distinct()


objParams.mddLoader = [...objParams.loader,
].distinct()

export type MDDLoaderProps = Node<MDDLoader, typeof MDDLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mddLoader: { manager?: LoadingManager; }
    }
}

defaults.mddLoader = {}

