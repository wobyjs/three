import { Node } from '../../../three-types'
import GLSLNodeParser from 'three/src/nodes/parsers/GLSLNodeParser.js'
export * from 'three/src/nodes/parsers/GLSLNodeParser.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		GLSLNodeParser: typeof GLSLNodeParser
	}
}

Three.GLSLNodeParser = GLSLNodeParser

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			glslNodeParser: GLSLNodeParserProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		glslNodeParser: typeof glslNodeParser
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		glslNodeParser: typeof _glslNodeParser
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const glslNodeParser = ([] as const).distinct()
consParams.glslNodeParser = glslNodeParser

// ---[ Object Properties ]---

// Inherits from NodeParser and adds its own overridden method.
// Assumes `objProps.nodeParser` has been defined.
const _glslNodeParser = ([
	...(objProps.nodeParser || []),
	'parseFunction',
] as const).distinct()
objProps.glslNodeParser = _glslNodeParser


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type GLSLNodeParserArgs = {}

// The final Props type for the JSX component.
export type GLSLNodeParserProps = Node<GLSLNodeParser, typeof GLSLNodeParser, GLSLNodeParserArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		glslNodeParser: Partial<GLSLNodeParserArgs>
	}
}

defaults.glslNodeParser = {}