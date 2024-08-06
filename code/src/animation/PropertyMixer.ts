import { Object3DNode } from '../../three-types'
import { PropertyMixer } from 'three/src/animation/PropertyMixer.js'
export { PropertyMixer } from 'three/src/animation/PropertyMixer.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        propertyMixer: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        propertyMixer: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\PropertyMixer.d.ts

consParams.propertyMixer = [
    'binding',
    'typeName',
    'valueSize',
].distinct()


objParams.propertyMixer = [
    'binding',
    'valueSize',
    'buffer',
    'cumulativeWeight',
    'cumulativeWeightAdditive',
    'useCount',
    'referenceCount',
].distinct()

export type PropertyMixerProps = Object3DNode<PropertyMixer, typeof PropertyMixer, { binding: any; typeName: string; valueSize: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        propertyMixer: Partial<{ binding: any; typeName: string; valueSize: number; }>
    }
}

defaults.propertyMixer = {}