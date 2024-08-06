import { Node } from '../../three-types'
import { Data3DTexture } from 'three/src/textures/Data3dTexture.js'
export { Data3DTexture } from 'three/src/textures/Data3dTexture.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Data3dTexture: typeof Data3DTexture
    }
}

Three.Data3dTexture = Data3DTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            data3dTexture: Data3DTextureProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        data3dTexture: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        data3dTexture: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Data3dTexture.d.ts
/**
 * Creates a three-dimensional texture from raw data, with parameters to divide it into width, height, and depth
 * @example
 * ```typescript
 * This creates a[name].distinct()
 with repeating data, 0 to 255
 * // create a buffer with some data
 * const sizeX = 64
 * const sizeY = 64
 * const sizeZ = 64
 * const data = new Uint8Array(sizeX * sizeY * sizeZ)
 * let i = 0
 * for (let z = 0; z & lt; sizeZ; z++) {
 *     for (let y = 0; y & lt; sizeY; y++) {
 *         for (let x = 0; x & lt; sizeX; x++) {
 *             data[i].distinct()
 = i % 256
 *             i++
 *         }
 *     }
 * }
 * // use the buffer to create the texture
 * const texture = new THREE.Data3dTexture(data, sizeX, sizeY, sizeZ)
 * texture.needsUpdate = true
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d | WebGl2 / materials / texture3d}
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d_partialupdate | WebGl2 / materials / texture3d / partialupdate}
 * @see Example: {@link https://threejs.org/examples/#webgl2_volume_cloud | WebGl2 / volume / cloud}
 * @see Example: {@link https://threejs.org/examples/#webgl2_volume_perlin | WebGl2 / volume / perlin}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Data3dTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Data3dTexture.js | Source}
 */

objParams.data3dTexture = [...objParams.texture,
    /**
     * Create a new instance of {@link Data3dTexture}
     * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView | ArrayBufferView} of the texture. Default `null`.
     * @param width Width of the texture. Default `1`.
     * @param height Height of the texture. Default `1`.
     * @param depth Depth of the texture. Default `1`.
     */
    /**
     * Read-only flag to check if a given object is of type {@link Data3dTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
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
     * @defaultValue {@link THREE.ClampToEdgeWrapping}
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
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Data3dTexture.d.ts
/**
 * Creates a three-dimensional texture from raw data, with parameters to divide it into width, height, and depth
 * @example
 * ```typescript
 * This creates a[name] with repeating data, 0 to 255
 * // create a buffer with some data
 * const sizeX = 64,
 * const sizeY = 64,
 * const sizeZ = 64,
 * const data = new Uint8Array(sizeX * sizeY * sizeZ,
 * let i = 0,
 * for (let z = 0, z & lt, sizeZ, z++) {
 * for (let y = 0, y & lt, sizeY, y++) {
 *     for (let x = 0, x & lt, sizeX, x++) {
 *         data[i] = i % 256,
 *         i++,
 *         }
 *     }
 * }
 * // use the buffer to create the texture
 * const texture = new THREE.Data3dTexture(data, sizeX, sizeY, sizeZ,
 * texture.needsUpdate = true,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d / materials / texture3d}
 * @see Example: {@link https://threejs.org/examples/#webgl2_materials_texture3d_partialupdate / materials / texture3d / partialupdate}
 * @see Example: {@link https://threejs.org/examples/#webgl2_volume_cloud / volume / cloud}
 * @see Example: {@link https://threejs.org/examples/#webgl2_volume_perlin / volume / perlin}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Data3dTexture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/Data3dTexture.js}
 */

consParams.data3dTexture = [
    /**
     * Create a new instance of {@link Data3dTexture}
     * @param data {@link https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView} of the texture. Default `null`.
     * @param width Width of the texture. Default `1`.
     * @param height Height of the texture. Default `1`.
     * @param depth Depth of the texture. Default `1`.
     */
    'data',
    'width',
    'height',
    'depth',
].distinct()

export type Data3DTextureProps = Node<Data3DTexture, typeof Data3DTexture, { data?: BufferSource | null; width?: number; height?: number; depth?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        data3DTexture: { data?: BufferSource | null; width?: number; height?: number; depth?: number; }
    }
}

defaults.data3DTexture = {}

