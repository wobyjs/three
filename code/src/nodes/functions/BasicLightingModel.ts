import { Node } from '../../../three-types'
import BasicLightingModel from 'three/src/nodes/functions/BasicLightingModel.js'
export * from 'three/src/nodes/functions/BasicLightingModel.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		BasicLightingModel: typeof BasicLightingModel
	}
}

Three.BasicLightingModel = BasicLightingModel

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			basicLightingModel: BasicLightingModelProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		basicLightingModel: typeof basicLightingModel
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		basicLightingModel: typeof _basicLightingModel
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const basicLightingModel = ([] as const).distinct()
consParams.basicLightingModel = basicLightingModel

// ---[ Object Properties ]---

// Inherits from LightingModel and overrides the `indirect` and `finish` methods.
// Assumes `objProps.lightingModel` has been defined.
const _basicLightingModel = ([
	...(objProps.lightingModel || []),
	'indirect',
	'finish',
] as const).distinct()
objProps.basicLightingModel = _basicLightingModel


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type BasicLightingModelArgs = {}

// The final Props type for the JSX component.
export type BasicLightingModelProps = Node<BasicLightingModel, typeof BasicLightingModel, BasicLightingModelArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		basicLightingModel: Partial<BasicLightingModelArgs>
	}
}

defaults.basicLightingModel = {}