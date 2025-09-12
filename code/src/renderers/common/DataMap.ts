import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import DataMap from 'three/src/renderers/common/DataMap.js'
export * from 'three/src/renderers/common/DataMap.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		DataMap: typeof DataMap
	}
}

Three.DataMap = DataMap

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			dataMap: DataMapProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		dataMap: typeof dataMap
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		dataMap: typeof _dataMap
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const dataMap = ([] as const).distinct()
consParams.dataMap = dataMap

// ---[ Object Properties ]---

// This is a flat list of the class's properties and methods.
const _dataMap = ([
	'data',
	'get',
	'delete',
	'has',
	'dispose',
] as const).distinct()
objProps.dataMap = _dataMap


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type DataMapArgs = {}

// The final Props type for the JSX component.
export type DataMapProps = Node<DataMap<any>, typeof DataMap, DataMapArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		dataMap: Partial<DataMapArgs>
	}
}

defaults.dataMap = {}