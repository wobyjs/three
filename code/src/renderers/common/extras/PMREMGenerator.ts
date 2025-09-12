import { Node } from '../../../../three-types'
// This path reflects a more modern, integrated location for the generator
import PMREMGenerator from 'three/src/renderers/common/extras/PMREMGenerator.js'
export * from 'three/src/renderers/common/extras/PMREMGenerator.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import { Renderer } from '../Renderer'
// import { Renderer } from 'three/src/renderers/Renderer.js' // Using the base Renderer for broader compatibility

declare module '../../../../lib/3/three'
{
	interface Three {
		PMREMGenerator: typeof PMREMGenerator
	}
}

Three.PMREMGenerator = PMREMGenerator

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			pmremGenerator: PMREMGeneratorProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		pmremGenerator: typeof pmremGenerator
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		pmremGenerator: typeof _pmremGenerator
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single 'renderer' argument.
const pmremGenerator = ([
	'renderer',
] as const).distinct()
consParams.pmremGenerator = pmremGenerator

// ---[ Object Properties ]---

// Lists the public methods and internal state properties of the class.
const _pmremGenerator = ([
	// Internal State Properties
	'_renderer',
	'_pingPongRenderTarget',
	'_lodMax',
	'_cubeSize',
	'_lodPlanes',
	'_sizeLods',
	'_sigmas',
	'_lodMeshes',
	'_blurMaterial',
	'_cubemapMaterial',
	'_equirectMaterial',
	'_backgroundBox',
	'_hasInitialized', // Getter, but accessed as a property

	// Public API Methods
	'fromScene',
	'fromSceneAsync',
	'fromEquirectangular',
	'fromEquirectangularAsync',
	'fromCubemap',
	'fromCubemapAsync',
	'compileCubemapShader',
	'compileEquirectangularShader',
	'dispose',

	// Internal "Private" Methods
	'_setSizeFromTexture',
	'_setSize',
	'_dispose',
	'_cleanup',
	'_fromTexture',
	'_allocateTargets',
	'_compileMaterial',
	'_sceneToCubeUV',
	'_textureToCubeUV',
	'_applyPMREM',
	'_blur',
	'_halfBlur',
] as const).distinct()
objProps.pmremGenerator = _pmremGenerator


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type PMREMGeneratorArgs = {
	renderer: Renderer
}

// The final Props type for the JSX component.
export type PMREMGeneratorProps = Node<PMREMGenerator, typeof PMREMGenerator, PMREMGeneratorArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		pmremGenerator: Partial<PMREMGeneratorArgs>
	}
}

// The 'renderer' argument is required, so the defaults object is empty.
defaults.pmremGenerator = {}
