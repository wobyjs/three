import { Node } from '../../../three-types'
import NodeBuilder from 'three/src/nodes/core/NodeBuilder.js'
export { NodeBuilder }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        nodeBuilder: string[]
        flowData: string[]
        nodeData: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeBuilder: string[]
        flowData: string[]
        nodeData: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeBuilder.d.ts

consParams.flowData = [
    'code',
].distinct()


consParams.nodeData = [
    'vertex',
    'fragment',
    'compute',
].distinct()


consParams.nodeBuilder = [

].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeBuilder.d.ts

objParams.flowData = [
    'code',
].distinct()


objParams.nodeData = [
    'vertex',
    'fragment',
    'compute',
].distinct()


objParams.nodeBuilder = [
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
].distinct()

export type NodeBuilderProps = Node<NodeBuilder, typeof NodeBuilder, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeBuilder: {}
    }
}

defaults.nodeBuilder = {}

