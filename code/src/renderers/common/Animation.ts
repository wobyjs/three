import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Animation from 'three/src/renderers/common/Animation.js'
export * from 'three/src/renderers/common/Animation.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
// Import dependencies for type hints
import { Nodes } from './nodes/Nodes'
import { Info } from './Info'

declare module '../../../lib/3/three'
{
	interface Three {
		Animation: typeof Animation
	}
}

Three.Animation = Animation

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			animation: AnimationProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		animation: typeof animation
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		animation: typeof _animation
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes nodes and info managers.
const animation = ([
	'nodes',
	'info',
] as const).distinct()
consParams.animation = animation

// ---[ Object Properties ]---

// This is a flat list of the class's properties and methods.
const _animation = ([
	'nodes',
	'info',
	'_context',
	'_animationLoop',
	'_requestId',
	'start',
	'stop',
	'getAnimationLoop',
	'setAnimationLoop',
	'getContext',
	'setContext',
	'dispose',
] as const).distinct()
objProps.animation = _animation


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type AnimationArgs = {
	nodes: Nodes
	info: Info
}

// The final Props type for the JSX component.
export type AnimationProps = Node<Animation, typeof Animation, AnimationArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		animation: Partial<AnimationArgs>
	}
}

// The constructor arguments are required, so the defaults object is empty.
defaults.animation = {}