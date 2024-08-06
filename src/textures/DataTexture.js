import { NearestFilter, RGBAFormat, UnsignedByteType, UVMapping } from 'three/src/constants.js';
import { DataTexture } from 'three/src/textures/DataTexture.js';
export { DataTexture } from 'three/src/textures/DataTexture.js';
import { Three } from '../../lib/3/three';
import { consParams } from '../../lib/3/consParams';
import { objParams } from '../../lib/3/objParams';
import { defaults } from '../../lib/3/defaults';
Three.DataTexture = DataTexture;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DataTexture.d.ts
/**
 * Creates a texture directly from raw data, width and height.
 * @example
 * ```typescript
 * // create a buffer with color data
 * const width = 512
 * const height = 512
 * const size = width * height
 * const data = new Uint8Array(4 * size)
 * const color = new THREE.Color(0xffffff)
 * const r = Math.floor(color.r * 255)
 * const g = Math.floor(color.g * 255)
 * const b = Math.floor(color.b * 255)
 * for (let i = 0; i & lt; size; i++) {
 *     const stride = i * 4
 *     data[stride].distinct()
 = r
 *     data[stride + 1].distinct()
 = g
 *     data[stride + 2].distinct()
 = b
 *     data[stride + 3].distinct()
 = 255
 * }
 * // used the buffer to create a [name].distinct()

 * const texture = new THREE.DataTexture(data, width, height)
 * texture.needsUpdate = true
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataTexture.js | Source}
 */
objParams.dataTexture = [...objParams.texture,
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
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DataTexture.d.ts
/**
 * Creates a texture directly from raw data, width and height.
 * @example
 * ```typescript
 * // create a buffer with color data
 * const width = 512,
 * const height = 512,
 * const size = width * height,
 * const data = new Uint8Array(4 * size,
 * const color = new THREE.Color(0xffffff,
 * const r = Math.floor(color.r * 255,
 * const g = Math.floor(color.g * 255,
 * const b = Math.floor(color.b * 255,
 * for (let i = 0, i & lt, size, i++) {
 * const stride = i * 4,
 * data[stride] = r,
 * data[stride + 1] = g,
 * data[stride + 2] = b,
 * data[stride + 3] = 255,
 * }
 * // used the buffer to create a [name]
 * const texture = new THREE.DataTexture(data, width, height,
 * texture.needsUpdate = true,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DataTexture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DataTexture.js}
 */
consParams.dataTexture = [
    /**
     * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView} of the texture. Default `null`.
     * @param width Width of the texture. Default `1`.
     * @param height Height of the texture. Default `1`.
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.NearestFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.NearestFilter}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link NoColorSpace}
     */
    'data',
    'width',
    'height',
    'format',
    'type',
    'mapping',
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'anisotropy',
    'colorSpace',
].distinct();
defaults.dataTexture = {
    magFilter: NearestFilter,
    mapping: UVMapping,
    anisotropy: 1,
    format: RGBAFormat,
    type: UnsignedByteType,
};
