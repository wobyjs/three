import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import RenderObject from 'three/src/renderers/common/RenderObject.js'
export * from 'three/src/renderers/common/RenderObject.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Import dependency types
// import { Nodes } from 'three/src/renderers/nodes/Nodes.js'
// import { Geometries } from 'three/src/renderers/common/Geometries.js'
// import { Renderer } from 'three/src/renderers/Renderer.js'
// import { Scene } from 'three/src/scenes/Scene.js'
// import { Camera } from 'three/src/cameras/Camera.js'

declare module '../../../lib/3/three'
{
	interface Three {
		RenderObject: typeof RenderObject
	}
}

Three.RenderObject = RenderObject

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderObject: RenderObjectProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderObject: typeof renderObject
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderObject: typeof _renderObject
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes renderer components and scene object data.
const renderObject = ([
	'nodes',
	'geometries',
	'renderer',
	'object',
	'material',
	'scene',
	'camera',
	'lightsNode',
	'renderContext',
	'clippingContext',
] as const).distinct()
consParams.renderObject = renderObject

// ---[ Object Properties ]---

// All the internal properties and methods that define the core RenderObject functionality.
const _renderObject = ([
	'id',
	'_nodes',
	'_geometries',
	'renderer',
	'object',
	'material',
	'scene',
	'camera',
	'lightsNode',
	'context',
	'geometry',
	'version',
	'drawRange',
	'attributes',
	'pipeline',
	'group',
	'vertexBuffers',
	'drawParams',
	'bundle',
	'clippingContext',
	'clippingContextCacheKey',
	'initialNodesCacheKey',
	'initialCacheKey',
	'_nodeBuilderState',
	'_bindings',
	'_monitor',
	'onDispose',
	'isRenderObject',
	'onMaterialDispose',
	'updateClipping',
	'clippingNeedsUpdate', // getter
	'hardwareClippingPlanes', // getter
	'getNodeBuilderState',
	'getMonitor',
	'getBindings',
	'getBindingGroup',
	'getIndex',
	'getIndirect',
	'getChainArray',
	'setGeometry',
	'getAttributes',
	'getVertexBuffers',
	'getDrawParameters',
	'getGeometryCacheKey',
	'getMaterialCacheKey',
	'needsGeometryUpdate', // getter
	'needsUpdate', // getter
	'getDynamicCacheKey',
	'getCacheKey',
	'dispose',
] as const).distinct()
objProps.renderObject = _renderObject


// ---[ Props & Defaults ]---

// As this is an internal class, defining default objects is unnecessary
type RenderObjectArgs = {
	nodes: any // Nodes object or class, but needs to avoid circular dependency.  Adjust to the actual type if needed.
	geometries: any // Geometries object or class, but needs to avoid circular dependency.
	renderer: any // Can be a base Renderer.
	object: any  // Type can be Object3D, but avoids circular dependency
	material: any // Type can be Material, but avoids circular dependency
	scene: any   // Type can be Scene, but avoids circular dependency
	camera: any   // Type can be Camera, but avoids circular dependency
	lightsNode: any // Assuming LightsNode is already handled elsewhere
	renderContext: any
	clippingContext: any
}

// The final Props type for the JSX component.
export type RenderObjectProps = Node<RenderObject, typeof RenderObject, RenderObjectArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderObject: Partial<RenderObjectArgs>
	}
}

// There is no good 'default' for this, so leave it empty
defaults.renderObject = {}