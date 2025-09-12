import { Node } from '../../../three-types'
// This is a core class for post-processing.
import PostProcessing from 'three/src/renderers/common/PostProcessing.js'
export * from 'three/src/renderers/common/PostProcessing.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		PostProcessing: typeof PostProcessing
	}
}

Three.PostProcessing = PostProcessing

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			postProcessing: PostProcessingProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		postProcessing: typeof postProcessing
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		postProcessing: typeof _postProcessing
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a renderer and an optional outputNode.
const postProcessing = ([
	'renderer',
	'outputNode',
] as const).distinct()
consParams.postProcessing = postProcessing

// ---[ Object Properties ]---

// Lists the class's properties and methods.
const _postProcessing = ([
	'renderer',
	'outputNode',
	'outputColorTransform',
	'needsUpdate',
	'_quadMesh',
	'render',
	'dispose',
	'_update',
	'renderAsync',
] as const).distinct()
objProps.postProcessing = _postProcessing


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type PostProcessingArgs = {
	renderer: any // It's best practice to type this to Renderer, but it may cause circular imports, so it will be handled at the framework level
	outputNode?: TSLNode | null
}

// The final Props type for the JSX component.
export type PostProcessingProps = Node<PostProcessing, typeof PostProcessing, PostProcessingArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		postProcessing: Partial<PostProcessingArgs>
	}
}

defaults.postProcessing = {}