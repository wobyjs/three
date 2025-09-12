import { LineSegments2 as WebGPULineSegments2 } from 'three/examples/jsm/lines/webgpu/LineSegments2'
import { LineSegmentsGeometry } from "../LineSegmentsGeometry"
import { Line2NodeMaterial } from '../../../../src/materials/nodes/Line2NodeMaterial'
import { Object3DNode } from '../../../../three-types'

import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import '../../../../src/objects/Mesh'

declare module '../../../../lib/3/three'
{
	interface Three {
		WebGPULineSegments2: typeof WebGPULineSegments2
	}
}

Three.WebGPULineSegments2 = WebGPULineSegments2

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			webGPULineSegments2: WebGPULineSegments2Props,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		webGPULineSegments2: typeof webGPULineSegments2
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		webGPULineSegments2: typeof _webGPULineSegments2
	}
}

const webGPULineSegments2 = ([//...consParams.lineSegments2,
	'geometry',
	'material',
] as const).distinct()
consParams.webGPULineSegments2 = webGPULineSegments2

const _webGPULineSegments2 = ([...objProps.mesh,
	'isLineSegments2',
	'type',
	'resolution',
] as const).distinct()
objProps.webGPULineSegments2 = _webGPULineSegments2

export type WebGPULineSegments2Props = Object3DNode<WebGPULineSegments2, typeof WebGPULineSegments2, { geometry: LineSegmentsGeometry, material: Line2NodeMaterial }>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		webGPULineSegments2: { geometry?: LineSegmentsGeometry, material?: Line2NodeMaterial }
	}
}

defaults.webGPULineSegments2 = {}

