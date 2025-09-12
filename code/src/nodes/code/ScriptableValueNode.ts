import { Node } from '../../../three-types'
import ScriptableValueNode, { scriptableValue } from 'three/src/nodes/code/ScriptableValueNode.js'
export * from 'three/src/nodes/code/ScriptableValueNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		ScriptableValueNode: typeof ScriptableValueNode,
		scriptableValue: typeof scriptableValue
	}
}

// Make the class and the factory function available under the Three namespace.
Three.ScriptableValueNode = ScriptableValueNode
Three.scriptableValue = scriptableValue

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			scriptableValueNode: ScriptableValueNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		scriptableValueNode: typeof scriptableValueNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		scriptableValueNode: typeof _scriptableValueNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional 'value' argument.
const scriptableValueNode = ([
	'value',
] as const).distinct()
consParams.scriptableValueNode = scriptableValueNode

// ---[ Object Properties ]---

// Inherits from Node and adds its own properties and methods.
// Assumes `objProps.node` has been defined.
const _scriptableValueNode = ([
	...(objProps.node || []),
	'isScriptableValueNode',
	'value', // getter/setter
	'_value', // private but exposed by getter/setter
	'_cache', // private
	'inputType',
	'outputType',
	'events',
	'isScriptableOutputNode', // getter
	'refresh',
	'getValue',
	'getNodeType',
	'setup',
	'serialize',
	'deserialize',
] as const).distinct()
objProps.scriptableValueNode = _scriptableValueNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ScriptableValueNodeArgs = {
	value?: any
}

// The final Props type for the JSX component.
export type ScriptableValueNodeProps = Node<ScriptableValueNode, typeof ScriptableValueNode, ScriptableValueNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		scriptableValueNode: Partial<ScriptableValueNodeArgs>
	}
}

defaults.scriptableValueNode = {}