import { Node } from '../../three-types'
import { BufferGeometry } from 'three/src/core/BufferGeometry.js'
// export { BufferGeometry } from 'three/src/core/BufferGeometry.js'


declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bufferGeometryNode: BufferGeometryNode<BufferGeometry, unknown, unknown>,
        }
    }
}

export type BufferGeometryNode<T extends BufferGeometry, P, C> = Node<T, P, C>
