import { Line2 as WebGPULine2 } from 'three/examples/jsm/lines/webgpu/Line2.js'
import { Line2NodeMaterial } from '../../../../src/materials/nodes/Line2NodeMaterial'
import { LineGeometry } from '../LineGeometry'

import { Object3DNode } from '../../../../three-types'

import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import './LineSegments2'

declare module '../../../../lib/3/three'
{
	interface Three {
		WebGPULine2: typeof WebGPULine2
	}
}

Three.WebGPULine2 = WebGPULine2

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			webGPULine2: Line2Props,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		webGPULine2: typeof webGPULine2
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		webGPULine2: typeof _webGPULine2
	}
}

const webGPULine2 = ([//...consParams.lineSegments2,
	'geometry',
	'material',
] as const).distinct()
consParams.webGPULine2 = webGPULine2

const _webGPULine2 = ([...objProps.lineSegments2,
	'geometry',
	'material',
	'isLine2'
] as const).distinct()
objProps.webGPULine2 = _webGPULine2

export type Line2Props = Object3DNode<WebGPULine2, typeof WebGPULine2, { geometry: LineGeometry, material: Line2NodeMaterial }>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		webGPULine2: { geometry?: LineGeometry; material?: Line2NodeMaterial }
	}
}

defaults.webGPULine2 = {}

