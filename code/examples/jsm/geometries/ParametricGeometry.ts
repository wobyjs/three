import { Vector3 } from '../../../three-types'
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js'
export * from 'three/examples/jsm/geometries/ParametricGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ParametricGeometry: typeof ParametricGeometry
    }
}

Three.ParametricGeometry = ParametricGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            parametricGeometry: ParametricGeometryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        parametricGeometry: typeof parametricGeometry
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        parametricGeometry: typeof _parametricGeometry
    }
}



const parametricGeometry = ([
    'func',
    'slices',
    'stacks',
] as const).distinct()
consParams.parametricGeometry = parametricGeometry

const _parametricGeometry = ([...objProps.bufferGeometry,
    /**
     * @default 'ParametricGeometry'
     */
    'type',
    'parameters',
] as const).distinct()
objProps.parametricGeometry = _parametricGeometry

export type ParametricGeometryProps = BufferGeometryNode<ParametricGeometry, typeof ParametricGeometry, { func?: (u: number, v: number, target: Vector3) => void; slices?: number; stacks?: number }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        parametricGeometry: Partial<{ func?: (u: number, v: number, target: Vector3) => void; slices?: number; stacks?: number }>
    }
}

defaults.parametricGeometry = {}