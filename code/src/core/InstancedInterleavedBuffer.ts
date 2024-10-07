import { Node } from '../../three-types'
import { TypedArray } from 'three/src/core/BufferAttribute.js'
import { InstancedInterleavedBuffer } from 'three/src/core/InstancedInterleavedBuffer.js'
export { InstancedInterleavedBuffer } from 'three/src/core/InstancedInterleavedBuffer.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        instancedInterleavedBuffer: typeof instancedInterleavedBuffer
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        instancedInterleavedBuffer: typeof _instancedInterleavedBuffer
    }
}


/**
 * An instanced version of {@link THREE.InterleavedBuffer}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js}
 */

const instancedInterleavedBuffer = ([
    /**
     * Create a new instance of {@link InstancedInterleavedBuffer}
     * @param array
     * @param itemSize
     * @param meshPerAttribute
     */
    'array',
    'stride',
    'meshPerAttribute',
] as const).distinct()
consParams.instancedInterleavedBuffer = instancedInterleavedBuffer


/**
 * An instanced version of {@link THREE.InterleavedBuffer | InterleavedBuffer}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedInterleavedBuffer | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js | Source}
 */

const _instancedInterleavedBuffer = ([...objProps.interleavedBuffer,
    /**
     * @defaultValue `1`
     */
    'meshPerAttribute',
] as const).distinct()
objProps.instancedInterleavedBuffer = _instancedInterleavedBuffer

export type InstancedInterleavedBufferProps = Node<InstancedInterleavedBuffer, typeof InstancedInterleavedBuffer, { array: TypedArray; stride: number; meshPerAttribute?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        instancedInterleavedBuffer: Partial<{ array: TypedArray; stride: number; meshPerAttribute?: number; }>
    }
}

defaults.instancedInterleavedBuffer = { meshPerAttribute: 1 }

