import { ImageUtils } from 'three/src/extras/ImageUtils.js' // Historical path for this utility
export * from 'three/src/extras/ImageUtils.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'

declare module '../../lib/3/three'
{
	interface Three {
		ImageUtils: typeof ImageUtils
	}
}

// Make the static utility class available under the Three namespace.
Three.ImageUtils = ImageUtils

// Note: No JSX element, Props, or Defaults are created for ImageUtils
// because it is a static utility class and not an instantiable object.
// Its methods are called directly, e.g., Three.ImageUtils.getDataURL(image).

declare module '../../lib/3/consParams' {
	interface consParams {
		imageUtils: typeof imageUtils
	}
}

declare module '../../lib/3/objProps' {
	interface objProps {
		imageUtils: typeof _imageUtils
	}
}

// ---[ Constructor Parameters ]---

// ImageUtils has no constructor, so this is empty.
const imageUtils = ([] as const).distinct()
consParams.imageUtils = imageUtils

// ---[ Object Properties ]---

// ImageUtils has no instances, so there are no instance properties.
// The methods are static.
const _imageUtils = ([] as const).distinct()
objProps.imageUtils = _imageUtils