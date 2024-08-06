import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js'
export * from 'three/examples/jsm/geometries/BoxLineGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        boxLineGeometry: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        boxLineGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\BoxLineGeometry.d.ts

consParams.boxLineGeometry = [

    'width',
    'height',
    'depth',
    'widthSegments',
    'heightSegments',
    'depthSegments',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\BoxLineGeometry.d.ts    

objParams.boxLineGeometry = [...objParams.bufferGeometry,
].distinct()


export type BoxLineGeometryProps = BufferGeometryNode<BoxLineGeometry, typeof BoxLineGeometry, { width?: number; height?: number; depth?: number; widthSegments?: number; heightSegments?: number; depthSegments?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        boxLineGeometry: Partial<{ width?: number; height?: number; depth?: number; widthSegments?: number; heightSegments?: number; depthSegments?: number; }>
    }
}

defaults.boxLineGeometry = {}

