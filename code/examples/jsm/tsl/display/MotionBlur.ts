// 1. Imports
import { motionBlur } from 'three/examples/jsm/tsl/display/MotionBlur.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
// objProps is not needed
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			motionBlur: MotionBlurProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		motionBlur: typeof motionBlurParams
	}
}

// objProps is not extended


// 3. Argument Array
const motionBlurParams = ([
	'inputNode',
	'velocity',
	'numSamples',
] as const).distinct()
consParams.motionBlur = motionBlurParams

// No _motionBlur array for objProps


// 4. Props Type Definition
export type MotionBlurProps = Node<
	ReturnType<typeof motionBlur>,
	typeof motionBlur,
	{
		inputNode: TSLNode
		velocity: TSLNode
		numSamples?: number | TSLNode
	}
>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		motionBlur: Partial<{
			inputNode: TSLNode
			velocity: TSLNode
			numSamples?: number | TSLNode
		}>
	}
}

// Set default value based on the function's signature.
defaults.motionBlur = {
	numSamples: 16,
}