import { Node } from '../../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js'
export * from 'three/examples/jsm/helpers/VertexNormalsHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        vertexNormalsHelper: typeof vertexNormalsHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        vertexNormalsHelper: typeof _vertexNormalsHelper
    }
}



const vertexNormalsHelper = ([
    'object',
    'size',
    'color',
] as const).distinct()
consParams.vertexNormalsHelper = vertexNormalsHelper



const _vertexNormalsHelper = ([...objProps.lineSegments,
    'object',
    'size',
] as const).distinct()
objProps.vertexNormalsHelper = _vertexNormalsHelper

export type VertexNormalsHelperProps = Node<VertexNormalsHelper, typeof VertexNormalsHelper, { object: Object3D; size?: number; color?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vertexNormalsHelper: Partial<{ object: Object3D; size?: number; color?: number; }>
    }
}

defaults.vertexNormalsHelper = { size: 1, color: 16711680 }
