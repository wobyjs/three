import { Node } from '../../three-types'
import { PropertyMixer } from 'three/src/animation/PropertyMixer.js'
export { PropertyMixer } from 'three/src/animation/PropertyMixer.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        PropertyMixer: typeof PropertyMixer
    }
}

Three.PropertyMixer = PropertyMixer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            propertyMixer: PropertyMixerProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        propertyMixer: typeof propertyMixer
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        propertyMixer: typeof _propertyMixer
    }
}



const propertyMixer = ([
    'binding',
    'typeName',
    'valueSize',
] as const).distinct()
consParams.propertyMixer = propertyMixer


const _propertyMixer = ([
    'binding',
    'valueSize',
    'buffer',
    'cumulativeWeight',
    'cumulativeWeightAdditive',
    'useCount',
    'referenceCount',
] as const).distinct()
objProps.propertyMixer = _propertyMixer

export type PropertyMixerProps = Node<PropertyMixer, typeof PropertyMixer, { binding: any; typeName: string; valueSize: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        propertyMixer: Partial<{ binding: any; typeName: string; valueSize: number; }>
    }
}

defaults.propertyMixer = {}