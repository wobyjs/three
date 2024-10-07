import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import PMREMNode from 'three/src/nodes/pmrem/PMREMNode.js'
import { Texture } from 'three/src/textures/Texture.js'
export * from 'three/src/textures/Texture.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        pmremNode: typeof pmremNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        pmremNode: typeof _pmremNode
    }
}



const pmremNode = ([
    'value',
    'uvNode',
    'levelNode',
] as const).distinct()
consParams.pmremNode = pmremNode



const _pmremNode = ([...objProps.tempNode,
    'uvNode',
    'levelNode',
    'value',
] as const).distinct()
objProps.pmremNode = _pmremNode

export type PMREMNodeProps = Node<PMREMNode, typeof PMREMNode, { value: Texture; uvNode?: ENode | null; levelNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pMREMNode: Partial<{ value: Texture; uvNode?: ENode | null; levelNode?: ENode | null; }>
    }
}

defaults.pMREMNode = {}

