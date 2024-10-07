import { Node } from '../../../three-types'
import NodeBuilder from 'three/src/nodes/core/NodeBuilder.js'
export { NodeBuilder }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeBuilder: typeof NodeBuilder
    }
}

Three.NodeBuilder = NodeBuilder

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeBuilder: NodeBuilderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeBuilder: typeof nodeBuilder
        flowData: typeof flowData
        nodeData: typeof nodeData
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeBuilder: typeof _nodeBuilder
        flowData: typeof _flowData
        nodeData: typeof _nodeData
    }
}



const flowData = ([
    'code',
] as const).distinct()
consParams.flowData = flowData


const nodeData = ([
    'vertex',
    'fragment',
    'compute',
] as const).distinct()
consParams.nodeData = nodeData


const nodeBuilder = ([

] as const).distinct()
consParams.nodeBuilder = nodeBuilder



const _flowData = ([
    'code',
] as const).distinct()
objProps.flowData = _flowData


const _nodeData = ([
    'vertex',
    'fragment',
    'compute',
] as const).distinct()
objProps.nodeData = _nodeData


const _nodeBuilder = ([
    'object',
    'material',
    'geometry',
    'renderer',
    'parser',
    'nodes',
    'updateNodes',
    'hashNodes',
    'lightsNode',
    'fogNode',
    'vertexShader',
    'fragmentShader',
    'computeShader',
    'cache',
    'globalCache',
    /**
     * @TODO used to be missing. check the actual type later
     */
    'flowsData',
    'shaderStage',
    'buildStage',
    'stack',
] as const).distinct()
objProps.nodeBuilder = _nodeBuilder

export type NodeBuilderProps = Node<NodeBuilder, typeof NodeBuilder, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeBuilder: {}
    }
}

defaults.nodeBuilder = {}

