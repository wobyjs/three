import { Node } from '../../../three-types'
import { Box3 } from 'three/src/math/Box3.js'
import { Octree } from 'three/examples/jsm/math/Octree.js'
export * from 'three/examples/jsm/math/Octree.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        octree: typeof octree
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        octree: typeof _octree
    }
}



const octree = ([
    'box',
] as const).distinct()
consParams.octree = octree



const _octree = ([
    'box',
    'bounds',
    'subTrees',
    'triangles',
    'layers',
] as const).distinct()
objProps.octree = _octree

export type OctreeProps = Node<Octree, typeof Octree, { box?: Box3 | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        octree: Partial<{ box?: Box3 | null; }>
    }
}

defaults.octree = {}

