import { Node } from '../../../three-types'
import ScriptableNode, { scriptable, ScriptableNodeResources } from 'three/src/nodes/code/ScriptableNode.js'
export * from 'three/src/nodes/code/ScriptableNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import CodeNode from 'three/src/nodes/code/CodeNode.js'

declare module '../../../lib/3/three'
{
	interface Three {
		ScriptableNode: typeof ScriptableNode,
		scriptable: typeof scriptable,
		ScriptableNodeResources: typeof ScriptableNodeResources
	}
}

// Make the class, factory function, and resource manager available under the Three namespace.
Three.ScriptableNode = ScriptableNode
Three.scriptable = scriptable
Three.ScriptableNodeResources = ScriptableNodeResources

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			scriptableNode: ScriptableNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		scriptableNode: typeof scriptableNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		scriptableNode: typeof _scriptableNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a 'codeNode' and 'parameters' object.
const scriptableNode = ([
	'codeNode',
	'parameters',
] as const).distinct()
consParams.scriptableNode = scriptableNode

// ---[ Object Properties ]---

// Inherits from Node and adds an extensive API for scripting.
// Assumes `objProps.node` has been defined.
const _scriptableNode = ([
	...(objProps.node || []),
	'isScriptableNode',
	'codeNode',
	'parameters',
	'_local',
	'_output',
	'_outputs',
	'_source',
	'_method',
	'_object',
	'_value',
	'_needsOutputUpdate',
	'source', // getter
	'needsUpdate', // getter/setter
	'onRefresh',
	'setLocal',
	'getLocal',
	'getInputLayout',
	'getOutputLayout',
	'setOutput',
	'getOutput',
	'getParameter',
	'setParameter',
	'getValue',
	'deleteParameter',
	'clearParameters',
	'call',
	'callAsync',
	'getNodeType',
	'refresh',
	'getObject',
	'deserialize',
	'getLayout',
	'getDefaultOutputNode',
	'getDefaultOutput',
	'getMethod',
	'dispose',
	'setup',
	'getCacheKey',
] as const).distinct()
objProps.scriptableNode = _scriptableNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ScriptableNodeArgs = {
	codeNode?: CodeNode | null
	parameters?: Record<string, any>
}

// The final Props type for the JSX component.
export type ScriptableNodeProps = Node<ScriptableNode, typeof ScriptableNode, ScriptableNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		scriptableNode: Partial<ScriptableNodeArgs>
	}
}

defaults.scriptableNode = {}