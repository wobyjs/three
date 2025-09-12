import { Node } from '../../../../three-types'
// This is an internal class for the renderer.
import StandardNodeLibrary from 'three/src/renderers/webgpu/nodes/StandardNodeLibrary.js'
export * from 'three/src/renderers/webgpu/nodes/StandardNodeLibrary.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
	interface Three {
		StandardNodeLibrary: typeof StandardNodeLibrary
	}
}

Three.StandardNodeLibrary = StandardNodeLibrary

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			standardNodeLibrary: StandardNodeLibraryProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		standardNodeLibrary: typeof standardNodeLibrary
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		standardNodeLibrary: typeof _standardNodeLibrary
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const standardNodeLibrary = ([] as const).distinct()
consParams.standardNodeLibrary = standardNodeLibrary

// ---[ Object Properties ]---

// Inherits from NodeLibrary and adds the specialized initialization logic
// Assumes `objProps.nodeLibrary` has been defined.
const _standardNodeLibrary = ([
	...(objProps.nodeLibrary || []),
	'constructor',
] as const).distinct()
objProps.standardNodeLibrary = _standardNodeLibrary


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type StandardNodeLibraryArgs = {}

// The final Props type for the JSX component.
export type StandardNodeLibraryProps = Node<StandardNodeLibrary, typeof StandardNodeLibrary, StandardNodeLibraryArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		standardNodeLibrary: Partial<StandardNodeLibraryArgs>
	}
}

// The constructor takes no arguments, so the defaults object is empty.
defaults.standardNodeLibrary = {}