import { MaterialNode } from './MaterialNode'
import { PointsMaterial, PointsMaterialParameters } from 'three/src/materials/PointsMaterial.js'
export { PointsMaterial, PointsMaterialParameters } from 'three/src/materials/PointsMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Material'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        PointsMaterial: typeof PointsMaterial
    }
}

Three.PointsMaterial = PointsMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointsMaterial: PointsMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        pointsMaterial: WrapAsString<PointsMaterialParameters>
        pointsMaterialParameters: WrapAsString<PointsMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        pointsMaterial: string[]
        pointsMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\PointsMaterial.d.ts

consParams.pointsMaterialParameters = {
    ...consParams.materialParameters,
    ...(['color',
        'map',
        'alphaMap',
        'size',
        'sizeAttenuation',
        'fog',
    ] as const).toObject()
}


consParams.pointsMaterial = { ...consParams.pointsMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\PointsMaterial.d.ts    

objParams.pointsMaterialParameters = [...objParams.materialParameters,
    'color',
    'map',
    'alphaMap',
    'size',
    'sizeAttenuation',
    'fog',
].distinct()


objParams.pointsMaterial = [...objParams.material,
    /**
     * @default 'PointsMaterial'
     */
    'type',
    /**
     * @default new THREE.Color( 0xffffff )
     */
    'color',
    /**
     * @default null
     */
    'map',
    /**
     * @default null
     */
    'alphaMap',
    /**
     * @default 1
     */
    'size',
    /**
     * @default true
     */
    'sizeAttenuation',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
].distinct()

export type PointsMaterialProps = MaterialNode<PointsMaterial, PointsMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        pointsMaterial: Partial<PointsMaterialParameters>
    }
}

defaults.pointsMaterial = {}
