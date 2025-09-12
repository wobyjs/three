import { Node } from '../../../three-types'
import CubeRenderTarget from 'three/src/renderers/common/CubeRenderTarget.js'
export * from 'three/src/renderers/common/CubeRenderTarget.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		CubeRenderTarget: typeof CubeRenderTarget
	}
}

Three.CubeRenderTarget = CubeRenderTarget

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			cubeRenderTarget: CubeRenderTargetProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		cubeRenderTarget: typeof cubeRenderTarget
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		cubeRenderTarget: typeof _cubeRenderTarget
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes size and an optional options object.
const cubeRenderTarget = ([
	'size',
	'options',
] as const).distinct()
consParams.cubeRenderTarget = cubeRenderTarget

// ---[ Object Properties ]---

// Inherits from WebGLCubeRenderTarget and adds its own methods.
const _cubeRenderTarget = ([...objProps.webglCubeRenderTarget,
	'isCubeRenderTarget',
	'fromEquirectangularTexture',
] as const).distinct()
objProps.cubeRenderTarget = _cubeRenderTarget


// ---[ Props & Defaults ]---

// The options for the render target which get passed to the WebGLCubeRenderTarget constructor.
type CubeRenderTargetArgs = {
	size?: number
	options?: { [key: string]: any }
}

// The final Props type for the JSX component.
export type CubeRenderTargetProps = Node<CubeRenderTarget, typeof CubeRenderTarget, CubeRenderTargetArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		cubeRenderTarget: Partial<CubeRenderTargetArgs>
	}
}

defaults.cubeRenderTarget = {}