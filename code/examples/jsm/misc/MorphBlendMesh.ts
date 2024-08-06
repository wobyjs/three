import { Object3DNode } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { MorphBlendMesh } from 'three/examples/jsm/misc/MorphBlendMesh.js'
export * from 'three/examples/jsm/misc/MorphBlendMesh.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MorphBlendMesh: typeof MorphBlendMesh
    }
}

Three.MorphBlendMesh = MorphBlendMesh

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            morphBlendMesh: MorphBlendMeshProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        morphBlendMesh: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        morphBlendMesh: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphBlendMesh.d.ts

consParams.morphBlendMesh = [
    'geometry',
    'material',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\MorphBlendMesh.d.ts    

objParams.morphBlendMesh = [...objParams.mesh,
    'animationsMap',
    'animationsList',
].distinct()

export type MorphBlendMeshProps = Object3DNode<MorphBlendMesh, typeof MorphBlendMesh, { geometry: BufferGeometry; material: Material; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        morphBlendMesh: Partial<{ geometry: BufferGeometry; material: Material; }>
    }
}

defaults.morphBlendMesh = {}

