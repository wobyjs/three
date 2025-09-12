import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Pipeline from 'three/src/renderers/common/Pipeline.js'
export * from 'three/src/renderers/common/Pipeline.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		Pipeline: typeof Pipeline
	}
}

Three.Pipeline = Pipeline

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			pipeline: PipelineProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		pipeline: typeof pipeline
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		pipeline: typeof _pipeline
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single 'cacheKey' argument.
const pipeline = ([
	'cacheKey',
] as const).distinct()
consParams.pipeline = pipeline

// ---[ Object Properties ]---

// Lists the instance properties of the class.
const _pipeline = ([
	'cacheKey',
	'usedTimes',
] as const).distinct()
objProps.pipeline = _pipeline


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type PipelineArgs = {
	cacheKey: string
}

// The final Props type for the JSX component.
export type PipelineProps = Node<Pipeline, typeof Pipeline, PipelineArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		pipeline: Partial<PipelineArgs>
	}
}

// The 'cacheKey' argument is required, so the defaults object is empty.
defaults.pipeline = {}