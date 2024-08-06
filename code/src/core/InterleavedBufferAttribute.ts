import { Node } from '../../three-types'
import { InterleavedBuffer } from 'three/src/core/InterleavedBuffer.js'
import { InterleavedBufferAttribute } from 'three/src/core/InterleavedBufferAttribute.js'
export { InterleavedBufferAttribute } from 'three/src/core/InterleavedBufferAttribute.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        InterleavedBufferAttribute: typeof InterleavedBufferAttribute
    }
}

Three.InterleavedBufferAttribute = InterleavedBufferAttribute

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            interleavedBufferAttribute: InterleavedBufferAttributeProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        interleavedBufferAttribute: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        interleavedBufferAttribute: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InterleavedBufferAttribute.d.ts
/**
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBufferAttribute Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js}
 */

consParams.interleavedBufferAttribute = [
    /**
     * Create a new instance of {@link THREE.InterleavedBufferAttribute}.
     * @param interleavedBuffer
     * @param itemSize
     * @param offset
     * @param normalized Default `false`.
     */
    'interleavedBuffer',
    'itemSize',
    'offset',
    'normalized',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InterleavedBufferAttribute.d.ts
/**
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InterleavedBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js | Source}
 */

objParams.interleavedBufferAttribute = [
    /**
     * Optional name for this attribute instance.
     * @defaultValue `''`
     */
    'name',
    /**
     * The {@link InterleavedBuffer | InterleavedBuffer} instance passed in the constructor.
     */
    'data',
    /**
     * How many values make up each item.
     * @remarks Expects a `Integer`
     */
    'itemSize',
    /**
     * The offset in the underlying array buffer where an item starts.
     * @remarks Expects a `Integer`
     */
    'offset',
    /**
     * @defaultValue `false`
     */
    'normalized',
].distinct()

export type InterleavedBufferAttributeProps = Node<InterleavedBufferAttribute, typeof InterleavedBufferAttribute, { interleavedBuffer: InterleavedBuffer; itemSize: number; offset: number; normalized?: boolean; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        interleavedBufferAttribute: Partial<{ interleavedBuffer: InterleavedBuffer; itemSize: number; offset: number; normalized?: boolean; }>
    }
}

defaults.interleavedBufferAttribute = {}

