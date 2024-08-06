import { Node } from '../../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { VertexTangentsHelper } from 'three/examples/jsm/helpers/VertexTangentsHelper.js'
export * from 'three/examples/jsm/helpers/VertexTangentsHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VertexTangentsHelper: typeof VertexTangentsHelper
    }
}

Three.VertexTangentsHelper = VertexTangentsHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vertexTangentsHelper: VertexTangentsHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        vertexTangentsHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        vertexTangentsHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexTangentsHelper.d.ts

consParams.vertexTangentsHelper = [
    'object',
    'size',
    'color',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\VertexTangentsHelper.d.ts    

objParams.vertexTangentsHelper = [...objParams.lineSegments,
    'object',
    'size',
].distinct()

export type VertexTangentsHelperProps = Node<VertexTangentsHelper, typeof VertexTangentsHelper, { object: Object3D; size?: number; color?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vertexTangentsHelper: Partial<{ object: Object3D; size?: number; color?: number; }>
    }
}

defaults.vertexTangentsHelper = { size: 1, color: 65535 }
