import { Node } from '../../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js'
export * from 'three/examples/jsm/helpers/VertexNormalsHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VertexNormalsHelper: typeof VertexNormalsHelper
    }
}

Three.VertexNormalsHelper = VertexNormalsHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vertexNormalsHelper: VertexNormalsHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        vertexNormalsHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        vertexNormalsHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexNormalsHelper.d.ts

consParams.vertexNormalsHelper = [
    'object',
    'size',
    'color',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexNormalsHelper.d.ts    

objParams.vertexNormalsHelper = [...objParams.lineSegments,
    'object',
    'size',
].distinct()

export type VertexNormalsHelperProps = Node<VertexNormalsHelper, typeof VertexNormalsHelper, { object: Object3D; size?: number; color?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vertexNormalsHelper: Partial<{ object: Object3D; size?: number; color?: number; }>
    }
}

defaults.vertexNormalsHelper = { size: 1, color: 16711680 }
