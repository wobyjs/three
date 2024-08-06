import { DataArrayTexture } from 'three/src/textures/DataArrayTexture.js';
export { DataArrayTexture } from 'three/src/textures/DataArrayTexture.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.DataArrayTexture = DataArrayTexture;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DataArrayTexture.d.ts
/**
 * Creates an array of textures directly from raw data, width and height and depth
 * @example
 * ```typescript
 * This creates a[name].distinct()
 where each texture has a different color.
 * // create a buffer with color data
 * const width = 512
 * const height = 512
 * const depth = 100
 * const size = width * height
 * const data = new Uint8Array(4 * size * depth)
 * for (let i = 0; i & lt; depth; i++) {
 *     const color = new THREE.Color(Math.random(), Math.random(), Math.random())
 *     const r = Math.floor(color.r * 255)
 *     const g = Math.floor(color.g * 255)
 *     const b = Math.floor(color.b * 255)
 *     for (let j = 0; j & lt; size; j++) {
 *         const stride = (i * size + j) * 4
 *         data[stride].distinct()
 = r
 *         data[stride + 1].distinct()
 = g
 *         data[stride + 2].distinct()
 = b
 *         data[stride + 3].distinct()
 = 255
 *     }
 * }
 * // used the buffer to create a [name].distinct()

 * const texture = new THREE.DataArrayTexture(data, width, height, depth)
 * texture.needsUpdate = true
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture2darray | WebGl2 / materials / texture2darray}
 * @see Example: {@link https://threejs.org/examples/#webgl2_rendertarget_texture2darray | WebGl2 / rendertarget / texture2darray}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataArrayTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataArrayTexture.js | Source}
 */
objParams.dataArrayTexture = [...objParams.texture,
    /**
     * Overridden with a record type holding data, width and height and depth.
     * @override
     */
    'image',
    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    'magFilter',
    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    'minFilter',
    /**
     * @override
     * @defaultValue  {@link THREE.ClampToEdgeWrapping}
     */
    'wrapR',
    /**
     * @override
     * @defaultValue `false`
     */
    'flipY',
    /**
     * @override
     * @defaultValue `false`
     */
    'generateMipmaps',
    /**
     * @override
     * @defaultValue `1`
     */
    'unpackAlignment',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DataArrayTexture.d.ts
/**
 * Creates an array of textures directly from raw data, width and height and depth
 * @example
 * ```typescript
 * This creates a[name] where each texture has a different color.
 * // create a buffer with color data
 * const width = 512,
 * const height = 512,
 * const depth = 100,
 * const size = width * height,
 * const data = new Uint8Array(4 * size * depth,
 * for (let i = 0, i & lt, depth, i++) {
 * const color = new THREE.Color(Math.random(), Math.random(), Math.random(),
 * const r = Math.floor(color.r * 255,
 * const g = Math.floor(color.g * 255,
 * const b = Math.floor(color.b * 255,
 * for (let j = 0, j & lt, size, j++) {
 *     const stride = (i * size + j) * 4,
 *     data[stride] = r,
 *     data[stride + 1] = g,
 *     data[stride + 2] = b,
 *     data[stride + 3] = 255,
 *     }
 * }
 * // used the buffer to create a [name]
 * const texture = new THREE.DataArrayTexture(data, width, height, depth,
 * texture.needsUpdate = true,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture2darray / materials / texture2darray}
 * @see Example: {@link https://threejs.org/examples/#webgl2_rendertarget_texture2darray / rendertarget / texture2darray}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataArrayTexture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataArrayTexture.js}
 */
consParams.dataArrayTexture = [
    /**
     * This creates a new {@link THREE.DataArrayTexture} object.
     * @remarks The interpretation of the data depends on {@link format} and {@link type}.
     * @remarks If the {@link type} is {@link THREE.UnsignedByteType a {@link Uint8Array} will be useful for addressing the texel data
     * @remarks If the {@link format} is {@link THREE.RGBAFormat data needs four values for one texel, Red, Green, Blue and Alpha (typically the opacity).
     * @remarks For the packed {@link type
{@link THREE.UnsignedShort4444Type} and {@link THREE.UnsignedShort5551Type}
     * all color components of one texel can be addressed as bitfields within an integer element of a {@link Uint16Array}.
     * @remarks In order to use the {@link type} {@link THREE.FloatType} and {@link THREE.HalfFloatType
     * the WebGl implementation must support the respective extensions _OES_texture_float_ and _OES_texture_half_float_
     * @remarks In order to use {@link THREE.LinearFilter} for component-wise, bilinear interpolation of the texels based on these types,
     * the WebGl extensions _OES_texture_float_linear_ or _OES_texture_half_float_linear_ must also be present.
     * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView} of the texture. Default `null`.
     * @param width Width of the texture. Default `1`.
     * @param height Height of the texture. Default `1`.
     * @param depth Depth of the texture. Default `1`.
     */
    'data',
    'width',
    'height',
    'depth',
].distinct();
defaults.dataArrayTexture = {};
