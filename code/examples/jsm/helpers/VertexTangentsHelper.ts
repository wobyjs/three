import { Node } from '../../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { VertexTangentsHelper } from 'three/examples/jsm/helpers/VertexTangentsHelper.js'
export * from 'three/examples/jsm/helpers/VertexTangentsHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        vertexTangentsHelper: typeof vertexTangentsHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        vertexTangentsHelper: typeof _vertexTangentsHelper
    }
}



const vertexTangentsHelper = ([
    'object',
    'size',
    'color',
] as const).distinct()
consParams.vertexTangentsHelper = vertexTangentsHelper



const _vertexTangentsHelper = ([...objProps.lineSegments,
    'object',
    'size',
] as const).distinct()
objProps.vertexTangentsHelper = _vertexTangentsHelper

export type VertexTangentsHelperProps = Node<VertexTangentsHelper, typeof VertexTangentsHelper, { object: Object3D; size?: number; color?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vertexTangentsHelper: Partial<{ object: Object3D; size?: number; color?: number; }>
    }
}

defaults.vertexTangentsHelper = { size: 1, color: 65535 }
