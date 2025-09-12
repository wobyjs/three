import { Node } from '../../../three-types'
import { SkyMesh } from 'three/examples/jsm/objects/SkyMesh.js'
export * from 'three/examples/jsm/objects/SkyMesh.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		SkyMesh: typeof SkyMesh
	}
}

Three.SkyMesh = SkyMesh

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			skyMesh: SkyProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		skyMesh: typeof skyMesh
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		skyMesh: typeof _skyMesh
	}
}


const skyMesh = ([
] as const).distinct()
consParams.skyMesh = skyMesh


const _skyMesh = ([...objProps.mesh,
	'turbidity',
	'rayleigh',
	'mieCoefficient',
	'mieDirectionalG',
	'sunPosition',
	'upUniform',
	'isSky',
] as const).distinct()
objProps.skyMesh = _skyMesh

export type SkyProps = Node<SkyMesh, typeof SkyMesh, {}>

declare module '../../../lib/3/defaults' {
	interface defaults {
		skyMesh: Partial<{}>
	}
}

defaults.skyMesh = {}

