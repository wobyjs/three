import { Node } from '../../../three-types'
import { Box3 } from 'three/src/math/Box3.js'
import { Octree } from 'three/examples/jsm/math/Octree.js'
export * from 'three/examples/jsm/math/Octree.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Octree: typeof Octree
    }
}

Three.Octree = Octree

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            octree: OctreeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        octree: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        octree: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Octree.d.ts

consParams.octree = [
    'box',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\Octree.d.ts

objParams.octree = [
    'box',
    'bounds',
    'subTrees',
    'triangles',
    'layers',
].distinct()

export type OctreeProps = Node<Octree, typeof Octree, { box?: Box3 | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        octree: Partial<{ box?: Box3 | null; }>
    }
}

defaults.octree = {}

