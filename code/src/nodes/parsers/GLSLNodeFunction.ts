import { Node } from '../../../three-types'
import GLSLNodeFunction from 'three/src/nodes/parsers/GLSLNodeFunction.js'
export * from 'three/src/nodes/parsers/GLSLNodeFunction.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		GLSLNodeFunction: typeof GLSLNodeFunction
	}
}

Three.GLSLNodeFunction = GLSLNodeFunction

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			glslNodeFunction: GLSLNodeFunctionProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		glslNodeFunction: typeof glslNodeFunction
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		glslNodeFunction: typeof _glslNodeFunction
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single 'source' string argument.
const glslNodeFunction = ([
	'source',
] as const).distinct()
consParams.glslNodeFunction = glslNodeFunction

// ---[ Object Properties ]---

// Inherits from NodeFunction and adds its own properties and methods.
// Assumes `objProps.nodeFunction` has been defined.
const _glslNodeFunction = ([
	...(objProps.nodeFunction || []),
	'inputsCode',
	'blockCode',
	'headerCode',
	'getCode',
] as const).distinct()
objProps.glslNodeFunction = _glslNodeFunction


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type GLSLNodeFunctionArgs = {
	source: string
}

// The final Props type for the JSX component.
export type GLSLNodeFunctionProps = Node<GLSLNodeFunction, typeof GLSLNodeFunction, GLSLNodeFunctionArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		glslNodeFunction: Partial<GLSLNodeFunctionArgs>
	}
}

// 'source' is a required argument, so the defaults object is empty.
defaults.glslNodeFunction = {}