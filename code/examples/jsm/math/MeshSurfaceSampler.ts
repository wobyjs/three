import { Node } from '../../../three-types'
import { Mesh } from 'three/src/objects/Mesh.js'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js'
export * from 'three/examples/jsm/math/MeshSurfaceSampler.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        meshSurfaceSampler: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        meshSurfaceSampler: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\MeshSurfaceSampler.d.ts

consParams.meshSurfaceSampler = [
    'mesh',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\math\MeshSurfaceSampler.d.ts

objParams.meshSurfaceSampler = [
    'distribution',
    'geometry',
    'positionAttribute',
    'weightAttribute',
].distinct()

export type MeshSurfaceSamplerProps = Node<MeshSurfaceSampler, typeof MeshSurfaceSampler, { mesh: Mesh; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        meshSurfaceSampler: Partial<{ mesh: Mesh; }>
    }
}

defaults.meshSurfaceSampler = {}

