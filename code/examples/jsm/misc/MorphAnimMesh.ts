import { Object3DNode } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { MorphAnimMesh } from 'three/examples/jsm/misc/MorphAnimMesh.js'
export * from 'three/examples/jsm/misc/MorphAnimMesh.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MorphAnimMesh: typeof MorphAnimMesh
    }
}

Three.MorphAnimMesh = MorphAnimMesh

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            morphAnimMesh: MorphAnimMeshProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        morphAnimMesh: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        morphAnimMesh: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphAnimMesh.d.ts

consParams.morphAnimMesh = [
    'geometry',
    'material',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphAnimMesh.d.ts    

objParams.morphAnimMesh = [...objParams.mesh,
    'mixer',
    'activeAction',
].distinct()

export type MorphAnimMeshProps = Object3DNode<MorphAnimMesh, typeof MorphAnimMesh, { geometry: BufferGeometry; material: Material; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        morphAnimMesh: Partial<{ geometry: BufferGeometry; material: Material; }>
    }
}

defaults.morphAnimMesh = {}

