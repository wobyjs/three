import { LineSegments2 as WebGPUWireframe2 } from 'three/examples/jsm/lines/webgpu/LineSegments2'
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
		WebGPUWireframe2: typeof WebGPUWireframe2
	}
}

Three.WebGPUWireframe2 = WebGPUWireframe2

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			webGPUWireframe2: WebGPULineSegments2Props,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		webGPUWireframe2: typeof webGPUWireframe2
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		webGPUWireframe2: typeof _webGPUWireframe2
	}
}

const webGPUWireframe2 = ([//...consParams.lineSegments2,
	'geometry',
	'material',
] as const).distinct()
consParams.webGPUWireframe2 = webGPUWireframe2

const _webGPUWireframe2 = ([...objProps.mesh,
	'isWireframe',
	'type',
] as const).distinct()
objProps.webGPUWireframe2 = _webGPUWireframe2

export type WebGPULineSegments2Props = Object3DNode<WebGPUWireframe2, typeof WebGPUWireframe2, { geometry: LineSegmentsGeometry, material: Line2NodeMaterial }>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		webGPUWireframe2: { geometry?: LineSegmentsGeometry, material?: Line2NodeMaterial }
	}
}

defaults.webGPUWireframe2 = {}


