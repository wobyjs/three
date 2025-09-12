import { Node } from '../../../three-types'
import ShadowNode, {
	shadow,
	BasicShadowFilter,
	PCFShadowFilter,
	PCFSoftShadowFilter,
	VSMShadowFilter
} from 'three/src/nodes/lighting/ShadowNode.js'
export * from 'three/src/nodes/lighting/ShadowNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Light } from 'three/src/lights/Light.js'
import { LightShadow } from 'three/src/lights/LightShadow.js'

declare module '../../../lib/3/three'
{
	interface Three {
		ShadowNode: typeof ShadowNode,
		shadow: typeof shadow,

		// Shadow Filter Functions
		BasicShadowFilter: typeof BasicShadowFilter,
		PCFShadowFilter: typeof PCFShadowFilter,
		PCFSoftShadowFilter: typeof PCFSoftShadowFilter,
		VSMShadowFilter: typeof VSMShadowFilter
	}
}

// Make the class, factory function, and all filter functions available under the Three namespace.
Three.ShadowNode = ShadowNode
Three.shadow = shadow
Three.BasicShadowFilter = BasicShadowFilter
Three.PCFShadowFilter = PCFShadowFilter
Three.PCFSoftShadowFilter = PCFSoftShadowFilter
Three.VSMShadowFilter = VSMShadowFilter

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			shadowNode: ShadowNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		shadowNode: typeof shadowNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		shadowNode: typeof _shadowNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a 'light' and an optional 'shadow' object.
const shadowNode = ([
	'light',
	'shadow',
] as const).distinct()
consParams.shadowNode = shadowNode

// ---[ Object Properties ]---

// Inherits from ShadowBaseNode and adds a large number of properties and methods.
// Assumes `objProps.shadowBaseNode` has been defined.
const _shadowNode = ([
	...(objProps.shadowBaseNode || []),
	'isShadowNode',
	'shadow',
	'shadowMap',
	'vsmShadowMapVertical',
	'vsmShadowMapHorizontal',
	'vsmMaterialVertical',
	'vsmMaterialHorizontal',
	'_node',
	'setupShadowFilter',
	'setupShadowCoord',
	'getShadowFilterFn',
	'setupShadow',
	'setup',
	'renderShadow',
	'updateShadow',
	'vsmPass',
	'dispose',
	'updateBefore',
] as const).distinct()
objProps.shadowNode = _shadowNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ShadowNodeArgs = {
	light: Light
	shadow?: LightShadow | null
}

// The final Props type for the JSX component.
export type ShadowNodeProps = Node<ShadowNode, typeof ShadowNode, ShadowNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		shadowNode: Partial<ShadowNodeArgs>
	}
}

// The 'light' argument is required, so the defaults object is empty.
defaults.shadowNode = {}