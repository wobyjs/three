import { Node } from '../../three-types'
import { AudioLoader } from 'three/src/loaders/AudioLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        audioLoader: typeof audioLoader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        audioLoader: typeof _audioLoader
    }
}


const audioLoader = ([
    'manager',
] as const).distinct()
consParams.audioLoader = audioLoader

const _audioLoader = ([...objProps.loader] as const).distinct()
objProps.audioLoader = _audioLoader

export type AudioLoaderProps = Node<AudioLoader, typeof AudioLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        audioLoader: { manager?: LoadingManager }
    }
}

defaults.audioLoader = {}

