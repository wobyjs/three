import {
	LightProbe,
} from 'three'
import { TextureHelper } from 'three/examples/jsm/helpers/TextureHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three' {
	interface Three {
		TextureHelper: typeof TextureHelper
	}
}

Three.TextureHelper = TextureHelper

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			TextureHelper: TextureHelperProps
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		TextureHelper: typeof textureHelper
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		TextureHelper: typeof _textureHelper
	}
}

const textureHelper = ([
	'texture',
	'width',
	'height',
	'depth',
] as const).distinct()

consParams.TextureHelper = textureHelper

const _textureHelper = ([...objProps.mesh,
	'texture',
	'type'
] as const).distinct()

objProps.TextureHelper = _textureHelper

export type TextureHelperProps = {
	lightProbe: LightProbe
	size?: number
}

declare module '../../../lib/3/defaults' {
	interface defaults {
		TextureHelper: Partial<TextureHelperProps>
	}
}

defaults.TextureHelper = {
	size: 1
}

