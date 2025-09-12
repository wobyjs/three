import { WaterMesh, WaterMeshOptions } from 'three/examples/jsm/objects/WaterMesh.js'
export { WaterMesh, WaterMeshOptions }

import { Node, WrapAsString } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../src/object/mesh'

declare module '../../../lib/3/three'
{
	interface Three {
		WaterMesh: typeof WaterMesh
		WaterMeshOptions: WaterMeshOptions
	}
}

Three.WaterMesh = WaterMesh

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			waterMesh: Water2Props,
			waterMeshOptions: WaterMeshOptions
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		waterMesh: typeof water
		waterMeshOptions: typeof waterMeshOptions
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		waterMesh: typeof _water
		waterMeshOptions: typeof _waterMeshOptions
	}
}

const water = ([...consParams.mesh,
	'geometry',
	'options',
] as const).distinct()
consParams.waterMesh = water

const _water = ([...objProps.mesh,
	'material',
] as const).distinct()
objProps.waterMesh = _water

const waterMeshOptions = ([
	'resolution',
	'waterNormals',
	'alpha',
	'size',
	'sunColor',
	'sunDirection',
	'waterColor',
	'distortionScale',
] as const).distinct()
consParams.waterMeshOptions = waterMeshOptions


const _waterMeshOptions = ([
	'resolution',
	'waterNormals',
	'alpha',
	'size',
	'sunColor',
	'sunDirection',
	'waterColor',
	'distortionScale',
] as const).distinct()
objProps.waterMeshOptions = _waterMeshOptions

export type Water2Props = Node<WaterMesh, typeof WaterMesh, { geometry: BufferGeometry; options: WaterMeshOptions }>
export type WaterMeshProps = Node<WaterMesh, typeof WaterMesh, { geometry: BufferGeometry; options: WaterMeshOptions }>

declare module '../../../lib/3/defaults' {
	interface defaults {
		waterMesh: Partial<{ geometry: BufferGeometry; options: WaterMeshOptions }>
		waterMeshOptions: Partial<WaterMeshOptions>

	}
}

defaults.waterMesh = {}
defaults.waterMeshOptions = {}
