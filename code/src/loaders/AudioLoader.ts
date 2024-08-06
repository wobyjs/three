import { Node } from '../../three-types'
import { AudioLoader } from 'three/src/loaders/AudioLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        AudioLoader: typeof AudioLoader
    }
}

Three.AudioLoader = AudioLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            audioLoader: AudioLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        audioLoader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        audioLoader: string[]
    }
}


consParams.audioLoader = [
    'manager',
].distinct()


objParams.audioLoader = [...objParams.loader]

export type AudioLoaderProps = Node<AudioLoader, typeof AudioLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        audioLoader: { manager?: LoadingManager }
    }
}

defaults.audioLoader = {}

