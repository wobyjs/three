import { Object3DNode } from '../../three-types'
import { Light } from 'three/src/lights/Light.js'
export { Light } from 'three/src/lights/Light.js'

// declare module 'woby' {
//     namespace JSX {
//         interface IntrinsicElements {
//             lightNode: LightNode<any, any, any>,
//         }
//     }
// }

export type LightNode<T extends Light, P, C> = Object3DNode<T, P, C>
