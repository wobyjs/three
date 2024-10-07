import MaterialNode_, { MaterialNodeScope } from 'three/src/nodes/accessors/MaterialNode.js'
import { Node } from '../../../three-types'

// declare module 'woby' {
//     namespace JSX {
//         interface IntrinsicElements {
//             materialNode: MaterialNodeProps,
//         }
//     }
// }


export type MaterialNodeProps = Node<MaterialNode_, typeof MaterialNode_, { scope?: MaterialNodeScope; }>

// declare module '../../../lib/3/defaults' {
//     interface defaults {
//         materialNode: { scope?: MaterialNodeScope; }
//     }
// }

// defaults.materialNode = {}

