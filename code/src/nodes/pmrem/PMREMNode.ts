import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import PMREMNode from 'three/src/nodes/pmrem/PMREMNode.js'
import { Texture } from 'three/src/textures/Texture.js'
export * from 'three/src/textures/Texture.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PMREMNode: typeof PMREMNode
    }
}

Three.PMREMNode = PMREMNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pmremNode: PMREMNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pmremNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        pmremNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\pmrem\PMREMNode.d.ts

consParams.pmremNode = [
    'value',
    'uvNode',
    'levelNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\pmrem\PMREMNode.d.ts    

objParams.pmremNode = [...objParams.tempNode,
    'uvNode',
    'levelNode',
    'value',
].distinct()

export type PMREMNodeProps = Node<PMREMNode, typeof PMREMNode, { value: Texture; uvNode?: ENode | null; levelNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pMREMNode: Partial<{ value: Texture; uvNode?: ENode | null; levelNode?: ENode | null; }>
    }
}

defaults.pMREMNode = {}

