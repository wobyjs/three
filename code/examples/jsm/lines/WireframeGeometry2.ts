import { Object3DNode } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2.js'
export * from 'three/examples/jsm/lines/WireframeGeometry2.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './LineSegmentsGeometry'

declare module '../../../lib/3/three'
{
    interface Three {
        WireframeGeometry2: typeof WireframeGeometry2
    }
}

Three.WireframeGeometry2 = WireframeGeometry2

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            wireframeGeometry2: WireframeGeometry2Props,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        wireframeGeometry2: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        wireframeGeometry2: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\WireframeGeometry2.d.ts

consParams.wireframeGeometry2 = [
    'geometry',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\WireframeGeometry2.d.ts    

objParams.wireframeGeometry2 = [...objParams.lineSegmentsGeometry,
].distinct()

export type WireframeGeometry2Props = Object3DNode<WireframeGeometry2, typeof WireframeGeometry2, { geometry: BufferGeometry; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        wireframeGeometry2: Partial<{ geometry: BufferGeometry; }>
    }
}

defaults.wireframeGeometry2 = {}

