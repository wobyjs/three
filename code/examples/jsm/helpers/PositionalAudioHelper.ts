import { Node } from '../../../three-types'
import { PositionalAudio } from 'three/src/audio/PositionalAudio.js'
import { PositionalAudioHelper } from 'three/examples/jsm/helpers/PositionalAudioHelper.js'
export * from 'three/examples/jsm/helpers/PositionalAudioHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PositionalAudioHelper: typeof PositionalAudioHelper
    }
}

Three.PositionalAudioHelper = PositionalAudioHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            positionalAudioHelper: PositionalAudioHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        positionalAudioHelper: typeof positionalAudioHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        positionalAudioHelper: typeof _positionalAudioHelper
    }
}



const positionalAudioHelper = ([
    'audio',
    'range',
    'divisionsInnerAngle',
    'divisionsOuterAngle',
] as const).distinct()
consParams.positionalAudioHelper = positionalAudioHelper



const _positionalAudioHelper = ([...objProps.line,
    'audio',
    'range',
    'divisionsInnerAngle',
    'divisionsOuterAngle',
] as const).distinct()
objProps.positionalAudioHelper = _positionalAudioHelper

export type PositionalAudioHelperProps = Node<PositionalAudioHelper, typeof PositionalAudioHelper, { audio: PositionalAudio; range?: number; divisionsInnerAngle?: number; divisionsOuterAngle?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        positionalAudioHelper: Partial<{ audio: PositionalAudio; range?: number; divisionsInnerAngle?: number; divisionsOuterAngle?: number; }>
    }
}

defaults.positionalAudioHelper = {}

