import { Octree } from 'three/examples/jsm/math/Octree.js'
import { Node } from '../../../three-types'
import { ColorRepresentation } from 'three/src/math/Color.js'
import { OctreeHelper } from 'three/examples/jsm/helpers/OctreeHelper.js'
export * from 'three/examples/jsm/helpers/OctreeHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        octreeHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        octreeHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\OctreeHelper.d.ts

consParams.octreeHelper = [
    'octree',
    'color',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\OctreeHelper.d.ts    

objParams.octreeHelper = [...objParams.lineSegments,
    'octree',
    'color',
    /**
     * @default 'OctreeHelper'
     */
    'type',
].distinct()

export type OctreeHelperProps = Node<OctreeHelper, typeof OctreeHelper, { octree: Octree; color?: ColorRepresentation; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        octreeHelper: Partial<{ octree: Octree; color?: ColorRepresentation; }>
    }
}

defaults.octreeHelper = {}

