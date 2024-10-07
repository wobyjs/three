import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js'
export * from 'three/examples/jsm/geometries/TeapotGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TeapotGeometry: typeof TeapotGeometry
    }
}

Three.TeapotGeometry = TeapotGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            teapotGeometry: TeapotGeometryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        teapotGeometry: typeof teapotGeometry
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        teapotGeometry: typeof _teapotGeometry
    }
}



const teapotGeometry = ([

    'size',
    'segments',
    'bottom',
    'lid',
    'body',
    'fitLid',
    'blinn',
] as const).distinct()
consParams.teapotGeometry = teapotGeometry



const _teapotGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.teapotGeometry = _teapotGeometry

export type TeapotGeometryProps = BufferGeometryNode<TeapotGeometry, typeof TeapotGeometry, { size?: number; segments?: number; bottom?: boolean; lid?: boolean; body?: boolean; fitLid?: boolean; blinn?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        teapotGeometry: Partial<{ size?: number; segments?: number; bottom?: boolean; lid?: boolean; body?: boolean; fitLid?: boolean; blinn?: boolean; }>
    }
}

defaults.teapotGeometry = {}

