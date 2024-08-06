import { MaterialNode } from './MaterialNode'
import { MeshDistanceMaterial, MeshDistanceMaterialParameters } from 'three/src/materials/MeshDistanceMaterial.js'
export { MeshDistanceMaterial } from 'three/src/materials/MeshDistanceMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Material'
import '../../lib/three/extensions'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        MeshDistanceMaterial: typeof MeshDistanceMaterial
    }
}

Three.MeshDistanceMaterial = MeshDistanceMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshDistanceMaterial: MeshDistanceMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        meshDistanceMaterial: WrapAsString<MeshDistanceMaterialParameters>
        meshDistanceMaterialParameters: WrapAsString<MeshDistanceMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        meshDistanceMaterial: string[]
        meshDistanceMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDistanceMaterial.d.ts

consParams.meshDistanceMaterialParameters = (['map',
    'alphaMap',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'farDistance',
    'nearDistance',
    'referencePosition',
] as const).toObject()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDistanceMaterial.d.ts    

objParams.meshDistanceMaterialParameters = [...objParams.materialParameters,
    'map',
    'alphaMap',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'farDistance',
    'nearDistance',
    'referencePosition',
].distinct()


objParams.meshDistanceMaterial = [...objParams.material,
    /**
     * @default 'MeshDistanceMaterial'
     */
    'type',
    /**
     * @default null
     */
    'map',
    /**
     * @default null
     */
    'alphaMap',
    /**
     * @default null
     */
    'displacementMap',
    /**
     * @default 1
     */
    'displacementScale',
    /**
     * @default 0
     */
    'displacementBias',
    /**
     * @default false
     */
    'fog',
].distinct()


consParams.meshDistanceMaterial = { ...consParams.meshDistanceMaterialParameters }

export type MeshDistanceMaterialProps = MaterialNode<MeshDistanceMaterial, MeshDistanceMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshDistanceMaterial: Partial<MeshDistanceMaterialParameters>
    }
}

defaults.meshDistanceMaterial = {}
