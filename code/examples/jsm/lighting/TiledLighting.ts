import { Node } from '../../../three-types'
import '../../../src/lights/Light'
import { TiledLighting } from 'three/examples/jsm/lighting/TiledLighting.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Light } from '../../../src/lights/Light'

declare module '../../../lib/3/three'
{
	interface Three {
		TiledLighting: typeof TiledLighting
	}
}

Three.TiledLighting = TiledLighting

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			tiledLighting: TiledLightinProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		tiledLighting: typeof tiledLighting
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		tiledLighting: typeof _tiledLighting
	}
}

const tiledLighting = ([//...consParams.lineSegments2,
] as const).distinct()
consParams.tiledLighting = tiledLighting

const _tiledLighting = ([...objProps.light,
	// 'geometry',
	// 'material',
] as const).distinct()
objProps.tiledLighting = _tiledLighting

export type TiledLightinProps = Node<TiledLighting, typeof TiledLighting, { lights?: Light[] }>

declare module '../../../lib/3/defaults' {
	interface defaults {
		tiledLighting: { lights?: Light[] }
	}
}

defaults.tiledLighting = {}

