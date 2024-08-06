import { Object3DNode } from '../../three-types'
import { AudioListener } from 'three/src/audio/AudioListener.js'
export { AudioListener } from 'three/src/audio/AudioListener.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        AudioListener: typeof AudioListener
    }
}

Three.AudioListener = AudioListener

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            audioListener: AudioListenerProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        audioListener: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        audioListener: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\AudioContext.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\AudioListener.d.ts
/**
 * The {@link AudioListener} represents a virtual {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioListener} of the all positional and non-positional audio effects in the scene.
 * A three.js application usually creates a single instance of {@link AudioListener}  * @remarks
 * It is a mandatory construtor parameter for audios entities like {@link Audio} and {@link PositionalAudio}.
 * In most cases, the listener object is a child of the camera
 * So the 3d transformation of the camera represents the 3d transformation of the listener.
 * @example
 * ```typescript
 * // create an {@link AudioListener} and add it to the camera
 * const listener = new THREE.AudioListener(,
 * camera.add(listener,
 * // create a global audio source
 * const sound = new THREE.Audio(listener,
 * // load a sound and set it as the Audio object's buffer
 * const audioLoader = new THREE.AudioLoader(,
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 * sound.setBuffer(buffer,
 * sound.setLoop(true,
 * sound.setVolume(0.5,
 * sound.play(,
 * 
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_timing / timing }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioListener Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioListener.js}
 */

consParams.audioListener = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\audio\AudioContext.d.ts
/**
 * This contains methods for setting up an {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext}.
/**
 * The {@link AudioListener} represents a virtual {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioListener | listener} of the all positional and non-positional audio effects in the scene.
 * A three.js application usually creates a single instance of {@link AudioListener}  * @remarks
 * It is a mandatory construtor parameter for audios entities like {@link Audio | Audio} and {@link PositionalAudio | PositionalAudio}.
 * In most cases, the listener object is a child of the camera
 * So the 3d transformation of the camera represents the 3d transformation of the listener.
 * @example
 * ```typescript
 * // create an {@link AudioListener} and add it to the camera
 * const listener = new THREE.AudioListener()
 * camera.add(listener)
 * // create a global audio source
 * const sound = new THREE.Audio(listener)
 * // load a sound and set it as the Audio object's buffer
 * const audioLoader = new THREE.AudioLoader()
 * audioLoader.load('sounds/ambient.ogg', function (buffer) {
 *     sound.setBuffer(buffer)
 *     sound.setLoop(true)
 *     sound.setVolume(0.5)
 *     sound.play()
 * })
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_timing | webaudio / timing }
 * @see Example: {@link https://threejs.org/examples/#webaudio_visualizer | webaudio / visualizer }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/AudioListener | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/AudioListener.js | Source}
 */

objParams.audioListener = [...objParams.object3d,
    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext | AudioContext} of the {@link {@link AudioListener} | listener} given in the constructor.
     */
    'context',
    /**
     * A {@link https://developer.mozilla.org/en-US/docs/Web/API/GainNode | GainNode} created using
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createGain | AudioContext.createGain()}.
     */
    'gain',
    /**
     * @defaultValue `null`
     */
    'filter',
    /**
     * Time delta value for audio entities. Use in context of {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioParam/linearRampToValueAtTime | AudioParam.linearRampToValueAtTimeDefault()}.
     * @defaultValue `0`
     */
    'timeDelta',
].distinct()

export type AudioListenerProps = Object3DNode<AudioListener, typeof AudioListener, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        audioListener: Partial<{}>
    }
}

defaults.audioListener = {}

