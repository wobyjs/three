import { Node } from '../../../three-types'
import { Mesh } from 'three/src/objects/Mesh.js'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'
export * from 'three/examples/jsm/math/MeshSurfaceSampler.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MeshSurfaceSampler: typeof MeshSurfaceSampler
    }
}

Three.MeshSurfaceSampler = MeshSurfaceSampler

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshSurfaceSampler: MeshSurfaceSamplerProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        meshSurfaceSampler: typeof meshSurfaceSampler
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        meshSurfaceSampler: typeof _meshSurfaceSampler
    }
}



const meshSurfaceSampler = ([
    'mesh',
] as const).distinct()
consParams.meshSurfaceSampler = meshSurfaceSampler



const _meshSurfaceSampler = ([
    'distribution',
    'geometry',
    'positionAttribute',
    'weightAttribute',
] as const).distinct()
objProps.meshSurfaceSampler = _meshSurfaceSampler

export type MeshSurfaceSamplerProps = Node<MeshSurfaceSampler, typeof MeshSurfaceSampler, { mesh: Mesh; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        meshSurfaceSampler: Partial<{ mesh: Mesh; }>
    }
}

defaults.meshSurfaceSampler = {}

