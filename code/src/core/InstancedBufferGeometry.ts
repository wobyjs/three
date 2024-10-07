import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { InstancedBufferGeometry } from 'three/src/core/InstancedBufferGeometry.js'
export { InstancedBufferGeometry } from 'three/src/core/InstancedBufferGeometry.js'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './BufferGeometry'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            instancedBufferGeometry: InstancedBufferGeometryProps
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        instancedBufferGeometry: typeof instancedBufferGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        instancedBufferGeometry: typeof _instancedBufferGeometry
    }
}


/**
 * An instanced version of {@link THREE.BufferGeometry}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js}
 */

const instancedBufferGeometry = ([
] as const).distinct()
consParams.instancedBufferGeometry = instancedBufferGeometry


/**
 * An instanced version of {@link THREE.BufferGeometry | BufferGeometry}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js | Source}
 */

const _instancedBufferGeometry = ([...objProps.bufferGeometry,
    /**
    * @defaultValue `InstancedBufferGeometry`
    */
    'type',
    /**
     * Read-only flag to check if a given object is of type {@link InstancedBufferGeometry}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    /**
     * @defaultValue `Infinity`
     */
    'instanceCount',
] as const).distinct()
objProps.instancedBufferGeometry = _instancedBufferGeometry

export type InstancedBufferGeometryProps = BufferGeometryNode<InstancedBufferGeometry, typeof InstancedBufferGeometry, {}>

declare module '../../lib/3/defaults' {
    interface defaults {
        instancedBufferGeometry: Partial<{}>
    }
}

defaults.instancedBufferGeometry = {}

