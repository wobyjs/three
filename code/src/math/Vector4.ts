import { Vector4 } from 'three/src/math/Vector4.js';
import { Node } from '../../three-types'
export { Vector4 } from 'three/src/math/Vector4.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Vector4: typeof Vector4
    }
}

Three.Vector4 = Vector4

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vector4: Vector4Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        vector4: string[]
        vector4Like: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        vector4: string[]
        vector4Like: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector4.d.ts

consParams.vector4Like = [
].distinct()

/**
 * 4D vector.
 */

consParams.vector4 = [
    /**
     * @default 0
     */
    'x',
    /**
     * @default 0
     */
    'y',
    /**
     * @default 0
     */
    'z',
    /**
     * @default 0
     */
    'w',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\math\Vector4.d.ts

objParams.vector4Like = [
].distinct()

/**
 * 4D vector.
 */

objParams.vector4 = [
    /**
     * @default 0
     */
    'x',
    /**
     * @default 0
     */
    'y',
    /**
     * @default 0
     */
    'z',
    /**
     * @default 0
     */
    'w',
    'width',
    'height',
].distinct()

export type Vector4Props = Node<Vector4, typeof Vector4, { x?: number; y?: number; z?: number; w?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        vector4: { x?: number; y?: number; z?: number; w?: number; }
    }
}

defaults.vector4 = { x: 0, y: 0, z: 0, w: 0 }
