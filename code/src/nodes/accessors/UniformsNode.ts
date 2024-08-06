import { Object3DNode } from '../../../three-types'
import UniformsNode from 'three/src/nodes/accessors/UniformsNode.js'
export { UniformsNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        UniformsNode: typeof UniformsNode
    }
}

Three.UniformsNode = UniformsNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uniformsNode: UniformsNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        uniformsNode: string[]
        uniformsElementNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        uniformsNode: string[]
        uniformsElementNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UniformsNode.d.ts

consParams.uniformsElementNode = [
    'arrayBuffer',
    'indexNode',
].distinct()


consParams.uniformsNode = [
    'value',
    'elementType',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\UniformsNode.d.ts    

objParams.uniformsElementNode = [...objParams.arrayElementNode,
].distinct()


objParams.uniformsNode = [...objParams.bufferNode,
    'array',
    'elementType',
].distinct()

export type UniformsNodeProps = Object3DNode<UniformsNode, typeof UniformsNode, { value: unknown[]; elementType?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        uniformsNode: Partial<{ value: unknown[]; elementType?: string | null; }>
    }
}

defaults.uniformsNode = {}

