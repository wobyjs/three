import { WaterOptions, Water } from 'three/examples/jsm/objects/Water.js'
export * from 'three/examples/jsm/objects/Water.js'
import { Node } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Water: typeof Water
    }
}

Three.Water = Water

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            water: WaterProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        water: typeof water
        waterOptions: typeof waterOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        water: typeof _water
        waterOptions: typeof _waterOptions
    }
}


const waterOptions = ([
    'textureWidth',
    'textureHeight',
    'clipBias',
    'alpha',
    'time',
    'waterNormals',
    'sunDirection',
    'sunColor',
    'waterColor',
    'eye',
    'distortionScale',
    'side',
    'fog',
] as const).distinct()
consParams.waterOptions = waterOptions


const water = ([
    'geometry',
    'options',
] as const).distinct()
consParams.water = water


const _waterOptions = ([
    'textureWidth',
    'textureHeight',
    'clipBias',
    'alpha',
    'time',
    'waterNormals',
    'sunDirection',
    'sunColor',
    'waterColor',
    'eye',
    'distortionScale',
    'side',
    'fog',
] as const).distinct()
objProps.waterOptions = _waterOptions


const _water = ([...objProps.mesh,
    'material',
] as const).distinct()
objProps.water = _water

export type WaterProps = Node<Water, typeof Water, { geometry: BufferGeometry; options: WaterOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        water: Partial<{ geometry: BufferGeometry; options: WaterOptions; }>
    }
}

defaults.water = {}

