import { PositionalAudio } from 'three/src/audio/PositionalAudio.js'
import { Object3DNode } from '../../three-types'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Audio'

declare module '../../lib/3/three'
{
    interface Three {
        PositionalAudio: typeof PositionalAudio
    }
}

Three.PositionalAudio = PositionalAudio

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            positionalAudio: PositionalAudioProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        positionalAudio: typeof positionalAudio
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        positionalAudio: typeof _positionalAudio
    }
}


/**
 * Create a positional audio object.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API Audio API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener(,
 * camera.add(listener,
 * // create the {@link PositionalAudio} object (passing in the listener)
 * const sound = new THREE.PositionalAudio(listener,
 * // load a sound and set it as the {@link PositionalAudio} object's buffer
 * const audioLoader = new THREE.AudioLoader(,
 * audioLoader.load('sounds/song.ogg', function (buffer) {
 * sound.setBuffer(buffer,
 * sound.setRefDistance(20,
 * sound.play(,
 * 
 * // create an object for the sound to play from
 * const sphere = new THREE.SphereGeometry(20, 32, 16,
 * const material = new THREE.MeshPhongMaterial({
 * color
 * 
 * const mesh = new THREE.Mesh(sphere, material,
 * scene.add(mesh,
 * // finally add the sound to the mesh
 * mesh.add(sound,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_orientation / orientation }
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_timing / timing }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/PositionalAudio Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/PositionalAudio.js}
 */

const positionalAudio = ([
    /**
     * Create a new instance of {@link PositionalAudio}
     * @param listener (required) {@link AudioListener} instance.
     */
    'listener',
] as const).distinct()
consParams.positionalAudio = positionalAudio


/**
 * Create a positional audio object.
 * This uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API | Web Audio API}.
 * @example
 * ```typescript
 * // create an AudioListener and add it to the camera
 * const listener = new THREE.AudioListener()
 * camera.add(listener)
 * // create the {@link PositionalAudio} object (passing in the listener)
 * const sound = new THREE.PositionalAudio(listener)
 * // load a sound and set it as the {@link PositionalAudio} object's buffer
 * const audioLoader = new THREE.AudioLoader()
 * audioLoader.load('sounds/song.ogg', function (buffer) {
 *     sound.setBuffer(buffer)
 *     sound.setRefDistance(20)
 *     sound.play()
 * })
 * // create an object for the sound to play from
 * const sphere = new THREE.SphereGeometry(20, 32, 16)
 * const material = new THREE.MeshPhongMaterial({
 *     color: 0xff2200
 * })
 * const mesh = new THREE.Mesh(sphere, material)
 * scene.add(mesh)
 * // finally add the sound to the mesh
 * mesh.add(sound)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webaudio_orientation | webaudio / orientation }
 * @see Example: {@link https://threejs.org/examples/#webaudio_sandbox | webaudio / sandbox }
 * @see Example: {@link https://threejs.org/examples/#webaudio_timing | webaudio / timing }
 * @see {@link https://threejs.org/docs/index.html#api/en/audio/PositionalAudio | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/audio/PositionalAudio.js | Source}
 */

const _positionalAudio = ([...objProps.audio,
    /**
     * The PositionalAudio's {@link https://developer.mozilla.org/en-US/docs/Web/API/PannerNode | PannerNode}.
     */
    'panner',
] as const).distinct()
objProps.positionalAudio = _positionalAudio

export type PositionalAudioProps = Object3DNode<PositionalAudio, typeof PositionalAudio, { listener: AudioListener; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        positionalAudio: Partial<{ listener: AudioListener; }>
    }
}

defaults.positionalAudio = {}

