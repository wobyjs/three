import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import UniformsGroup from 'three/src/renderers/common/UniformsGroup.js'
export * from 'three/src/renderers/common/UniformsGroup.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		Renderers_UniformsGroup: typeof UniformsGroup
	}
}

Three.Renderers_UniformsGroup = UniformsGroup

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderers_uniformsGroup: UniformsGroupProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderers_uniformsGroup: typeof uniformsGroup
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderers_uniformsGroup: typeof _uniformsGroup
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a name.
const uniformsGroup = (['name'] as const).distinct()
consParams.renderers_uniformsGroup = uniformsGroup

// ---[ Object Properties ]---

// Inherits from UniformBuffer and adds its own properties and methods.
// Assumes `objProps.uniformBuffer` has been defined.
const _uniformsGroup = ([
	...(objProps.uniformBuffer || []),
	'uniforms',
	'addUniform',
	'removeUniform',
	'values',
	'byteLength',
	'update',
	'updateByType',
	'updateNumber',
	'updateVector2',
	'updateVector3',
	'updateVector4',
	'updateColor',
	'updateMatrix3',
	'updateMatrix4',
	'_getBufferForType',
] as const).distinct()
objProps.renderers_uniformsGroup = _uniformsGroup

// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type UniformsGroupArgs = {
	name: string
}

// The final Props type for the JSX component.
export type UniformsGroupProps = Node<UniformsGroup, typeof UniformsGroup, UniformsGroupArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderers_uniformsGroup: Partial<UniformsGroupArgs>
	}
}

// The 'name' is a required argument, so the defaults object is empty.
defaults.renderers_uniformsGroup = {}