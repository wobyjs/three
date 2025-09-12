// 1. Imports
import { SceneOptimizer } from 'three/examples/jsm/utils/SceneOptimizer.js' // Assuming a path
import { Scene } from 'three/src/scenes/Scene.js'
import { Node } from '../../../three-types'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Helper interface for the optional params object
interface SceneOptimizerOptions {
	debug?: boolean
}


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			sceneOptimizer: SceneOptimizerProps
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		sceneOptimizer: typeof sceneOptimizer
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		sceneOptimizer: typeof _sceneOptimizer
	}
}

// 3. Constructor and Object Property Arrays
const sceneOptimizer = ([
	'scene',
	'options',
] as const).distinct()
consParams.sceneOptimizer = sceneOptimizer

// This is a base class, so no inheritance in objProps
const _sceneOptimizer = ([
	// Properties
	'scene',
	'debug',
	// Methods
	'bufferToHash',
	'getMaterialPropertiesHash',
	'getAttributesSignature',
	'getGeometryHash',
	'getBatchKey',
	'analyzeModel',
	'createBatchedMeshes',
	'removeEmptyNodes',
	'disposeMeshes',
	'logDebugInfo',
	'toBatchedMesh',
	'toInstancingMesh',
] as const).distinct()
objProps.sceneOptimizer = _sceneOptimizer


// 4. Props Type Definition
export type SceneOptimizerProps = Node<SceneOptimizer, typeof SceneOptimizer, {
	scene: Scene
	options?: SceneOptimizerOptions
}>

// 5. Defaults
declare module '../../../lib/3/defaults' {
	interface defaults {
		sceneOptimizer: Partial<{
			scene: Scene
			options?: SceneOptimizerOptions
		}>
	}
}

// The 'options' parameter defaults to an empty object in the constructor.
defaults.sceneOptimizer = {
	options: {},
}