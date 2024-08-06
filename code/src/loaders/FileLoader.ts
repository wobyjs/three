import { Node } from '../../three-types'
import { FileLoader } from 'three/src/loaders/FileLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        FileLoader: typeof FileLoader
    }
}

Three.FileLoader = FileLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fileLoader: FileLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        fileLoader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        fileLoader: string[]
    }
}


consParams.fileLoader = [
    'manager',
].distinct()


objParams.fileLoader = [...objParams.loader]

export type FileLoaderProps = Node<FileLoader, typeof FileLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        fileLoader: { manager?: LoadingManager }
    }
}

defaults.fileLoader = {}

