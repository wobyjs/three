import { Node } from '../../three-types'
import { Material } from 'three/src/materials/Material.js'


declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            materialNode: MaterialNode<Material, unknown>
        }
    }
}

export type MaterialNode<T extends Material, P> = Node<T, P, P>
