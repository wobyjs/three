import { Node } from '../../three-types'
import { Uint32BufferAttribute } from 'three/src/core/BufferAttribute.js'
export { Uint32BufferAttribute } from 'three/src/core/BufferAttribute.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './BufferAttribute'

declare module '../../lib/3/three'
{
    interface Three {
        Uint32BufferAttribute: typeof Uint32BufferAttribute
    }
}

Three.Uint32BufferAttribute = Uint32BufferAttribute

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            uint32BufferAttribute: Uint32BufferAttributeProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        uint32BufferAttribute: typeof uint32BufferAttribute
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        uint32BufferAttribute: typeof _uint32BufferAttribute
    }
}

/**
 * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
 * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
 */

const uint32BufferAttribute = ([
    /**
     * This creates a new {@link THREE.Uint32BufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint32Array`.
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
consParams.uint32BufferAttribute = uint32BufferAttribute

/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array: Uint32Array}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */

const _uint32BufferAttribute = ([...objProps.bufferAttribute,
] as const).distinct()
objProps.uint32BufferAttribute = _uint32BufferAttribute

export type Uint32BufferAttributeProps = Node<Uint32BufferAttribute, typeof Uint32BufferAttribute, { array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number; itemSize: number; normalized?: boolean; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        uint32BufferAttribute: Partial<{ array: Iterable<number> | ArrayLike<number> | ArrayBuffer | number; itemSize: number; normalized?: boolean; }>
    }
}

defaults.uint32BufferAttribute = {}

