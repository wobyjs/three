import { Node } from '../../three-types'
import { InterpolationModes } from 'three/src/constants.js'
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js'
export { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        KeyframeTrack: typeof KeyframeTrack
    }
}

Three.KeyframeTrack = KeyframeTrack

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            keyframeTrack: KeyframeTrackProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        keyframeTrack: typeof keyframeTrack
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        keyframeTrack: typeof _keyframeTrack
    }
}




const keyframeTrack = ([
    /**
     * @param name
     * @param times
     * @param values
     * @param [interpolation=THREE.InterpolateLinear]
     */
    'name',
    'times',
    'values',
    'interpolation',
] as const).distinct()
consParams.keyframeTrack = keyframeTrack




const _keyframeTrack = ([
    'name',
    'times',
    'values',
    'ValueTypeName',
    'TimeBufferType',
    'ValueBufferType',
] as const).distinct()
objProps.keyframeTrack = _keyframeTrack

export type KeyframeTrackProps = Node<KeyframeTrack, typeof KeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<any>; interpolation?: InterpolationModes; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        keyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<any>; interpolation?: InterpolationModes; }>
    }
}

defaults.keyframeTrack = {}