import { RefractorOptions, Refractor } from 'three/examples/jsm/objects/Refractor.js'
export * from 'three/examples/jsm/objects/Refractor.js'
import { Node } from '../../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Refractor: typeof Refractor
    }
}

Three.Refractor = Refractor

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            refractor: RefractorProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        refractor: typeof refractor
        refractorOptions: typeof refractorOptions
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        refractor: typeof _refractor
        refractorOptions: typeof _refractorOptions
    }
}



const refractorOptions = ([
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
] as const).distinct()
consParams.refractorOptions = refractorOptions


const refractor = ([
    'geometry',
    'options',
] as const).distinct()
consParams.refractor = refractor



const _refractorOptions = ([
    'color',
    'textureWidth',
    'textureHeight',
    'clipBias',
    'shader',
    'multisample',
] as const).distinct()
objProps.refractorOptions = _refractorOptions


const _refractor = ([...objProps.mesh,
    'camera',
] as const).distinct()
objProps.refractor = _refractor

export type RefractorProps = Node<Refractor, typeof Refractor, { geometry?: BufferGeometry; options?: RefractorOptions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        refractor: Partial<{ geometry?: BufferGeometry; options?: RefractorOptions; }>
    }
}

defaults.refractor = {}

