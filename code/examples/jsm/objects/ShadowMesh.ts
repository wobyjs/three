import { Node } from '../../../three-types'
import { Mesh } from 'three/src/objects/Mesh.js'
import { ShadowMesh } from 'three/examples/jsm/objects/ShadowMesh.js'
export * from 'three/examples/jsm/objects/ShadowMesh.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ShadowMesh: typeof ShadowMesh
    }
}

Three.ShadowMesh = ShadowMesh

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shadowMesh: ShadowMeshProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        shadowMesh: typeof shadowMesh
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        shadowMesh: typeof _shadowMesh
    }
}



const shadowMesh = ([
    'mesh',
] as const).distinct()
consParams.shadowMesh = shadowMesh



const _shadowMesh = ([...objProps.mesh,
    'meshMatrix',
] as const).distinct()
objProps.shadowMesh = _shadowMesh

export type ShadowMeshProps = Node<ShadowMesh, typeof ShadowMesh, { mesh: Mesh; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shadowMesh: Partial<{ mesh: Mesh; }>
    }
}

defaults.shadowMesh = {}

