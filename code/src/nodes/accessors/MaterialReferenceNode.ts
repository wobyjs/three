import { Material } from 'three/src/materials/Material.js'
import { Node } from '../../../three-types'
import MaterialReferenceNode from 'three/src/nodes/accessors/MaterialReferenceNode.js'
export { MaterialReferenceNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MaterialReferenceNode: typeof MaterialReferenceNode
    }
}

Three.MaterialReferenceNode = MaterialReferenceNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            materialReferenceNode: MaterialReferenceNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        materialReferenceNode: typeof materialReferenceNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        materialReferenceNode: typeof _materialReferenceNode
    }
}



const materialReferenceNode = ([
    'property',
    'inputType',
    'material',
] as const).distinct()
consParams.materialReferenceNode = materialReferenceNode



const _materialReferenceNode = ([...objProps.referenceNode,
] as const).distinct()
objProps.materialReferenceNode = _materialReferenceNode

export type MaterialReferenceNodeProps = Node<MaterialReferenceNode, typeof MaterialReferenceNode, { property: string; inputType: string; material?: Material | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        materialReferenceNode: { property?: string; inputType?: string; material?: Material | null; }
    }
}

defaults.materialReferenceNode = {}

