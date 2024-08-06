import { Node } from '../../three-types'
import { TypedArray } from 'three/src/core/BufferAttribute.js'
import { InstancedInterleavedBuffer } from 'three/src/core/InstancedInterleavedBuffer.js'
export { InstancedInterleavedBuffer } from 'three/src/core/InstancedInterleavedBuffer.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './InterleavedBuffer'

declare module '../../lib/3/three'
{
    interface Three {
        InstancedInterleavedBuffer: typeof InstancedInterleavedBuffer
    }
}

Three.InstancedInterleavedBuffer = InstancedInterleavedBuffer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            instancedInterleavedBuffer: InstancedInterleavedBufferProps,
        }
    }
}


declare module '../../lib/3/consParams' {
    interface consParams {
        instancedInterleavedBuffer: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        instancedInterleavedBuffer: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedInterleavedBuffer.d.ts
/**
 * An instanced version of {@link THREE.InterleavedBuffer}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js}
 */

consParams.instancedInterleavedBuffer = [
    /**
     * Create a new instance of {@link InstancedInterleavedBuffer}
     * @param array
     * @param itemSize
     * @param meshPerAttribute
     */
    'array',
    'stride',
    'meshPerAttribute',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\core\InstancedInterleavedBuffer.d.ts
/**
 * An instanced version of {@link THREE.InterleavedBuffer | InterleavedBuffer}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js | Source}
 */

objParams.instancedInterleavedBuffer = [...objParams.interleavedBuffer,
    /**
     * @defaultValue `1`
     */
    'meshPerAttribute',
].distinct()

export type InstancedInterleavedBufferProps = Node<InstancedInterleavedBuffer, typeof InstancedInterleavedBuffer, { array: TypedArray; stride: number; meshPerAttribute?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        instancedInterleavedBuffer: Partial<{ array: TypedArray; stride: number; meshPerAttribute?: number; }>
    }
}

defaults.instancedInterleavedBuffer = { meshPerAttribute: 1 }

