import { AudioContext } from 'three/src/audio/AudioContext.js'
export * from 'three/src/audio/AudioContext.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'

declare module '../../lib/3/three'
{
	interface Three {
		AudioContext: typeof AudioContext
	}
}

// Make the static utility class available under the Three namespace.
Three.AudioContext = AudioContext

// Note: No JSX element, Props, or Defaults are created for AudioContext
// because it is a static utility class and not an instantiable object.

declare module '../../lib/3/consParams' {
	interface consParams {
		audioContext: typeof audioContext
	}
}

declare module '../../lib/3/objProps' {
	interface objProps {
		audioContext: typeof _audioContext
	}
}

// ---[ Constructor Parameters ]---

// AudioContext has no constructor, so this is empty.
const audioContext = ([] as const).distinct()
consParams.audioContext = audioContext

// ---[ Object Properties ]---

// AudioContext has no instances, so there are no instance properties.
const _audioContext = ([] as const).distinct()
objProps.audioContext = _audioContext