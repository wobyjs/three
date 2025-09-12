import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Info from 'three/src/renderers/common/Info.js'
export { Info } //* from 'three/src/renderers/common/Info.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		Info: typeof Info
	}
}

Three.Info = Info

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			info: InfoProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		info: typeof info
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		info: typeof _info
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const info = ([] as const).distinct()
consParams.info = info

// ---[ Object Properties ]---

// This is a flat list of the class's properties and methods.
const _info = ([
	'autoReset',
	'frame',
	'calls',
	'render',
	'compute',
	'memory',
	'update',
	'reset',
	'dispose',
] as const).distinct()
objProps.info = _info


// ---[ Props & Defaults ]---

// Defines the settable properties for component creation.
type InfoArgs = {
	autoReset?: boolean
}

// The final Props type for the JSX component.
export type InfoProps = Node<Info, typeof Info, InfoArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		info: Partial<InfoArgs>
	}
}

defaults.info = {}