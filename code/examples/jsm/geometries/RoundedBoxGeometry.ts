import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
export * from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        RoundedBoxGeometry: typeof RoundedBoxGeometry
    }
}

Three.RoundedBoxGeometry = RoundedBoxGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            roundedBoxGeometry: RoundedBoxGeometryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        roundedBoxGeometry: typeof roundedBoxGeometry
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        roundedBoxGeometry: typeof _roundedBoxGeometry
    }
}



const roundedBoxGeometry = ([
    'width',
    'height',
    'depth',
    'segments',
    'radius',
] as const).distinct()
consParams.roundedBoxGeometry = roundedBoxGeometry



const _roundedBoxGeometry = ([...objProps.boxGeometry,
] as const).distinct()
objProps.roundedBoxGeometry = _roundedBoxGeometry

export type RoundedBoxGeometryProps = BufferGeometryNode<RoundedBoxGeometry, typeof RoundedBoxGeometry, { width?: number; height?: number; depth?: number; segments?: number; radius?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        roundedBoxGeometry: Partial<{ width?: number; height?: number; depth?: number; segments?: number; radius?: number; }>
    }
}

defaults.roundedBoxGeometry = {}

