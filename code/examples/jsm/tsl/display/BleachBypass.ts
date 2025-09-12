// 1. Imports
// We import the function itself and the types for its arguments/return value
import { bleach } from 'three/examples/jsm/tsl/display/BleachBypass.js'
import TSLNode from 'three/src/nodes/core/Node.js' // Aliased to avoid name clash
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
// objProps is not needed as this is not a class with properties
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			// We define a JSX element for this function
			bleach: BleachProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		// We list the function's arguments here, similar to constructor params
		bleach: typeof bleachParams
	}
}

// objProps is not extended because 'bleach' is a function, not a class instance.


// 3. Argument and Property Arrays
const bleachParams = ([
	'color',
	'opacity',
] as const).distinct()
consParams.bleach = bleachParams

// No _bleach array for objProps is needed.


// 4. Props Type Definition
// This defines the props for our <bleach> JSX component.
export type BleachProps = Node<
	ReturnType<typeof bleach>, // The output of the function (a TSLNode)
	typeof bleach,            // The "constructor" is the function itself
	{
		color: TSLNode // The required color node
		opacity?: number | TSLNode // The optional opacity
	}
>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		bleach: Partial<{
			color: TSLNode
			opacity?: number | TSLNode
		}>
	}
}

// Set the default value for the 'opacity' argument.
defaults.bleach = { opacity: 1 }