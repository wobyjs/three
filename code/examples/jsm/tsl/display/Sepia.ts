// 1. Imports
import { sepia } from 'three/examples/jsm/tsl/display/Sepia.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
// objProps is not needed
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			sepia: SepiaProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		sepia: typeof sepiaParams
	}
}

// objProps is not extended


// 3. Argument Array
const sepiaParams = ([
	'color',
] as const).distinct()
consParams.sepia = sepiaParams

// No _sepia array for objProps


// 4. Props Type Definition
export type SepiaProps = Node<
	ReturnType<typeof sepia>,
	typeof sepia,
	{
		color: TSLNode
	}
>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		sepia: Partial<{
			color: TSLNode
		}>
	}
}

// No default parameters, so the defaults object is empty.
defaults.sepia = {}