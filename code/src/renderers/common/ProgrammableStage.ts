import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import ProgrammableStage from 'three/src/renderers/common/ProgrammableStage.js'
export * from 'three/src/renderers/common/ProgrammableStage.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		ProgrammableStage: typeof ProgrammableStage
	}
}

Three.ProgrammableStage = ProgrammableStage

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			programmableStage: ProgrammableStageProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		programmableStage: typeof programmableStage
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		programmableStage: typeof _programmableStage
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes code, stage, name, and optional transforms and attributes.
const programmableStage = ([
	'code',
	'stage',
	'name',
	'transforms',
	'attributes',
] as const).distinct()
consParams.programmableStage = programmableStage

// ---[ Object Properties ]---

// Lists the properties of the class.
const _programmableStage = ([
	'id',
	'code',
	'stage',
	'name',
	'transforms',
	'attributes',
	'usedTimes',
] as const).distinct()
objProps.programmableStage = _programmableStage


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ProgrammableStageArgs = {
	code: string
	stage: 'vertex' | 'fragment' | 'compute'
	name: string
	transforms?: any[] | null // Replace 'any' with a more specific type if possible
	attributes?: any[] | null // Replace 'any' with a more specific type if possible
}

// The final Props type for the JSX component.
export type ProgrammableStageProps = Node<ProgrammableStage, typeof ProgrammableStage, ProgrammableStageArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		programmableStage: Partial<ProgrammableStageArgs>
	}
}

// The 'code', 'stage', and 'name' are required, so the defaults only includes optional props.
defaults.programmableStage = {}