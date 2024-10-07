import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import RenderOutputNode from 'three/src/nodes/display/RenderOutputNode.js'
export { RenderOutputNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'
import { ColorSpace, ToneMapping } from '../../constants'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        RenderOutputNode: typeof RenderOutputNode
    }
}

Three.RenderOutputNode = RenderOutputNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            renderOutputNode: RenderOutputNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        renderOutputNode: typeof renderOutputNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        renderOutputNode: typeof _renderOutputNode
    }
}


const renderOutputNode = ([
    'depthNode',
    'normalNode',
    'camera',
] as const).distinct()
consParams.renderOutputNode = renderOutputNode

const _renderOutputNode = ([...objProps.tempNode,
    'colorNode',
    'toneMapping',
    'outputColorSpace',
    'isRenderOutput',
] as const).distinct()
objProps.renderOutputNode = _renderOutputNode

export type RenderOutputNodeProps = Node<RenderOutputNode, typeof RenderOutputNode, { colorNode: ENode, toneMapping?: ToneMapping | null, outputColorSpace?: ColorSpace | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        renderOutputNode: Partial<{ colorNode: ENode, toneMapping?: ToneMapping | null, outputColorSpace?: ColorSpace | null }>
    }
}

defaults.renderOutputNode = {}

