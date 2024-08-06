import { Object3DNode } from '../../../three-types'
import ReferenceNode from 'three/src/nodes/accessors/ReferenceNode.js'
export { ReferenceNode }
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            referenceNode: ReferenceNodeProps<unknown>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        referenceNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        referenceNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ReferenceNode.d.ts

consParams.referenceNode = [
    'property',
    'uniformType',
    'object',
    'count',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ReferenceNode.d.ts    

objParams.referenceNode = [...objParams.node,
    'property',
    'uniformType',
    'object',
    'count',
    'properties',
    'reference',
    'node',
].distinct()

export type ReferenceNodeProps<T> = Object3DNode<ReferenceNode<T>, typeof ReferenceNode, { property: string; uniformType: string; object?: T | null; count?: number | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        referenceNode: Partial<{ property: string; uniformType: string; object?: any | null; count?: number | null; }>
    }
}

defaults.referenceNode = {}

