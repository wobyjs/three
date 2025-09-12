import { Node } from '../../../three-types'
// Import all classes from the source file
import { SampledTexture, SampledArrayTexture, Sampled3DTexture, SampledCubeTexture } from 'three/src/renderers/common/SampledTexture.js'
export * from 'three/src/renderers/common/SampledTexture.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		SampledTexture: typeof SampledTexture,
		SampledArrayTexture: typeof SampledArrayTexture,
		Sampled3DTexture: typeof Sampled3DTexture,
		SampledCubeTexture: typeof SampledCubeTexture
	}
}

Three.SampledTexture = SampledTexture
Three.SampledArrayTexture = SampledArrayTexture
Three.Sampled3DTexture = Sampled3DTexture
Three.SampledCubeTexture = SampledCubeTexture

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			sampledTexture: SampledTextureProps,
			sampledArrayTexture: SampledArrayTextureProps,
			sampled3DTexture: Sampled3DTextureProps,
			sampledCubeTexture: SampledCubeTextureProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		sampledTexture: typeof sampledTexture,
		sampledArrayTexture: typeof sampledArrayTexture,
		sampled3DTexture: typeof sampled3DTexture,
		sampledCubeTexture: typeof sampledCubeTexture,
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		sampledTexture: typeof _sampledTexture,
		sampledArrayTexture: typeof _sampledArrayTexture,
		sampled3DTexture: typeof _sampled3DTexture,
		sampledCubeTexture: typeof _sampledCubeTexture,
	}
}

// ---[ Constructor Parameters ]---

const sampledTexture = (['name', 'texture'] as const).distinct()
consParams.sampledTexture = sampledTexture

const sampledArrayTexture = ([...consParams.sampledTexture] as const).distinct()
consParams.sampledArrayTexture = sampledArrayTexture

const sampled3DTexture = ([...consParams.sampledTexture] as const).distinct()
consParams.sampled3DTexture = sampled3DTexture

const sampledCubeTexture = ([...consParams.sampledTexture] as const).distinct()
consParams.sampledCubeTexture = sampledCubeTexture

// ---[ Object Properties ]---

const _sampledTexture = ([
	...(objProps.binding || []),
	'id',
	'texture',
	'version',
	'store',
	'generation',
	'isSampledTexture',
	'needsBindingsUpdate',
	'update',
] as const).distinct()
objProps.sampledTexture = _sampledTexture

const _sampledArrayTexture = ([
	...objProps.sampledTexture,
	'isSampledArrayTexture',
] as const).distinct()
objProps.sampledArrayTexture = _sampledArrayTexture

const _sampled3DTexture = ([
	...objProps.sampledTexture,
	'isSampled3DTexture',
] as const).distinct()
objProps.sampled3DTexture = _sampled3DTexture

const _sampledCubeTexture = ([
	...objProps.sampledTexture,
	'isSampledCubeTexture',
] as const).distinct()
objProps.sampledCubeTexture = _sampledCubeTexture

// ---[ Props & Defaults ]---

type SampledTextureArgs = {
	name: string
	texture?: any
}

export type SampledTextureProps = Node<SampledTexture, typeof SampledTexture, SampledTextureArgs>
export type SampledArrayTextureProps = Node<SampledArrayTexture, typeof SampledArrayTexture, SampledTextureArgs>
export type Sampled3DTextureProps = Node<Sampled3DTexture, typeof Sampled3DTexture, SampledTextureArgs>
export type SampledCubeTextureProps = Node<SampledCubeTexture, typeof SampledCubeTexture, SampledTextureArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		sampledTexture: Partial<SampledTextureArgs>,
		sampledArrayTexture: Partial<SampledTextureArgs>,
		sampled3DTexture: Partial<SampledTextureArgs>,
		sampledCubeTexture: Partial<SampledTextureArgs>,
	}
}

defaults.sampledTexture = {}
defaults.sampledArrayTexture = {}
defaults.sampled3DTexture = {}
defaults.sampledCubeTexture = {}