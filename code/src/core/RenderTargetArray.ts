import { Node } from '../../three-types'
// This class name is from an older version of Three.js. The import path is a guess
// based on common Three.js project structures. A modern equivalent is WebGLArrayRenderTarget.
import { RenderTargetArray } from 'three/src/core/RenderTargetArray.js'
export * from 'three/src/core/RenderTargetArray.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
	interface Three {
		RenderTargetArray: typeof RenderTargetArray
	}
}

Three.RenderTargetArray = RenderTargetArray

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderTargetArray: RenderTargetArrayProps,
		}
	}
}

declare module '../../lib/3/consParams' {
	interface consParams {
		renderTargetArray: typeof renderTargetArray
	}
}

declare module '../../lib/3/objProps' {
	interface objProps {
		renderTargetArray: typeof _renderTargetArray
	}
}

// ---[ Constructor Parameters ]---

const renderTargetArray = ([
	'width',
	'height',
	'depth',
	'options',
] as const).distinct()
consParams.renderTargetArray = renderTargetArray

// ---[ Object Properties ]---

// Inherits from RenderTarget and adds its own properties.
// The check for objProps.renderTarget ensures it works even if the base isn't defined yet.
const _renderTargetArray = ([
	...(objProps.renderTarget || []),
	'isRenderTargetArray',
	'depth',
] as const).distinct()
objProps.renderTargetArray = _renderTargetArray


// ---[ Props & Defaults ]---

// Define the constructor arguments as a separate type for clarity and reuse.
type RenderTargetArrayArgs = {
	width?: number
	height?: number
	depth?: number
	options?: Record<string, any> // Using generic object for options to prevent import errors
}

// The final Props type for the JSX component.
export type RenderTargetArrayProps = Node<RenderTargetArray, typeof RenderTargetArray, RenderTargetArrayArgs>

declare module '../../lib/3/defaults' {
	interface defaults {
		renderTargetArray: Partial<RenderTargetArrayArgs>
	}
}

defaults.renderTargetArray = {}