import { Node } from '../../../three-types'
import { Curve } from 'three/src/extras/core/Curve.js'
export * from 'three/src/extras/core/Curve.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Vector2 } from '../../..//src/math/Vector2'

declare module '../../../lib/3/three'
{
	interface Three {
		Curve: typeof Curve
	}
}

Three.Curve = Curve

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			curve: CurveProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		curve: typeof curve
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		curve: typeof _curve
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const curve = ([] as const).distinct()
consParams.curve = curve

// ---[ Object Properties ]---

const _curve = ([
	'type',
	'arcLengthDivisions',
	'cacheArcLengths',
	'needsUpdate',
	'getPoint',
	'getPointAt',
	'getPoints',
	'getSpacedPoints',
	'getLength',
	'getLengths',
	'updateArcLengths',
	'getUtoTmapping',
	'getTangent',
	'getTangentAt',
	'computeFrenetFrames',
	'clone',
	'copy',
	'toJSON',
	'fromJSON',
] as const).distinct()
objProps.curve = _curve


// ---[ Props & Defaults ]---

// Define the constructor arguments as a separate type for clarity and reuse.
type CurveArgs = {
	arcLengthDivisions?: number
}

// The final Props type for the JSX component.
export type CurveProps = Node<Curve<Vector2>, typeof Curve, CurveArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		curve: Partial<CurveArgs>
	}
}

defaults.curve = {}