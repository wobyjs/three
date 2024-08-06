import { Node } from '../../../three-types'
import { Mesh } from 'three/src/objects/Mesh.js'
import { ShadowMesh } from 'three/examples/jsm/objects/ShadowMesh.js'
export * from 'three/examples/jsm/objects/ShadowMesh.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        shadowMesh: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        shadowMesh: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ShadowMesh.d.ts

consParams.shadowMesh = [
    'mesh',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\objects\ShadowMesh.d.ts    

objParams.shadowMesh = [...objParams.mesh,
    'meshMatrix',
].distinct()

export type ShadowMeshProps = Node<ShadowMesh, typeof ShadowMesh, { mesh: Mesh; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shadowMesh: Partial<{ mesh: Mesh; }>
    }
}

defaults.shadowMesh = {}

