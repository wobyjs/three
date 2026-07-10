import { MaterialNode } from './MaterialNode'
import { PointsMaterial } from 'three/src/materials/PointsMaterial.js'
export { PointsMaterial } from 'three/src/materials/PointsMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        pointsMaterial: WrapAsString<any>
        pointsMaterialParameters: WrapAsString<any>
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        pointsMaterial: typeof _pointsMaterial
        pointsMaterialParameters: typeof _pointsMaterialParameters
    }
}



consParams.pointsMaterialParameters = {
    ...(consParams.materialParameters ?? []),
    ...(['color',
        'map',
        'alphaMap',
        'size',
        'sizeAttenuation',
        'fog',
    ] as const).toObject()
}


consParams.pointsMaterial = { ...consParams.pointsMaterialParameters }



const _pointsMaterialParameters = ([...(objProps.materialParameters ?? []),
    'color',
    'map',
    'alphaMap',
    'size',
    'sizeAttenuation',
    'fog',
] as const)
objProps.pointsMaterialParameters = _pointsMaterialParameters


const _pointsMaterial = ([...(objProps.material ?? []),
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
] as const)
objProps.pointsMaterial = _pointsMaterial

export type PointsMaterialProps = MaterialNode<PointsMaterial, any>

declare module '../../lib/3/defaults' {
    interface defaults {
        pointsMaterial: Partial<any>
    }
}

defaults.pointsMaterial = {}
