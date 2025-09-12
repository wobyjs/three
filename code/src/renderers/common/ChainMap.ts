import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import ChainMap from 'three/src/renderers/common/ChainMap.js'
export * from 'three/src/renderers/common/ChainMap.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		ChainMap: typeof ChainMap
	}
}

Three.ChainMap = ChainMap

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			chainMap: ChainMapProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		chainMap: typeof chainMap
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		chainMap: typeof _chainMap
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const chainMap = ([] as const).distinct()
consParams.chainMap = chainMap

// ---[ Object Properties ]---

// Lists the instance properties and methods.
const _chainMap = ([
	'weakMap',
	'get',
	'set',
	'delete',
] as const).distinct()
objProps.chainMap = _chainMap


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type ChainMapArgs = {}

// The final Props type for the JSX component.
export type ChainMapProps = Node<ChainMap<any, any>, typeof ChainMap, ChainMapArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		chainMap: Partial<ChainMapArgs>
	}
}

// This class has no constructor arguments, so the defaults object is empty.
defaults.chainMap = {}