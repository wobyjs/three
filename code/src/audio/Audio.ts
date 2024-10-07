import { Object3DNode } from '../../three-types'
import { AudioListener } from 'three/src/audio/AudioListener.js'
import { Audio } from 'three/src/audio/Audio.js'
export * from 'three/src/audio/Audio.js'

import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            //@ts-ignore
            audio: AudioProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        audio: typeof audio
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        audio: typeof _audio
    }
}


// Extras / Audio /////////////////////////////////////////////////////////////////////
/**
 * Create a non-positional ( global ) {@link Audio} object.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API {@link Audio} API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener(,
 * camera.add(listener,
 * // create a global {@link Audio} source
 * const sound = new THREE.Audio(listener,
 * // load a sound and set it as the {@link Audio} object's buffer
 * const audioLoader = new THREE.AudioLoader(,
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 * sound.setBuffer(buffer,
 * sound.setLoop(true,
 * sound.setVolume(0.5,
 * sound.play(,
 * 
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/Audio Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/Audio.js}
 */

const audio = ([
    /**
     * Create a new instance of {@link Audio}
     * @param listener (required) {@link AudioListener} instance.
     */
    'listener',
] as const).distinct()
consParams.audio = audio


// Extras / Audio /////////////////////////////////////////////////////////////////////
/**
 * Create a non-positional ( global ) {@link Audio} object.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web {@link Audio} API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener()
 * camera.add(listener)
 * // create a global {@link Audio} source
 * const sound = new THREE.Audio(listener)
 * // load a sound and set it as the {@link Audio} object's buffer
 * const audioLoader = new THREE.AudioLoader()
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 *     sound.setBuffer(buffer)
 *     sound.setLoop(true)
 *     sound.setVolume(0.5)
 *     sound.play()
 * })
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/Audio | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/Audio.js | Source}
 */

const _audio = ([...objProps.object3d,
    /**
     * A reference to the listener object of this audio.
     */
    'listener',
    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext} of the {@link AudioListener | listener} given in the constructor.
     */
    'context',
    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/API/GainNode | GainNode} created using
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createGain | AudioContext.createGain}().
     */
    'gain',
    /**
     * Whether to start playback automatically.
     * @defaultValue `false`
     */
    'autoplay',
    'buffer',
    /**
     * Modify pitch, measured in cents. +/- 100 is a semitone. +/- 1200 is an octave.
     * @defaultValue `0`
     */
    'detune',
    /**
     * @default false
     */
    'loop',
    /**
     * @default 0
     */
    'loopStart',
    /**
     * @default 0
     */
    'loopEnd',
    /**
     * An offset to the time within the {@link Audio} buffer that playback should begin.
     * Same as the {@link Audio.offset | offset} parameter of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start | AudioBufferSourceNode.start()}.
     * @defaultValue `0`
     */
    'offset',
    /**
     * Overrides the duration of the audio. Same as the {@link Audio.duration | duration} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start | AudioBufferSourceNode.start()}.
     * @defaultValue `undefined` _to play the whole buffer_.
     */
    'duration',
    /**
     * Speed of playback.
     * @defaultValue `1`
     */
    'playbackRate',
    /**
     * Whether the {@link Audio} is currently playing.
     * @defaultValue `false`
     */
    'isPlaying',
    /**
     * Whether playback can be controlled using the {@link Audio.play | play}(), {@link Audio.pause | pause}() etc. methods.
     * @defaultValue `true`
     */
    'hasPlaybackControl',
    /**
     * Type of the {@link Audio} source.
     * @defaultValue 'empty'.
     */
    'sourceType',
    /**
     * An {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode | AudioBufferSourceNode} created using
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createBufferSource | AudioContext.createBufferSource()}.
     */
    'source',
    /**
     * Represents an array of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode | AudioNodes}.
     * Can be used to apply a variety of low-order filters to create more complex sound effects.
     * In most cases, the array contains instances of {@link https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode | BiquadFilterNodes}.
     * Filters are set via {@link THREE.Audio.setFilter | Audio.setFilter} or {@link THREE.Audio.setFilters | Audio.setFilters}.
     * @defaultValue []
     */
    'filters',
] as const).distinct()

objProps.audio = _audio

export type AudioProps = Object3DNode<Audio, typeof Audio, { listener: AudioListener; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        audio: Partial<{ listener: AudioListener; }>
    }
}

defaults.audio = {}

