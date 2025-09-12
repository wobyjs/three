import { ShapeUtils } from 'three/src/extras/ShapeUtils.js'
export * from 'three/src/extras/ShapeUtils.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'

declare module '../../lib/3/three'
{
	interface Three {
		ShapeUtils: typeof ShapeUtils
	}
}

// Make the static utility class available under the Three namespace.
Three.ShapeUtils = ShapeUtils

// Note: No JSX element, Props, or Defaults are created for ShapeUtils
// because it is a static utility class. Its methods are called directly,
// e.g., Three.ShapeUtils.area(contour).

declare module '../../lib/3/consParams' {
	interface consParams {
		shapeUtils: typeof shapeUtils
	}
}

declare module '../../lib/3/objProps' {
	interface objProps {
		shapeUtils: typeof _shapeUtils
	}
}

// ---[ Constructor Parameters ]---

// ShapeUtils has no constructor, so this is empty.
const shapeUtils = ([] as const).distinct()
consParams.shapeUtils = shapeUtils

// ---[ Object Properties ]---

// ShapeUtils has no instances, so there are no instance properties.
// The methods (area, isClockWise, triangulateShape) are all static.
const _shapeUtils = ([] as const).distinct()
objProps.shapeUtils = _shapeUtils