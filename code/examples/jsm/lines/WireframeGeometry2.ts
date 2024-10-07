import { Node } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2.js'
export * from 'three/examples/jsm/lines/WireframeGeometry2.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        wireframeGeometry2: typeof wireframeGeometry2
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        wireframeGeometry2: typeof _wireframeGeometry2
    }
}



const wireframeGeometry2 = ([
    'geometry',
] as const).distinct()
consParams.wireframeGeometry2 = wireframeGeometry2



const _wireframeGeometry2 = ([...objProps.lineSegmentsGeometry,
] as const).distinct()
objProps.wireframeGeometry2 = _wireframeGeometry2

export type WireframeGeometry2Props = Node<WireframeGeometry2, typeof WireframeGeometry2, { geometry: BufferGeometry; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        wireframeGeometry2: Partial<{ geometry: BufferGeometry; }>
    }
}

defaults.wireframeGeometry2 = {}

