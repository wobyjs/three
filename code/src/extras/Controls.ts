import { Node } from '../../three-types'
// This appears to be a custom abstract base class, not a standard part of the Three.js library.
// The import path is updated as requested.
import { Controls } from 'three/src/extras/Controls.js'
export * from 'three/src/extras/Controls.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'
import { Camera } from 'three/src/cameras/Camera.js'

declare module '../../lib/3/three'
{
	interface Three {
		Controls: typeof Controls
	}
}

Three.Controls = Controls

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			controls: ControlsProps,
		}
	}
}

declare module '../../lib/3/consParams' {
	interface consParams {
		controls: typeof controls
	}
}

declare module '../../lib/3/objProps' {
	interface objProps {
		controls: typeof _controls
	}
}

// ---[ Constructor Parameters ]---

const controls = ([
	'object',
	'domElement',
] as const).distinct()
consParams.controls = controls

// ---[ Object Properties ]---

// Inherits from EventDispatcher and adds its own properties and methods.
const _controls = ([
	...(objProps.eventDispatcher || []),
	'object',
	'domElement',
	'enabled',
	'state',
	'keys',
	'mouseButtons',
	'touches',
	'connect',
	'disconnect',
	'dispose',
	'update',
] as const).distinct()
objProps.controls = _controls


// ---[ Props & Defaults ]---

// Define the constructor arguments as a separate type.
type ControlsArgs = {
	object: Camera // The controlled object is typically a Camera.
	domElement?: HTMLElement | null
}

// The final Props type for the JSX component. Since this is an abstract class,
// it's mainly for typing and inheritance.
export type ControlsProps = Node<Controls<unknown>, typeof Controls, ControlsArgs>

declare module '../../lib/3/defaults' {
	interface defaults {
		controls: Partial<ControlsArgs>
	}
}

// 'object' is a required constructor argument, so it is not included in defaults.
defaults.controls = {}