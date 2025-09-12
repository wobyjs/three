// 1. Imports
// Path is updated to reflect the webgpu version, likely in a different subfolder.
import { ShadowMapViewer } from 'three/examples/jsm/utils/ShadowMapViewer.js'
import { Light } from 'three/src/lights/Light.js'
import { Node } from '../../../three-types'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			shadowMapViewer: ShadowMapViewerProps
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		shadowMapViewer: typeof shadowMapViewer
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		shadowMapViewer: typeof _shadowMapViewer
	}
}

// 3. Constructor and Object Property Arrays
const shadowMapViewer = ([
	'light',
] as const).distinct()
consParams.shadowMapViewer = shadowMapViewer

// This is a base class. We list all its public-facing members.
const _shadowMapViewer = ([
	// Properties
	'enabled',
	'size',
	'position',
	// Methods
	'render',
	'updateForWindowResize',
	'update',
] as const).distinct()
objProps.shadowMapViewer = _shadowMapViewer


// 4. Props Type Definition
export type ShadowMapViewerProps = Node<ShadowMapViewer, typeof ShadowMapViewer, {
	light: Light
}>

// 5. Defaults
declare module '../../../lib/3/defaults' {
	interface defaults {
		shadowMapViewer: Partial<{
			light: Light
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.shadowMapViewer = {}