import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js'
export * from 'three/examples/jsm/geometries/BoxLineGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BoxLineGeometry: typeof BoxLineGeometry
    }
}

Three.BoxLineGeometry = BoxLineGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            boxLineGeometry: BoxLineGeometryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        boxLineGeometry: typeof boxLineGeometry
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        boxLineGeometry: typeof _boxLineGeometry
    }
}



const boxLineGeometry = ([

    'width',
    'height',
    'depth',
    'widthSegments',
    'heightSegments',
    'depthSegments',
] as const).distinct()
consParams.boxLineGeometry = boxLineGeometry



const _boxLineGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.boxLineGeometry = _boxLineGeometry


export type BoxLineGeometryProps = BufferGeometryNode<BoxLineGeometry, typeof BoxLineGeometry, { width?: number; height?: number; depth?: number; widthSegments?: number; heightSegments?: number; depthSegments?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        boxLineGeometry: Partial<{ width?: number; height?: number; depth?: number; widthSegments?: number; heightSegments?: number; depthSegments?: number; }>
    }
}

defaults.boxLineGeometry = {}

