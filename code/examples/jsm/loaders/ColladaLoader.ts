import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'
export * from 'three/examples/jsm/loaders/ColladaLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ColladaLoader: typeof ColladaLoader
    }
}

Three.ColladaLoader = ColladaLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            colladaLoader: ColladaLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        colladaLoader: string[]
        collada: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        colladaLoader: string[]
        collada: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\ColladaLoader.d.ts

consParams.collada = [
    'kinematics',
    'library',
    'scene',
].distinct()


consParams.colladaLoader = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\ColladaLoader.d.ts

objParams.collada = [
    'kinematics',
    'library',
    'scene',
].distinct()


objParams.colladaLoader = [...objParams.loader,
].distinct()

export type ColladaLoaderProps = Node<ColladaLoader, typeof ColladaLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        colladaLoader: { manager?: LoadingManager; }
    }
}

defaults.colladaLoader = {}

