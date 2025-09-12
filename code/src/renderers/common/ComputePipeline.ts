import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import ComputePipeline from 'three/src/renderers/common/ComputePipeline.js'
export * from 'three/src/renderers/common/ComputePipeline.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		ComputePipeline: typeof ComputePipeline
	}
}

Three.ComputePipeline = ComputePipeline

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			computePipeline: ComputePipelineProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		computePipeline: typeof computePipeline
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		computePipeline: typeof _computePipeline
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a cacheKey and a computeProgram.
const computePipeline = ([
	'cacheKey',
	'computeProgram',
] as const).distinct()
consParams.computePipeline = computePipeline

// ---[ Object Properties ]---

// Inherits from Pipeline and adds its own properties.
// Assumes `objProps.pipeline` has been defined.
const _computePipeline = ([
	...(objProps.pipeline || []),
	'computeProgram',
	'isComputePipeline',
] as const).distinct()
objProps.computePipeline = _computePipeline


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ComputePipelineArgs = {
	cacheKey: string
	computeProgram: any // ProgrammableStage type is internal, so using 'any'
}

// The final Props type for the JSX component.
export type ComputePipelineProps = Node<ComputePipeline, typeof ComputePipeline, ComputePipelineArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		computePipeline: Partial<ComputePipelineArgs>
	}
}

// The constructor arguments are required, so the defaults object is empty.
defaults.computePipeline = {}