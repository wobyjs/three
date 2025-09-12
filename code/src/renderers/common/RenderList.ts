import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import RenderList from 'three/src/renderers/common/RenderList.js'
export * from 'three/src/renderers/common/RenderList.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
// Import dependency types
import { Lighting } from './Lighting'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'

declare module '../../../lib/3/three'
{
	interface Three {
		RenderList: typeof RenderList
	}
}

Three.RenderList = RenderList

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderList: RenderListProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderList: typeof renderList
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderList: typeof _renderList
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a lighting manager, a scene, and a camera.
const renderList = ([
	'lighting',
	'scene',
	'camera',
] as const).distinct()
consParams.renderList = renderList

// ---[ Object Properties ]---

// This is a flat list of the class's properties and methods.
const _renderList = ([
	'renderItems',
	'renderItemsIndex',
	'opaque',
	'transparentDoublePass',
	'transparent',
	'bundles',
	'lightsNode',
	'lightsArray',
	'scene',
	'camera',
	'occlusionQueryCount',
	'begin',
	'getNextRenderItem',
	'push',
	'unshift',
	'pushBundle',
	'pushLight',
	'sort',
	'finish',
] as const).distinct()
objProps.renderList = _renderList


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type RenderListArgs = {
	lighting: Lighting
	scene: Scene
	camera: Camera
}

// The final Props type for the JSX component.
export type RenderListProps = Node<RenderList, typeof RenderList, RenderListArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderList: Partial<RenderListArgs>
	}
}

// All constructor arguments are required, so the defaults object is empty.
defaults.renderList = {}