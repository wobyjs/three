import { Node } from '../../../three-types'
import { PositionalAudio } from 'three/src/audio/PositionalAudio.js'
import { PositionalAudioHelper } from 'three/examples/jsm/helpers/PositionalAudioHelper.js'
export * from 'three/examples/jsm/helpers/PositionalAudioHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        positionalAudioHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        positionalAudioHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\PositionalAudioHelper.d.ts

consParams.positionalAudioHelper = [
    'audio',
    'range',
    'divisionsInnerAngle',
    'divisionsOuterAngle',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\PositionalAudioHelper.d.ts    

objParams.positionalAudioHelper = [...objParams.line,
    'audio',
    'range',
    'divisionsInnerAngle',
    'divisionsOuterAngle',
].distinct()

export type PositionalAudioHelperProps = Node<PositionalAudioHelper, typeof PositionalAudioHelper, { audio: PositionalAudio; range?: number; divisionsInnerAngle?: number; divisionsOuterAngle?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        positionalAudioHelper: Partial<{ audio: PositionalAudio; range?: number; divisionsInnerAngle?: number; divisionsOuterAngle?: number; }>
    }
}

defaults.positionalAudioHelper = {}

