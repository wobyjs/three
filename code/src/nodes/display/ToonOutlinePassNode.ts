import { Node } from '../../../three-types'
import ToonOutlinePassNode, { toonOutlinePass } from 'three/src/nodes/display/ToonOutlinePassNode.js'
export * from 'three/src/nodes/display/ToonOutlinePassNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		ToonOutlinePassNode: typeof ToonOutlinePassNode,
		toonOutlinePass: typeof toonOutlinePass
	}
}

// Make the class and the factory function available under the Three namespace.
Three.ToonOutlinePassNode = ToonOutlinePassNode
Three.toonOutlinePass = toonOutlinePass

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			toonOutlinePassNode: ToonOutlinePassNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		toonOutlinePassNode: typeof toonOutlinePassNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		toonOutlinePassNode: typeof _toonOutlinePassNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes the scene, camera, and specific nodes for outline properties.
const toonOutlinePassNode = ([
	'scene',
	'camera',
	'colorNode',
	'thicknessNode',
	'alphaNode',
] as const).distinct()
consParams.toonOutlinePassNode = toonOutlinePassNode

// ---[ Object Properties ]---

// Inherits from PassNode and adds its own properties and methods.
// Assumes `objProps.passNode` has been defined.
const _toonOutlinePassNode = ([
	...(objProps.passNode || []),
	'colorNode',
	'thicknessNode',
	'alphaNode',
	'_materialCache',
	'updateBefore',
	'_createMaterial',
	'_getOutlineMaterial',
] as const).distinct()
objProps.toonOutlinePassNode = _toonOutlinePassNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ToonOutlinePassNodeArgs = {
	scene: Scene
	camera: Camera
	colorNode: TSLNode
	thicknessNode: TSLNode
	alphaNode: TSLNode
}

// The final Props type for the JSX component.
export type ToonOutlinePassNodeProps = Node<ToonOutlinePassNode, typeof ToonOutlinePassNode, ToonOutlinePassNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		toonOutlinePassNode: Partial<ToonOutlinePassNodeArgs>
	}
}

// The constructor arguments are required, so the defaults object is empty.
defaults.toonOutlinePassNode = {}