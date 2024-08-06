import { type LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
import { Object3DNode } from '../../../three-types'
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js'
export * from 'three/examples/jsm/lines/Wireframe.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        wireframe: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        wireframe: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\Wireframe.d.ts

consParams.wireframe = [
    'geometry',
    'material',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\Wireframe.d.ts    

objParams.wireframe = [
    'geometry',
    'material',
].distinct()

export type WireframeProps = Object3DNode<Wireframe, typeof Wireframe, { geometry?: LineSegmentsGeometry; material?: LineMaterial; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        wireframe: { geometry?: LineSegmentsGeometry; material?: LineMaterial; }
    }
}

defaults.wireframe = {}

