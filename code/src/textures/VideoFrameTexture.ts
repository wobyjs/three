import { Node } from '../../three-types'
import { VideoFrameTexture } from 'three/src/textures/VideoFrameTexture.js'
export * from 'three/src/textures/VideoFrameTexture.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'
import './VideoTexture'

declare module '../../lib/3/three'
{
	interface Three {
		VideoFrameTexture: typeof VideoFrameTexture
	}
}

Three.VideoFrameTexture = VideoFrameTexture

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			videoFrameTexture: VideoFrameTextureProps,
		}
	}
}

declare module '../../lib/3/consParams' {
	interface consParams {
		videoFrameTexture: typeof videoFrameTexture
	}
}

declare module '../../lib/3/objProps' {
	interface objProps {
		videoFrameTexture: typeof _videoFrameTexture
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes optional arguments from VideoTexture - not all are required
const videoFrameTexture = ([
	'mapping',
	'wrapS',
	'wrapT',
	'magFilter',
	'minFilter',
	'format',
	'type',
	'anisotropy',
] as const).distinct()
consParams.videoFrameTexture = videoFrameTexture

// ---[ Object Properties ]---

// Inherits from VideoTexture and adds its own methods and properties.
// Assumes `objProps.videoTexture` has been defined.
const _videoFrameTexture = ([
	...(objProps.videoTexture || []),
	'isVideoFrameTexture',
	'update', // Overridden method
	'clone',  // Overridden method
	'setFrame',
] as const).distinct()
objProps.videoFrameTexture = _videoFrameTexture


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type VideoFrameTextureArgs = {
	mapping?: any // Type from Texture
	wrapS?: any  // Type from Texture
	wrapT?: any  // Type from Texture
	magFilter?: any  // Type from Texture
	minFilter?: any  // Type from Texture
	format?: any  // Type from Texture
	type?: any  // Type from Texture
	anisotropy?: any  // Type from Texture
}

// The final Props type for the JSX component.
export type VideoFrameTextureProps = Node<VideoFrameTexture, typeof VideoFrameTexture, VideoFrameTextureArgs>

declare module '../../lib/3/defaults' {
	interface defaults {
		videoFrameTexture: Partial<VideoFrameTextureArgs>
	}
}

defaults.videoFrameTexture = {}