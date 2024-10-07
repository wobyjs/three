import { type LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
import { Object3DNode } from '../../../three-types'
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js'
export * from 'three/examples/jsm/lines/Wireframe.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Wireframe: typeof Wireframe
    }
}

Three.Wireframe = Wireframe

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wireframe: WireframeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        wireframe: typeof wireframe
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        wireframe: typeof _wireframe
    }
}



const wireframe = ([
    'geometry',
    'material',
] as const).distinct()
consParams.wireframe = wireframe



const _wireframe = ([
    'geometry',
    'material',
] as const).distinct()
objProps.wireframe = _wireframe

export type WireframeProps = Object3DNode<Wireframe, typeof Wireframe, { geometry?: LineSegmentsGeometry; material?: LineMaterial; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        wireframe: { geometry?: LineSegmentsGeometry; material?: LineMaterial; }
    }
}

defaults.wireframe = {}

