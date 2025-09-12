import { WaterOptions, Water as Water2 } from 'three/examples/jsm/objects/Water2.js'
export { Water2, WaterOptions }

import { Node } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../src/object/mesh'

declare module '../../../lib/3/three'
{
    interface Three {
        Water2: typeof Water2
    }
}

Three.Water2 = Water2

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            water2: Water2Props,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        water2: typeof water
        water2Options: typeof water2Options
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        water2: typeof _water
        water2Options: typeof _water2Options
    }
}

const water = ([...consParams.mesh,
    'geometry',
    'options',
] as const).distinct()
consParams.water2 = water

const _water = ([...objProps.mesh,
    'material',
] as const).distinct()
objProps.water2 = _water

const water2Options = ([
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'flowDirection',
    'flowSpeed',
    'reflectivity',
    'scale',
    'shader',
    'flowMap',
    'normalMap0',
    'normalMap1',
] as const).distinct()
consParams.water2Options = water2Options


const _water2Options = ([
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'flowDirection',
    'flowSpeed',
    'reflectivity',
    'scale',
    'shader',
    'flowMap',
    'normalMap0',
    'normalMap1',
] as const).distinct()
objProps.water2Options = _water2Options

export type Water2Props = Node<Water2, typeof Water2, { geometry: BufferGeometry; options: WaterOptions }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        water2: Partial<{ geometry: BufferGeometry; options: WaterOptions }>
    }
}

defaults.water2 = {}

