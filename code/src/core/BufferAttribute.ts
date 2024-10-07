import { Node } from '../../three-types'
import { BufferAttribute, TypedArray } from 'three/src/core/BufferAttribute.js'
export * from 'three/src/core/BufferAttribute.js'

import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        BufferAttribute: typeof BufferAttribute
    }
}

Three.BufferAttribute = BufferAttribute

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bufferAttribute: BufferAttributeProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        bufferAttribute: typeof bufferAttribute
        uint8ClampedBufferAttribute: typeof uint8ClampedBufferAttribute
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        bufferAttribute: typeof _bufferAttribute
        uint8ClampedBufferAttribute: typeof _uint8ClampedBufferAttribute
    }
}


/**
 * This class stores data for an attribute (such as vertex positions, face indices, normals, colors, UVs, and any custom attributes )
 * associated with a {@link THREE.BufferGeometry which allows for more efficient passing of data to the Gpu
 * @remarks
 * When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on
 * {@link THREE.Vector2.fromBufferAttribute
 * {@link THREE.Vector3.fromBufferAttribute
 * {@link THREE.Vector4.fromBufferAttribute and
 * {@link THREE.Color.fromBufferAttribute} classes may be helpful.
 * @see {@link THREE.BufferGeometry} for details and a usage examples.
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry / BufferGeometry - Clean up Memory}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
 */

const bufferAttribute = ([
    /**
     * This creates a new {@link THREE.GlBufferAttribute} object.
     * @param array Must be a `TypedArray`. Used to instantiate the buffer.
     * This array should have `itemSize * numVertices` elements, where numVertices is the number of vertices in the associated {@link THREE.BufferGeometry}.
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
     * @throws `TypeError` When the {@link array} is not a `TypedArray`,
     */
    'array',
    'itemSize',
    'normalized',
] as const).distinct()
consParams.bufferAttribute = bufferAttribute


/**
 * This class stores data for an attribute (such as vertex positions, face indices, normals, colors, Uvs, and any custom attributes )
 * associated with a {@link THREE.BufferGeometry | BufferGeometry which allows for more efficient passing of data to the Gpu
 * @remarks
 * When working with _vector-like_ data, the _`.fromBufferAttribute( attribute, index )`_ helper methods on
 * {@link THREE.Vector2.fromBufferAttribute | Vector2
 * {@link THREE.Vector3.fromBufferAttribute | Vector3
 * {@link THREE.Vector4.fromBufferAttribute | Vector4 and
 * {@link THREE.Color.fromBufferAttribute | Color} classes may be helpful.
 * @see {@link THREE.BufferGeometry | BufferGeometry} for details and a usage examples.
 * @see Example: {@link https://threejs.org/examples/#webgl_buffergeometry | WebGl / BufferGeometry - Clean up Memory}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/BufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */

const _bufferAttribute = ([
    /**
     * Optional name for this attribute instance.
     * @defaultValue ''
     */
    'name',
    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray | TypedArray} holding data stored in the buffer.
     * @returns `TypedArray`
     */
    'array',
    /**
     * The length of vectors that are being stored in the {@link BufferAttribute.array | array}.
     * @remarks Expects a `Integer`
     */
    'itemSize',
    /**
     * Defines the intended usage pattern of the data store for optimization purposes.
     * Corresponds to the {@link BufferAttribute.usage | usage} parameter of
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGlRenderingContext/bufferData | WebGlRenderingContext.bufferData}.
     * @remarks
     * After the initial use of a buffer, its usage cannot be changed. Instead, instantiate a new one and set the desired usage before the next render.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/BufferAttributeUsage | Buffer Attribute Usage Constants} for all possible values.
     * @see {@link BufferAttribute.setUsage | setUsage}
     * @defaultValue {@link THREE.StaticDrawUsage | THREE.StaticDrawUsage}.
     */
    'usage',
    /**
     * Configures the bound Gpu type for use in shaders. Either {@link FloatType} or {@link IntType default is {@link FloatType}.
     *
     * Note: this only has an effect for integer arrays and is not configurable for float arrays. For lower precision
     * float types, see https://threejs.org/docs/#api/en/core/bufferAttributeTypes/BufferAttributeTypes.
     */
    'gpuType',
    /**
     * This can be used to only update some components of stored vectors (for example, just the component related to color).
     * @defaultValue `{ offset: number = 0; count: number = -1 }`
     * @deprecated Will be removed in r169. Use "addUpdateRange()" instead.
     */
    'updateRange',
    /**
     * This can be used to only update some components of stored vectors (for example, just the component related to
     * color). Use the {@link .addUpdateRange} function to add ranges to this array.
     */
    'updateRanges',
    /**
     * A version number, incremented every time the {@link BufferAttribute.needsUpdate | needsUpdate} property is set to true.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    'version',
    /**
     * Indicates how the underlying data in the buffer maps to the values in the GlSL shader code.
     * @see `constructor` above for details.
     * @defaultValue `false`
     */
    'normalized',
] as const).distinct()
objProps.bufferAttribute = _bufferAttribute

/**
 * A {@link THREE.BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects}
 * @see {@link THREE.BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js}
 */

const uint8ClampedBufferAttribute = ([
    /**
     * This creates a new {@link THREE.Uint8ClampedBufferAttribute} object.
     * @param array This can be a typed or untyped (normal) array or an integer length. An array value will be converted to `Uint8ClampedArray`.
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
consParams.uint8ClampedBufferAttribute = uint8ClampedBufferAttribute


/**
 * A {@link THREE.BufferAttribute | BufferAttribute} for {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray: Uint8ClampedArray}
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects | TypedArray}
 * @see {@link THREE.BufferAttribute | BufferAttribute} for details and for inherited methods and properties.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/bufferAttributeTypes/BufferAttributeTypes | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js | Source}
 */

const _uint8ClampedBufferAttribute = ([...objProps.bufferAttribute,
] as const).distinct()
objProps.uint8ClampedBufferAttribute = _uint8ClampedBufferAttribute

export type BufferAttributeProps = Node<BufferAttribute, typeof BufferAttribute, { array: TypedArray; itemSize: number; normalized?: boolean; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        bufferAttribute: Partial<{ array: TypedArray; itemSize: number; normalized?: boolean; }>
    }
}

defaults.bufferAttribute = {}

