import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
export * from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        roundedBoxGeometry: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        roundedBoxGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\RoundedBoxGeometry.d.ts

consParams.roundedBoxGeometry = [
    'width',
    'height',
    'depth',
    'segments',
    'radius',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\RoundedBoxGeometry.d.ts    

objParams.roundedBoxGeometry = [...objParams.boxGeometry,
].distinct()

export type RoundedBoxGeometryProps = BufferGeometryNode<RoundedBoxGeometry, typeof RoundedBoxGeometry, { width?: number; height?: number; depth?: number; segments?: number; radius?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        roundedBoxGeometry: Partial<{ width?: number; height?: number; depth?: number; segments?: number; radius?: number; }>
    }
}

defaults.roundedBoxGeometry = {}

