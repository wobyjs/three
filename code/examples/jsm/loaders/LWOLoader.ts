import { LWOLoaderParameters, LWOLoader } from 'three/examples/jsm/loaders/LWOLoader.js'
export * from 'three/examples/jsm/loaders/LWOLoader.js'
import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        LWOLoader: typeof LWOLoader
    }
}

Three.LWOLoader = LWOLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lwoLoader: LWOLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lwoLoader: string[]
        lwo: string[]
        lwoLoaderParameters: { resourcePath: 'resourcePath' }
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lwoLoader: string[]
        lwo: string[]
        lwoLoaderParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\lwoLoader.d.ts

consParams.lwo = [
    'materials',
    'meshes',
].distinct()


consParams.lwoLoaderParameters = ([
    /**
     * Base content delivery folder path, use when it differs from Lightwave default structure
     */
    'resourcePath',
] as const).toObject()


consParams.lwoLoader = [
    'manager',
    'parameters', //lwoLoaderParameters
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LWOLoader.d.ts

objParams.lwo = [
    'materials',
    'meshes',
].distinct()


objParams.lwoLoaderParameters = [
    /**
     * Base content delivery folder path, use when it differs from Lightwave default structure
     */
    'resourcePath',
].distinct()


objParams.lwoLoader = [...objParams.loader,
].distinct()

export type LWOLoaderProps = Node<LWOLoader, typeof LWOLoader, { manager?: LoadingManager; parameters?: LWOLoaderParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lwoLoader: { manager?: LoadingManager; parameters?: LWOLoaderParameters; }
    }
}

defaults.lwoLoader = {}

