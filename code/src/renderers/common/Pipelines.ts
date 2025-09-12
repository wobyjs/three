import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Pipelines from 'three/src/renderers/common/Pipelines.js'
export { Pipelines } //* from 'three/src/renderers/common/Pipelines.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Import the type hints
// import { Backend } from 'three/src/renderers/common/Backend.js'
import { Nodes } from './nodes/Nodes'

declare module '../../../lib/3/three'
{
	interface Three {
		Pipelines: typeof Pipelines
	}
}

Three.Pipelines = Pipelines

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			pipelines: PipelinesProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		pipelines: typeof pipelines
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		pipelines: typeof _pipelines
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a backend and a nodes manager.
const pipelines = ([
	'backend',
	'nodes',
] as const).distinct()
consParams.pipelines = pipelines

// ---[ Object Properties ]---

// Inherits from DataMap and adds its own properties and methods.
// Assumes `objProps.dataMap` has been defined.
const _pipelines = ([
	...(objProps.dataMap || []),
	'backend',
	'nodes',
	'bindings',
	'caches',
	'programs',
	'getForCompute',
	'getForRender',
	'delete',
	'dispose',
	'updateForRender',
	'_getComputePipeline',
	'_getRenderPipeline',
	'_getComputeCacheKey',
	'_getRenderCacheKey',
	'_releasePipeline',
	'_releaseProgram',
	'_needsComputeUpdate',
	'_needsRenderUpdate',
] as const).distinct()
objProps.pipelines = _pipelines


// ---[ Props & Defaults ]---

// Defines the constructor arguments. Using 'any' for the internal 'backend' type for robustness.
type PipelinesArgs = {
	backend: any
	nodes: Nodes
}

// The final Props type for the JSX component.
export type PipelinesProps = Node<Pipelines, typeof Pipelines, PipelinesArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		pipelines: Partial<PipelinesArgs>
	}
}

// The constructor arguments are required for this class to function, so defaults is empty.
defaults.pipelines = {}