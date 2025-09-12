import { Node } from '../../../three-types'
import ToonLightingModel from 'three/src/nodes/functions/ToonLightingModel.js'
export * from 'three/src/nodes/functions/ToonLightingModel.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		ToonLightingModel: typeof ToonLightingModel
	}
}

Three.ToonLightingModel = ToonLightingModel

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			toonLightingModel: ToonLightingModelProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		toonLightingModel: typeof toonLightingModel
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		toonLightingModel: typeof _toonLightingModel
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const toonLightingModel = ([] as const).distinct()
consParams.toonLightingModel = toonLightingModel

// ---[ Object Properties ]---

// Inherits from LightingModel and overrides the `direct` and `indirect` methods.
// Assumes `objProps.lightingModel` has been defined.
const _toonLightingModel = ([
	...(objProps.lightingModel || []),
	'direct',
	'indirect',
] as const).distinct()
objProps.toonLightingModel = _toonLightingModel


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type ToonLightingModelArgs = {}

// The final Props type for the JSX component.
export type ToonLightingModelProps = Node<ToonLightingModel, typeof ToonLightingModel, ToonLightingModelArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		toonLightingModel: Partial<ToonLightingModelArgs>
	}
}

defaults.toonLightingModel = {}