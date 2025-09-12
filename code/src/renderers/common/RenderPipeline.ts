import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import RenderPipeline from 'three/src/renderers/common/RenderPipeline.js'
export * from 'three/src/renderers/common/RenderPipeline.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		RenderPipeline: typeof RenderPipeline
	}
}

Three.RenderPipeline = RenderPipeline

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderPipeline: RenderPipelineProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderPipeline: typeof renderPipeline
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderPipeline: typeof _renderPipeline
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a cacheKey, a vertexProgram, and a fragmentProgram.
const renderPipeline = ([
	'cacheKey',
	'vertexProgram',
	'fragmentProgram',
] as const).distinct()
consParams.renderPipeline = renderPipeline

// ---[ Object Properties ]---

// Inherits from Pipeline and adds its own properties.
// Assumes `objProps.pipeline` has been defined.
const _renderPipeline = ([
	...(objProps.pipeline || []),
	'vertexProgram',
	'fragmentProgram',
] as const).distinct()
objProps.renderPipeline = _renderPipeline


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type RenderPipelineArgs = {
	cacheKey: string
	vertexProgram: any // Type hint: ProgrammableStage
	fragmentProgram: any // Type hint: ProgrammableStage
}

// The final Props type for the JSX component.
export type RenderPipelineProps = Node<RenderPipeline, typeof RenderPipeline, RenderPipelineArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderPipeline: Partial<RenderPipelineArgs>
	}
}

// The constructor arguments are required for this class to function, so defaults is empty.
defaults.renderPipeline = {}