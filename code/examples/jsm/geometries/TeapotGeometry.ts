import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js'
export * from 'three/examples/jsm/geometries/TeapotGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        teapotGeometry: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        teapotGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\TeapotGeometry.d.ts

consParams.teapotGeometry = [

    'size',
    'segments',
    'bottom',
    'lid',
    'body',
    'fitLid',
    'blinn',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\TeapotGeometry.d.ts    

objParams.teapotGeometry = [...objParams.bufferGeometry,
].distinct()

export type TeapotGeometryProps = BufferGeometryNode<TeapotGeometry, typeof TeapotGeometry, { size?: number; segments?: number; bottom?: boolean; lid?: boolean; body?: boolean; fitLid?: boolean; blinn?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        teapotGeometry: Partial<{ size?: number; segments?: number; bottom?: boolean; lid?: boolean; body?: boolean; fitLid?: boolean; blinn?: boolean; }>
    }
}

defaults.teapotGeometry = {}

