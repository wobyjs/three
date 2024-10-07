import { Octree } from 'three/examples/jsm/math/Octree.js'
import { Node } from '../../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { OctreeHelper } from 'three/examples/jsm/helpers/OctreeHelper.js'
export * from 'three/examples/jsm/helpers/OctreeHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        OctreeHelper: typeof OctreeHelper
    }
}

Three.OctreeHelper = OctreeHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            octreeHelper: OctreeHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        octreeHelper: typeof octreeHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        octreeHelper: typeof _octreeHelper
    }
}



const octreeHelper = ([
    'octree',
    'color',
] as const).distinct()
consParams.octreeHelper = octreeHelper



const _octreeHelper = ([...objProps.lineSegments,
    'octree',
    'color',
    /**
     * @default 'OctreeHelper'
     */
    'type',
] as const).distinct()
objProps.octreeHelper = _octreeHelper

export type OctreeHelperProps = Node<OctreeHelper, typeof OctreeHelper, { octree: Octree; color?: ColorRepresentation; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        octreeHelper: Partial<{ octree: Octree; color?: ColorRepresentation; }>
    }
}

defaults.octreeHelper = {}

