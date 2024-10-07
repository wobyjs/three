import { Node } from '../../three-types'
import { FileLoader } from 'three/src/loaders/FileLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        fileLoader: typeof fileLoader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        fileLoader: typeof _fileLoader
    }
}


const fileLoader = ([
    'manager',
] as const).distinct()
consParams.fileLoader = fileLoader

const _fileLoader = ([...objProps.loader] as const).distinct()
objProps.fileLoader = _fileLoader

export type FileLoaderProps = Node<FileLoader, typeof FileLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        fileLoader: { manager?: LoadingManager }
    }
}

defaults.fileLoader = {}

