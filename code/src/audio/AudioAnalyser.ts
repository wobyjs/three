import { Object3DNode } from '../../three-types'
import { Audio } from './Audio'
import { AudioAnalyser } from 'three/src/audio/AudioAnalyser.js'
export { AudioAnalyser } from 'three/src/audio/AudioAnalyser.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        AudioAnalyser: typeof AudioAnalyser
    }
}

Three.AudioAnalyser = AudioAnalyser

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            audioAnalyser: AudioAnalyserProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        audioAnalyser: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        audioAnalyser: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\AudioAnalyser.d.ts
/**
 * Create a {@link AudioAnalyser} object, which uses an {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode} to analyse audio data.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API Audio API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener(,
 * camera.add(listener,
 * // create an Audio source
 * const sound = new THREE.Audio(listener,
 * // load a sound and set it as the Audio object's buffer
 * const audioLoader = new THREE.AudioLoader(,
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 * sound.setBuffer(buffer,
 * sound.setLoop(true,
 * sound.setVolume(0.5,
 * sound.play(,
 * 
 * // create an AudioAnalyser, passing in the sound and desired fftSize
 * const analyser = new THREE.AudioAnalyser(sound, 32,
 * // get the average frequency of the sound
 * const data = analyser.getAverageFrequency(,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioAnalyser Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioAnalyser.js}
 */

consParams.audioAnalyser = [
    /**
     * Create a new {@link {@link AudioAnalyser}}.
     * @param audio
     * @param fftSize See {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize.fftSize }. Expects a `unsigned integer`. Default `2048`.
     */
    'audio',
    'fftSize',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\AudioAnalyser.d.ts
/**
 * Create a {@link AudioAnalyser} object, which uses an {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode | AnalyserNode} to analyse audio data.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener()
 * camera.add(listener)
 * // create an Audio source
 * const sound = new THREE.Audio(listener)
 * // load a sound and set it as the Audio object's buffer
 * const audioLoader = new THREE.AudioLoader()
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 *     sound.setBuffer(buffer)
 *     sound.setLoop(true)
 *     sound.setVolume(0.5)
 *     sound.play()
 * })
 * // create an AudioAnalyser, passing in the sound and desired fftSize
 * const analyser = new THREE.AudioAnalyser(sound, 32)
 * // get the average frequency of the sound
 * const data = analyser.getAverageFrequency()
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioAnalyser | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioAnalyser.js | Source}
 */

objParams.audioAnalyser = [
    /**
     * An {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode | AnalyserNode} used to analyze audio.
     */
    'analyser',
    /**
     * A Uint8Array with size determined by {@link https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount | analyser.frequencyBinCount} used to hold analysis data.
     */
    'data',
].distinct()

export type AudioAnalyserProps = Object3DNode<AudioAnalyser, typeof AudioAnalyser, { audio: Audio<AudioNode>; fftSize?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        audioAnalyser: Partial<{ audio: Audio<AudioNode>; fftSize?: number; }>
    }
}

defaults.audioAnalyser = {}

