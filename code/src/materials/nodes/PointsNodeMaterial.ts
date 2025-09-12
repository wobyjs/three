import { Node } from '../../../three-types'
import PointsNodeMaterial from 'three/src/materials/nodes/PointsNodeMaterial.js'
export * from 'three/src/materials/nodes/PointsNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js' // Assuming base parameters are sufficient
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		PointsNodeMaterial: typeof PointsNodeMaterial
	}
}

Three.PointsNodeMaterial = PointsNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			pointsNodeMaterial: PointsNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		pointsNodeMaterial: typeof pointsNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		pointsNodeMaterial: typeof _pointsNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const pointsNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.pointsNodeMaterial = pointsNodeMaterial

// ---[ Object Properties ]---

// Inherits from SpriteNodeMaterial and adds/overrides its own properties and methods.
// Assumes `objProps.spriteNodeMaterial` has been defined.
const _pointsNodeMaterial = ([
	...(objProps.spriteNodeMaterial || []),
	'sizeNode',
	'isPointsNodeMaterial',
	'setupPositionView', // Overridden method
	'setupVertex',       // Overridden method
	'alphaToCoverage',   // getter/setter
] as const).distinct()
objProps.pointsNodeMaterial = _pointsNodeMaterial


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
// Extends base parameters and adds point-specific ones.
type PointsNodeMaterialArgs = NodeMaterialParameters & { // Could extend SpriteNodeMaterialArgs if it exists
	size?: number
	sizeAttenuation?: boolean
	alphaToCoverage?: boolean
	sizeNode?: TSLNode | null
	rotationNode?: TSLNode | null // From SpriteNodeMaterial
	scaleNode?: TSLNode | null // From SpriteNodeMaterial
}

// The final Props type for the JSX component.
export type PointsNodeMaterialProps = Node<PointsNodeMaterial, typeof PointsNodeMaterial, PointsNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		pointsNodeMaterial: Partial<PointsNodeMaterialArgs>
	}
}

defaults.pointsNodeMaterial = {}