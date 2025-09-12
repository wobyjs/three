import { MaterialNode } from '../../../src/materials/MaterialNode'
import { LDrawConditionalLineMaterial } from 'three/examples/jsm/materials/LDrawConditionalLineMaterial.js'
export * from 'three/examples/jsm/materials/LDrawConditionalLineMaterial.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { WrapAsString } from '../../../three-types'
import { ShaderMaterialParameters } from '../../../src/materials/ShaderMaterial'

declare module '../../../lib/3/three'
{
	interface Three {
		LDrawConditionalLineMaterial: typeof LDrawConditionalLineMaterial
	}
}

Three.LDrawConditionalLineMaterial = LDrawConditionalLineMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			lDrawConditionalLineMaterial: LDrawConditionalLineMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		lDrawConditionalLineMaterial: WrapAsString<ShaderMaterialParameters>
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		lDrawConditionalLineMaterial: typeof _lDrawConditionalLineMaterial
	}
}


/**
 * LDrawConditionalLineMaterial
 *
 * Lambert illumination model with Gouraud (per-vertex) shading
 */

consParams.lDrawConditionalLineMaterial = { ...consParams.shaderMaterialParameters }


/**
 * LDrawConditionalLineMaterial
 *
 * Lambert illumination model with Gouraud (per-vertex) shading
 */

const _lDrawConditionalLineMaterial = ([...objProps.shaderMaterial,
	'opacity',
	'color',
	'isLDrawConditionalLineMaterial',
] as const).distinct()
objProps.lDrawConditionalLineMaterial = _lDrawConditionalLineMaterial

export type LDrawConditionalLineMaterialProps = MaterialNode<LDrawConditionalLineMaterial, typeof LDrawConditionalLineMaterial>

declare module '../../../lib/3/defaults' {
	interface defaults {
		lDrawConditionalLineMaterial: Partial<LDrawConditionalLineMaterial>
	}
}

defaults.lDrawConditionalLineMaterial = {}


