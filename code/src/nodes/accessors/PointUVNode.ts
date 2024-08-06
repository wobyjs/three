import { Object3DNode } from '../../../three-types'
import PointUVNode from 'three/src/nodes/accessors/PointUVNode.js'
export { PointUVNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PointUVNode: typeof PointUVNode
    }
}

Three.PointUVNode = PointUVNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointUvNode: PointUVNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pointUvNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        pointUvNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\PointUVNode.d.ts

consParams.pointUvNode = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\PointUvNode.d.ts    

objParams.pointUvNode = [...objParams.node,
    'isPointUvNode',
].distinct()

export type PointUVNodeProps = Object3DNode<PointUVNode, typeof PointUVNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pointUvNode: {}
    }
}

defaults.pointUvNode = {}

