import { Object3DNode } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { MorphAnimMesh } from 'three/examples/jsm/misc/MorphAnimMesh.js'
export * from 'three/examples/jsm/misc/MorphAnimMesh.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        morphAnimMesh: typeof morphAnimMesh
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        morphAnimMesh: typeof _morphAnimMesh
    }
}



const morphAnimMesh = ([
    'geometry',
    'material',
] as const).distinct()
consParams.morphAnimMesh = morphAnimMesh



const _morphAnimMesh = ([...objProps.mesh,
    'mixer',
    'activeAction',
] as const).distinct()
objProps.morphAnimMesh = _morphAnimMesh

export type MorphAnimMeshProps = Object3DNode<MorphAnimMesh, typeof MorphAnimMesh, { geometry: BufferGeometry; material: Material; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        morphAnimMesh: Partial<{ geometry: BufferGeometry; material: Material; }>
    }
}

defaults.morphAnimMesh = {}

