import { Node } from '../../three-types'
// This class name is from an older version of Three.js. The import path is a guess
// based on common Three.js project structures.
import { RenderTarget3D } from 'three/src/core/RenderTarget3D.js'
export * from 'three/src/core/RenderTarget3D.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
	interface Three {
		RenderTarget3D: typeof RenderTarget3D
	}
}

Three.RenderTarget3D = RenderTarget3D

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderTarget3D: RenderTarget3DProps,
		}
	}
}

declare module '../../lib/3/consParams' {
	interface consParams {
		renderTarget3D: typeof renderTarget3D
	}
}

declare module '../../lib/3/objProps' {
	interface objProps {
		renderTarget3D: typeof _renderTarget3D
	}
}

// ---[ Constructor Parameters ]---

const renderTarget3D = ([
	'width',
	'height',
	'depth',
	'options',
] as const).distinct()
consParams.renderTarget3D = renderTarget3D

// ---[ Object Properties ]---

// Inherits from RenderTarget and adds its own properties.
// The check ensures this works even if `renderTarget` hasn't been defined yet.
const _renderTarget3D = ([
	...(objProps.renderTarget || []),
	'isRenderTarget3D',
	'depth',
] as const).distinct()
objProps.renderTarget3D = _renderTarget3D


// ---[ Props & Defaults ]---

// Define the constructor arguments as a separate type for clarity.
// Using a generic object for 'options' to avoid potential import path errors.
type RenderTarget3DArgs = {
	width?: number
	height?: number
	depth?: number
	options?: Record<string, any>
}

// The final Props type for the JSX component.
export type RenderTarget3DProps = Node<RenderTarget3D, typeof RenderTarget3D, RenderTarget3DArgs>

declare module '../../lib/3/defaults' {
	interface defaults {
		renderTarget3D: Partial<RenderTarget3DArgs>
	}
}

defaults.renderTarget3D = {}