import { Node } from '../../three-types'
import { Int16BufferAttribute } from 'three/src/core/BufferAttribute.js'
export { Int16BufferAttribute } from 'three/src/core/BufferAttribute.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './BufferAttribute'

declare module '../../lib/3/three'
{
    interface Three {
        Int16BufferAttribute: typeof Int16BufferAttribute
    }
}

Three.Int16BufferAttribute = Int16BufferAttribute

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            int16BufferAttribute: Int16BufferAttributeProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        int16BufferAttribute: typeof int16BufferAttribute
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        int16BufferAttribute: typeof _int16BufferAttribute
    }
}

/**
 * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
 * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
 */

const int16BufferAttribute = ([
    /**
     * This creates a new {@link THREE.Int16BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Int16Array`.
     * If a length is given a new `TypedArray` will created, initialized with all elements set to zero.
     * @param itemSize the number of values of the {@link array} that should be associated with a particular vertex.
     * For instance, if this.attribute is storing a 3-component vector (such as a _position_, _normal_, or _color_),
     * then itemSize should be `3`.
     * @param normalized Applies to integer data only.
     * Indicates how the underlying data in the buffer maps to the values in the GlSL code.
     * For instance, if {@link array} is an instance of `UInt16Array`, and  {@link normalized} is true,
     * the values `0` - `+65535` in the array data will be mapped to `0.0f` - `+1.0f` in the GlSL attribute.
     * An `Int16Array` (signed) would map from `-32768` - `+32767` to `-1.0f` - `+1.0f`.
     * If normalized is false, the values will be converted to floats unmodified,
     * i.e. `32767` becomes `32767.0f`.
     * Default `false`.
     * @see {@link THREE.BufferAttribute}
     */

    'array',
    'itemSize',
    'normalized',
] as const).distinct()
consParams.int16BufferAttribute = int16BufferAttribute

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array: Int16Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */

const _int16BufferAttribute = ([...objProps.bufferAttribute,
] as const).distinct()
objProps.int16BufferAttribute = _int16BufferAttribute

export type Int16BufferAttributeProps = Node<Int16BufferAttribute, typeof Int16BufferAttribute, { array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number; itemSize: number; normalized?: boolean; }>

declare module '../../lib/3/defaults' {
    interface defaults {

        int16BufferAttribute: Partial<{ array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number; itemSize: number; normalized?: boolean; }>
    }
}

defaults.int16BufferAttribute = {}
