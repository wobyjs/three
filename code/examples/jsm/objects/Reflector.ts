import { ReflectorOptions, Reflector } from 'three/examples/jsm/objects/Reflector.js'
export * from 'three/examples/jsm/objects/Reflector.js'
import { Node } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Reflector: typeof Reflector
    }
}

Three.Reflector = Reflector

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            reflector: ReflectorProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        reflector: typeof reflector
        reflectorOptions: typeof reflectorOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        reflector: typeof _reflector
        reflectorOptions: typeof _reflectorOptions
    }
}


const reflectorOptions = ([
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
] as const).distinct()
consParams.reflectorOptions = reflectorOptions


const reflector = ([
    'geometry',
    'options',
] as const).distinct()
consParams.reflector = reflector



const _reflectorOptions = ([
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
] as const).distinct()
objProps.reflectorOptions = _reflectorOptions


const _reflector = ([...objProps.mesh,
    'camera',
] as const).distinct()
objProps.reflector = _reflector

export type ReflectorProps = Node<Reflector, typeof Reflector, { geometry?: BufferGeometry; options?: ReflectorOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        reflector: Partial<{ geometry?: BufferGeometry; options?: ReflectorOptions; }>
    }
}

defaults.reflector = {}

