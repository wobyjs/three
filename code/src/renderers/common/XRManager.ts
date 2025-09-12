import { Node } from '../../../three-types'
// This is a core class for XR management.
import XRManager from 'three/src/renderers/common/XRManager.js'
export * from 'three/src/renderers/common/XRManager.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Import necessary dependencies for type hints (not necessarily used in the constructor)

declare module '../../../lib/3/three'
{
	interface Three {
		XRManager: typeof XRManager
	}
}

Three.XRManager = XRManager

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			xRManager: XRManagerProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		xRManager: typeof xRManager
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		xRManager: typeof _xRManager
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a renderer object.
const xRManager = ([
	'renderer',
] as const).distinct()
consParams.xRManager = xRManager

// ---[ Object Properties ]---

// Combines EventDispatcher properties with the XRManager's specific properties.
const _xRManager = ([
	...(objProps.eventDispatcher || []),
	'enabled',
	'isPresenting', // getter
	'cameraAutoUpdate',
	'_renderer',
	'_cameraL',
	'_cameraR',
	'_cameras',
	'_cameraXR',
	'_currentDepthNear',
	'_currentDepthFar',
	'_controllers',
	'_controllerInputSources',
	'_currentRenderTarget',
	'_xrRenderTarget',
	'_currentAnimationContext',
	'_currentAnimationLoop',
	'_currentPixelRatio',
	'_currentSize',
	'_onSessionEvent',
	'_onSessionEnd',
	'_onInputSourcesChange',
	'_onAnimationFrame',
	'_referenceSpace',
	'_referenceSpaceType',
	'_customReferenceSpace',
	'_framebufferScaleFactor',
	'_foveation',
	'_session',
	'_glBaseLayer',
	'_glBinding',
	'_glProjLayer',
	'_xrFrame',
	'_useLayers',
	'getController',
	'getControllerGrip',
	'getHand',
	'getFoveation',
	'setFoveation',
	'getFramebufferScaleFactor',
	'setFramebufferScaleFactor',
	'getReferenceSpaceType',
	'setReferenceSpaceType',
	'getReferenceSpace',
	'setReferenceSpace',
	'getCamera',
	'getEnvironmentBlendMode',
	'getFrame',
	'getSession',
	'setSession',
	'updateCamera',
] as const).distinct()
objProps.xRManager = _xRManager


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type XRManagerArgs = {
	renderer: any // Type hint: Renderer, but that may cause circular dependencies.
}

// The final Props type for the JSX component.
export type XRManagerProps = Node<XRManager, typeof XRManager, XRManagerArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		xRManager: Partial<XRManagerArgs>
	}
}

// As XRManager takes a renderer class which needs to be initiated, and that is framework specific, there is no default arg
defaults.xRManager = {}