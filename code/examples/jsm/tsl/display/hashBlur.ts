// 1. Imports
import { hashBlur } from 'three/examples/jsm/tsl/display/HashBlur.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
// objProps is not needed as this is not a class
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			hashBlur: HashBlurProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		hashBlur: typeof hashBlurParams
	}
}

// objProps is not extended


// 3. Argument Array
const hashBlurParams = ([
	'textureNode',
	'bluramount',
	'repeats',
] as const).distinct()
consParams.hashBlur = hashBlurParams

// No _hashBlur array for objProps is needed.


// 4. Props Type Definition
export type HashBlurProps = Node<
	ReturnType<typeof hashBlur>, // The output is a TSLNode
	typeof hashBlur,            // The "constructor" is the function itself
	{
		textureNode: TSLNode
		bluramount?: number | TSLNode
		repeats?: number | TSLNode
	}
>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		hashBlur: Partial<{
			textureNode: TSLNode
			bluramount?: number | TSLNode
			repeats?: number | TSLNode
		}>
	}
}

// Set default values based on the function's signature.
defaults.hashBlur = {
	bluramount: 0.1,
	repeats: 45
}