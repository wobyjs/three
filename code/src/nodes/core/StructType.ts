import { Node } from '../../../three-types'
import StructType from 'three/src/nodes/core/StructType.js'
export * from 'three/src/nodes/core/StructType.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		StructType: typeof StructType
	}
}

Three.StructType = StructType

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			structType: StructTypeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		structType: typeof structType
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		structType: typeof _structType
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a 'name' and 'members'.
const structType = ([
	'name',
	'members',
] as const).distinct()
consParams.structType = structType

// ---[ Object Properties ]---

// Lists the instance properties of the class.
const _structType = ([
	'name',
	'members',
	'output',
] as const).distinct()
objProps.structType = _structType


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type StructTypeArgs = {
	name: string
	members: Record<string, string> // e.g. { position: 'vec3', normal: 'vec3' }
}

// The final Props type for the JSX component.
export type StructTypeProps = Node<StructType, typeof StructType, StructTypeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		structType: Partial<StructTypeArgs>
	}
}

// 'name' and 'members' are required constructor arguments, so defaults is empty.
defaults.structType = {}