import { Object3DNode } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Material } from 'three/src/materials/Material.js'
import { MorphBlendMesh } from 'three/examples/jsm/misc/MorphBlendMesh.js'
export * from 'three/examples/jsm/misc/MorphBlendMesh.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        morphBlendMesh: typeof morphBlendMesh
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        morphBlendMesh: typeof _morphBlendMesh
    }
}



const morphBlendMesh = ([
    'geometry',
    'material',
] as const).distinct()
consParams.morphBlendMesh = morphBlendMesh



const _morphBlendMesh = ([...objProps.mesh,
    'animationsMap',
    'animationsList',
] as const).distinct()
objProps.morphBlendMesh = _morphBlendMesh

export type MorphBlendMeshProps = Object3DNode<MorphBlendMesh, typeof MorphBlendMesh, { geometry: BufferGeometry; material: Material; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        morphBlendMesh: Partial<{ geometry: BufferGeometry; material: Material; }>
    }
}

defaults.morphBlendMesh = {}

