// 1. Imports
import LensflareNode from 'three/examples/jsm/tsl/display/LensflareNode.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Color } from 'three/src/math/Color.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

// Interface for the optional params object to keep the Props type clean
interface LensflareParams {
	ghostTint?: Color | TSLNode
	threshold?: number | TSLNode
	ghostSamples?: number | TSLNode
	ghostSpacing?: number | TSLNode
	ghostAttenuationFactor?: number | TSLNode
	downSampleRatio?: number
}


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			lensflareNode: LensflareNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		lensflareNode: typeof lensflareNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		lensflareNode: typeof _lensflareNode
	}
}

// 3. Constructor and Object Property Arrays
const lensflareNode = ([
	'textureNode',
	'params', // The second argument is the params object itself
] as const).distinct()
consParams.lensflareNode = lensflareNode

// Inherits from TempNode and adds its own specific properties
const _lensflareNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'textureNode',
	'ghostTintNode',
	'thresholdNode',
	'ghostSamplesNode',
	'ghostSpacingNode',
	'ghostAttenuationFactorNode',
	'downSampleRatio',
	'updateBeforeType',
] as const).distinct()
objProps.lensflareNode = _lensflareNode


// 4. Props Type Definition
export type LensflareNodeProps = Node<LensflareNode, typeof LensflareNode, {
	textureNode: TextureNode
	params?: LensflareParams
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		lensflareNode: Partial<{
			textureNode: TextureNode
			params?: LensflareParams
		}>
	}
}

// The 'params' parameter defaults to an empty object in the constructor.
defaults.lensflareNode = {
	params: {},
}