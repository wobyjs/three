// 1. Imports
import TiledLightsNode from 'three/examples/jsm/tsl/lighting/TiledLightsNode.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			tiledLightsNode: TiledLightsNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		tiledLightsNode: typeof tiledLightsNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		tiledLightsNode: typeof _tiledLightsNode
	}
}

// 3. Constructor and Object Property Arrays
const tiledLightsNode = ([
	'maxLights',
	'tileSize',
] as const).distinct()
consParams.tiledLightsNode = tiledLightsNode

// Inherits from LightsNode and adds its own specific properties
const _tiledLightsNode = ([
	...objProps.lightsNode, // <-- Inherits parent properties
	'materialLights',
	'tiledLights',
	'maxLights',
	'tileSize',
	'updateBeforeType',
	'hasLights',
] as const).distinct()
objProps.tiledLightsNode = _tiledLightsNode


// 4. Props Type Definition
export type TiledLightsNodeProps = Node<TiledLightsNode, typeof TiledLightsNode, {
	maxLights?: number
	tileSize?: number
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		tiledLightsNode: Partial<{
			maxLights?: number
			tileSize?: number
		}>
	}
}

// Set default values based on the constructor's signature.
defaults.tiledLightsNode = {
	maxLights: 1024,
	tileSize: 32,
}