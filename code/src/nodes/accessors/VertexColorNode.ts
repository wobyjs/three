import { Object3DNode } from '../../../three-types'
import VertexColorNode from 'three/src/nodes/accessors/VertexColorNode.js'
export { VertexColorNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VertexColorNode: typeof VertexColorNode
    }
}

Three.VertexColorNode = VertexColorNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vertexColorNode: VertexColorNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        vertexColorNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        vertexColorNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\VertexColorNode.d.ts

consParams.vertexColorNode = [
    'index',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\VertexColorNode.d.ts    

objParams.vertexColorNode = [...objParams.attributeNode,
    'index',
].distinct()

export type VertexColorNodeProps = Object3DNode<VertexColorNode, typeof VertexColorNode, { index?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vertexColorNode: { index?: number; }
    }
}

defaults.vertexColorNode = {}

