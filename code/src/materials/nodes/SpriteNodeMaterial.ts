import { Node } from '../../../three-types'
import SpriteNodeMaterial from 'three/src/materials/nodes/SpriteNodeMaterial.js'
export * from 'three/src/materials/nodes/SpriteNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		SpriteNodeMaterial: typeof SpriteNodeMaterial
	}
}

Three.SpriteNodeMaterial = SpriteNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			spriteNodeMaterial: SpriteNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		spriteNodeMaterial: typeof spriteNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		spriteNodeMaterial: typeof _spriteNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const spriteNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.spriteNodeMaterial = spriteNodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own properties and overridden methods.
// Assumes `objProps.nodeMaterial` has been defined.
const _spriteNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isSpriteNodeMaterial',
	'_useSizeAttenuation',
	'positionNode',
	'rotationNode',
	'scaleNode',
	'setupPositionView',
	'copy',
	'sizeAttenuation', // getter/setter
] as const).distinct()
objProps.spriteNodeMaterial = _spriteNodeMaterial


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
type SpriteNodeMaterialArgs = NodeMaterialParameters & {
	sizeAttenuation?: boolean
	positionNode?: TSLNode | null
	rotationNode?: TSLNode | null
	scaleNode?: TSLNode | null
}

// The final Props type for the JSX component.
export type SpriteNodeMaterialProps = Node<SpriteNodeMaterial, typeof SpriteNodeMaterial, SpriteNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		spriteNodeMaterial: Partial<SpriteNodeMaterialArgs>
	}
}

defaults.spriteNodeMaterial = {}