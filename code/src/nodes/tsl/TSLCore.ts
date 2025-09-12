import { Node } from '../../../three-types'
// Import the two internal classes directly for type information
import { ShaderNodeInternal, ShaderCallNodeInternal } from 'three/src/nodes/tsl/TSLCore.js'
// Import all exported members to register them
import * as TSL from 'three/src/nodes/tsl/TSLCore.js'
export * from 'three/src/nodes/tsl/TSLCore.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Note: No top-level classes are exported, but we need to declare the factory functions
// and the internal classes they produce.
declare module '../../../lib/3/three'
{
	interface Three {
		// Internal Classes
		ShaderNodeInternal: typeof ShaderNodeInternal,
		ShaderCallNodeInternal: typeof ShaderCallNodeInternal,

		// Method Chaining
		addMethodChaining: typeof TSL.addMethodChaining,

		// Utilities
		defined: typeof TSL.defined,
		getConstNodeType: typeof TSL.getConstNodeType,
		setCurrentStack: typeof TSL.setCurrentStack,
		getCurrentStack: typeof TSL.getCurrentStack,
		append: typeof TSL.append,
		If: typeof TSL.If,

		// Node Factories and Proxies
		ShaderNode: typeof TSL.ShaderNode,
		nodeObject: typeof TSL.nodeObject,
		nodeObjects: typeof TSL.nodeObjects,
		nodeArray: typeof TSL.nodeArray,
		nodeProxy: typeof TSL.nodeProxy,
		nodeImmutable: typeof TSL.nodeImmutable,
		Fn: typeof TSL.Fn,
		tslFn: typeof TSL.tslFn,

		// Type Constructors
		color: typeof TSL.color,
		float: typeof TSL.float,
		int: typeof TSL.int,
		uint: typeof TSL.uint,
		bool: typeof TSL.bool,
		vec2: typeof TSL.vec2,
		ivec2: typeof TSL.ivec2,
		uvec2: typeof TSL.uvec2,
		bvec2: typeof TSL.bvec2,
		vec3: typeof TSL.vec3,
		ivec3: typeof TSL.ivec3,
		uvec3: typeof TSL.uvec3,
		bvec3: typeof TSL.bvec3,
		vec4: typeof TSL.vec4,
		ivec4: typeof TSL.ivec4,
		uvec4: typeof TSL.uvec4,
		bvec4: typeof TSL.bvec4,
		mat2: typeof TSL.mat2,
		mat3: typeof TSL.mat3,
		mat4: typeof TSL.mat4,
		string: typeof TSL.string,
		arrayBuffer: typeof TSL.arrayBuffer,

		// Node Operations
		element: typeof TSL.element,
		convert: typeof TSL.convert,
		split: typeof TSL.split
	}
}

// Assign all imported TSL functions and internal classes to the Three namespace.
Object.assign(Three, TSL, { ShaderNodeInternal, ShaderCallNodeInternal })

// Note: JSX elements are omitted for these internal classes as they are not
// meant to be instantiated directly in a scene graph.

declare module '../../../lib/3/consParams' {
	interface consParams {
		shaderNodeInternal: typeof shaderNodeInternal,
		shaderCallNodeInternal: typeof shaderCallNodeInternal,
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		shaderNodeInternal: typeof _shaderNodeInternal,
		shaderCallNodeInternal: typeof _shaderCallNodeInternal,
	}
}

// ---[ Constructor Parameters ]---

const shaderNodeInternal = ([
	'jsFunc',
	'nodeType',
] as const).distinct()
consParams.shaderNodeInternal = shaderNodeInternal

const shaderCallNodeInternal = ([
	'shaderNode',
	'inputNodes',
] as const).distinct()
consParams.shaderCallNodeInternal = shaderCallNodeInternal

// ---[ Object Properties ]---

const _shaderNodeInternal = ([
	...(objProps.node || []),
	'jsFunc',
	'layout',
	'global',
	'once',
	'setLayout',
	'call',
	'setup',
] as const).distinct()
objProps.shaderNodeInternal = _shaderNodeInternal

const _shaderCallNodeInternal = ([
	...(objProps.node || []),
	'shaderNode',
	'inputNodes',
	'getNodeType',
	'getMemberType',
	'call',
	'getOutputNode',
	'setup',
	'setupOutput',
	'generate',
] as const).distinct()
objProps.shaderCallNodeInternal = _shaderCallNodeInternal


// ---[ Props & Defaults ]---
// No defaults are defined for these internal/factory-created classes.