import { Node } from '../../../three-types'
import PropertyNode from 'three/src/nodes/core/PropertyNode.js'
export { PropertyNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PropertyNode: typeof PropertyNode
    }
}

Three.PropertyNode = PropertyNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            propertyNode: PropertyNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        propertyNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        propertyNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\PropertyNode.d.ts

consParams.propertyNode = [
    'nodeType',
    'name',
    'varying',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\PropertyNode.d.ts    

objParams.propertyNode = [...objParams.node,
    'name',
    'varying',
].distinct()

export type PropertyNodeProps = Node<PropertyNode, typeof PropertyNode, { nodeType?: string | null; name?: string | null; varying?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        propertyNode: Partial<{ nodeType?: string | null; name?: string | null; varying?: boolean; }>
    }
}

defaults.propertyNode = {}

