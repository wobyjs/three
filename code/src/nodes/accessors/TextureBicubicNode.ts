import { Object3DNode } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import TextureBicubicNode from 'three/src/nodes/accessors/TextureBicubicNode.js'
export { TextureBicubicNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TextureBicubicNode: typeof TextureBicubicNode
    }
}

Three.TextureBicubicNode = TextureBicubicNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textureBicubicNode: TextureBicubicNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        textureBicubicNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        textureBicubicNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureBicubicNode.d.ts

consParams.textureBicubicNode = [
    'textureNode',
    'blurNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureBicubicNode.d.ts    

objParams.textureBicubicNode = [...objParams.tempNode,
    'textureNode',
    'blurNode',
].distinct()

export type TextureBicubicNodeProps = Object3DNode<TextureBicubicNode, typeof TextureBicubicNode, { textureNode: ENode; blurNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        textureBicubicNode: Partial<{ textureNode: ENode; blurNode?: ENode; }>
    }
}

defaults.textureBicubicNode = {}

