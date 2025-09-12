import { Node } from '../../../../three-types'
// This is an internal class for the renderer.
import BasicNodeLibrary from 'three/src/renderers/webgpu/nodes/BasicNodeLibrary.js'
export * from 'three/src/renderers/webgpu/nodes/BasicNodeLibrary.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
	interface Three {
		BasicNodeLibrary: typeof BasicNodeLibrary
	}
}

Three.BasicNodeLibrary = BasicNodeLibrary

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			basicNodeLibrary: BasicNodeLibraryProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		basicNodeLibrary: typeof basicNodeLibrary
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		basicNodeLibrary: typeof _basicNodeLibrary
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const basicNodeLibrary = ([] as const).distinct()
consParams.basicNodeLibrary = basicNodeLibrary

// ---[ Object Properties ]---

// Inherits from NodeLibrary and adds the specialized initialization logic
// Assumes `objProps.nodeLibrary` has been defined.
const _basicNodeLibrary = ([
	...(objProps.nodeLibrary || []),
	'constructor',
] as const).distinct()
objProps.basicNodeLibrary = _basicNodeLibrary


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type BasicNodeLibraryArgs = {}

// The final Props type for the JSX component.
export type BasicNodeLibraryProps = Node<BasicNodeLibrary, typeof BasicNodeLibrary, BasicNodeLibraryArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		basicNodeLibrary: Partial<BasicNodeLibraryArgs>
	}
}

// The constructor takes no arguments, so the defaults object is empty.
defaults.basicNodeLibrary = {}