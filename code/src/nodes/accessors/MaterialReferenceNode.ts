import { Material } from 'three/src/materials/Material.js'
import { Object3DNode } from '../../../three-types'
import MaterialReferenceNode from 'three/src/nodes/accessors/MaterialReferenceNode.js'
export { MaterialReferenceNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        materialReferenceNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        materialReferenceNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\MaterialReferenceNode.d.ts

consParams.materialReferenceNode = [
    'property',
    'inputType',
    'material',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\MaterialReferenceNode.d.ts    

objParams.materialReferenceNode = [...objParams.referenceNode,
].distinct()

export type MaterialReferenceNodeProps = Object3DNode<MaterialReferenceNode, typeof MaterialReferenceNode, { property: string; inputType: string; material?: Material | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        materialReferenceNode: { property?: string; inputType?: string; material?: Material | null; }
    }
}

defaults.materialReferenceNode = {}

