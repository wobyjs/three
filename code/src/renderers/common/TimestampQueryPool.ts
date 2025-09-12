import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import TimestampQueryPool from 'three/src/renderers/common/TimestampQueryPool.js'
export * from 'three/src/renderers/common/TimestampQueryPool.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		TimestampQueryPool: typeof TimestampQueryPool
	}
}

Three.TimestampQueryPool = TimestampQueryPool

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			timestampQueryPool: TimestampQueryPoolProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		timestampQueryPool: typeof timestampQueryPool
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		timestampQueryPool: typeof _timestampQueryPool
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes an optional maxQueries value.
const timestampQueryPool = ([
	'maxQueries',
] as const).distinct()
consParams.timestampQueryPool = timestampQueryPool

// ---[ Object Properties ]---

// Lists the properties and methods of the class.
const _timestampQueryPool = ([
	'trackTimestamp',
	'maxQueries',
	'currentQueryIndex',
	'queryOffsets',
	'isDisposed',
	'lastValue',
	'pendingResolve',
	'allocateQueriesForContext',
	'resolveQueriesAsync',
	'dispose',
] as const).distinct()
objProps.timestampQueryPool = _timestampQueryPool


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type TimestampQueryPoolArgs = {
	maxQueries?: number
}

// The final Props type for the JSX component.
export type TimestampQueryPoolProps = Node<TimestampQueryPool, typeof TimestampQueryPool, TimestampQueryPoolArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		timestampQueryPool: Partial<TimestampQueryPoolArgs>
	}
}

// The 'maxQueries' value is optional.
defaults.timestampQueryPool = {}