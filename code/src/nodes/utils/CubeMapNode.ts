import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import CubeMapNode from 'three/src/nodes/utils/CubeMapNode.js'
export { CubeMapNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        CubeMapNode: typeof CubeMapNode
    }
}

Three.CubeMapNode = CubeMapNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeMapNode: CubeMapNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        cubeMapNode: typeof cubeMapNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        cubeMapNode: typeof _cubeMapNode
    }
}


const cubeMapNode = ([
    'envNode',
] as const).distinct()
consParams.cubeMapNode = cubeMapNode



const _cubeMapNode = ([...objProps.tempNode,
    'envNode',
] as const).distinct()
objProps.cubeMapNode = _cubeMapNode

export type CubeMapNodeProps = Node<CubeMapNode, typeof CubeMapNode, { envNode: ENode }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cubeMapNode: Partial<{ envNode: ENode }>
    }
}

defaults.cubeMapNode = {}

