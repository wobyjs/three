import { Node } from '../../../three-types'
import IESSpotLight from 'three/src/lights/webgpu/IESSpotLight.js'
export * from 'three/src/lights/webgpu/IESSpotLight.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
// import { ColorRepresentation } from 'three/src/utils.js'
import { Texture } from 'three/src/textures/Texture.js'
import { ColorRepresentation } from '../../math/Color'

declare module '../../../lib/3/three'
{
	interface Three {
		IESSpotLight: typeof IESSpotLight
	}
}

Three.IESSpotLight = IESSpotLight

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			iesSpotLight: IESSpotLightProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		iesSpotLight: typeof iesSpotLight
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		iesSpotLight: typeof _iesSpotLight
	}
}

// ---[ Constructor Parameters ]---

// Inherits constructor from SpotLight.
const iesSpotLight = ([
	'color',
	'intensity',
	'distance',
	'angle',
	'penumbra',
	'decay',
] as const).distinct()
consParams.iesSpotLight = iesSpotLight

// ---[ Object Properties ]---

// Inherits all properties from SpotLight and adds `iesMap`.
// Assumes `objProps.spotLight` has been defined previously.
const _iesSpotLight = ([
	...(objProps.spotLight || []),
	'iesMap',
] as const).distinct()
objProps.iesSpotLight = _iesSpotLight


// ---[ Props & Defaults ]---

// Define the constructor arguments and settable properties as a separate type.
type IESSpotLightArgs = {
	color?: ColorRepresentation
	intensity?: number
	distance?: number
	angle?: number
	penumbra?: number
	decay?: number
	iesMap?: Texture | null
}

// The final Props type for the JSX component.
export type IESSpotLightProps = Node<IESSpotLight, typeof IESSpotLight, IESSpotLightArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		iesSpotLight: Partial<IESSpotLightArgs>
	}
}

defaults.iesSpotLight = {}