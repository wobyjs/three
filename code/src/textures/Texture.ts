import { Node } from '../../three-types'
import { Texture } from 'three/src/textures/Texture.js'
import { ClampToEdgeWrapping, ColorSpace, MagnificationTextureFilter, Mapping, MinificationTextureFilter, NearestFilter, PixelFormat, RGBAFormat, TextureDataType, UnsignedByteType, UVMapping, Wrapping } from 'three/src/constants.js'
export { Texture } from 'three/src/textures/Texture.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        Texture: typeof Texture
    }
}

Three.Texture = Texture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            texture: TextureProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        texture: string[]
        eventTarget: string[]
        offscreenCanvas: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        texture: string[]
        eventTarget: string[]
        offscreenCanvas: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Texture.d.ts

consParams.eventTarget = [].distinct()
/** Shim for OffscreenCanvas. */
// eslint-disable-next-line @typescript-eslint/no-empty-interface

consParams.offscreenCanvas = [
].distinct()

/**
 * Create a {@link Texture} to apply to a surface or as a reflection or refraction map.
 * @remarks
 * After the initial use of a texture, its **dimensions**,
{@link format and {@link type} cannot be changed
 * Instead, call {@link dispose | .dispose()} on the {@link Texture} and instantiate a new {@link Texture}.
 * @example
 * ```typescript
 * // load a texture, set wrap mode to repeat
 * const texture = new THREE.TextureLoader().load("textures/water.jpg",
 * texture.wrapS = THREE.RepeatWrapping,
 * texture.wrapT = THREE.RepeatWrapping,
 * texture.repeat.set(4, 4,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_texture_filters materials texture filters}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures Constants}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Texture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/Textures/Texture.js}
 */

consParams.texture = [
    /**
     * This creates a new {@link THREE.Texture} object.
     * @param image See {@link Texture.image | .image}. Default {@link THREE.Texture.DEFAULT_IMAGE}
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param colorSpace See {@link Texture.colorSpace | .colorSpace}. Default {@link THREE.NoColorSpace}
     */

    'image',
    'mapping',
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'format',
    'type',
    'anisotropy',
    'colorSpace',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\Texture.d.ts

objParams.eventTarget = [],
    /** Shim for OffscreenCanvas. */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface    
    //@ts-ignore
    objParams.offscreenCanvas = [...objParams.eventTarget,

    ].distinct()


/**
 * Create a {@link Texture} to apply to a surface or as a reflection or refraction map.
 * @remarks
 * After the initial use of a texture, its **dimensions**, {@link format and {@link type} cannot be changed
 * Instead, call {@link dispose | .dispose()} on the {@link Texture} and instantiate a new {@link Texture}.
 * @example
 * ```typescript
 * // load a texture, set wrap mode to repeat
 * const texture = new THREE.TextureLoader().load("textures/water.jpg")
 * texture.wrapS = THREE.RepeatWrapping
 * texture.wrapT = THREE.RepeatWrapping
 * texture.repeat.set(4, 4)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_texture_filters | webgl materials texture filters}
 * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/Texture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/Textures/Texture.js | Source}
 */

objParams.texture = [
    /**
     * {@link http://en.wikipedia.org/wiki/Universally_unique_identifier | UUID} of this object instance.
     * @remarks This gets automatically assigned and shouldn't be edited.
     */
    'uuid',
    /**
     * Optional name of the object
     * @remarks _(doesn't need to be unique)_.
     * @defaultValue `""`
     */
    'name',
    /**
     * The data definition of a texture. A reference to the data source can be shared across textures.
     * This is often useful in context of spritesheets where multiple textures render the same data
     * but with different {@link Texture} transformations.
     */
    'source',
    /**
     * An image object, typically created using the {@link THREE.TextureLoader.load | TextureLoader.load()} method.
     * @remarks This can be any image (e.g., PNG, JPG, GIF, DDS) or video (e.g., MP4, OGG/OGV) type supported by three.js.
     * @remarks To use video as a {@link Texture} you need to have a playing HTML5 video element as a source
     * for your {@link Texture} image and continuously update this {@link Texture}
     * as long as video is playing - the {@link THREE.VideoTexture | VideoTexture} class handles this automatically.
     */
    'image',
    /**
     * Array of user-specified mipmaps
     * @defaultValue `[].distinct()
`
     */
    'mipmaps',
    /**
    * How the image is applied to the object.
    * @remarks All {@link Texture} types except {@link THREE.CubeTexture} expect the _values_ be {@link THREE.Mapping}
    * @remarks {@link CubeTexture} expect the _values_ be {@link THREE.CubeTextureMapping}
    * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
    * @defaultValue _value of_ {@link THREE.Texture.DEFAULT_MAPPING}
    */
    'mapping',
    /**
     * Lets you select the uv attribute to map the texture to. `0` for `uv`, `1` for `uv1`, `2` for `uv2` and `3` for
     * `uv3`.
     */
    'channel',
    /**
     * This defines how the {@link Texture} is wrapped *horizontally* and corresponds to **U** in Uv mapping.
     * @remarks for **WEBGl1** - tiling of images in textures only functions if image dimensions are powers of two
     * (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...this.) in terms of pixels.
     * Individual dimensions need not be equal, but each must be a power of two. This is a limitation of WebGl1, not three.js.
     * **WEBGl2** does not have this limitation.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link wrapT}
     * @see {@link repeat}
     * @defaultValue {@link THREE.ClampToEdgeWrapping}
     */
    'wrapS',
    /**
     * This defines how the {@link Texture} is wrapped *vertically* and corresponds to **V** in Uv mapping.
     * @remarks for **WEBGl1** - tiling of images in textures only functions if image dimensions are powers of two
     * (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, ...this.) in terms of pixels.
     * Individual dimensions need not be equal, but each must be a power of two. This is a limitation of WebGl1, not three.js.
     * **WEBGl2** does not have this limitation.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link wrapS}
     * @see {@link repeat}
     * @defaultValue {@link THREE.ClampToEdgeWrapping}
     */
    'wrapT',
    /**
     * How the {@link Texture} is sampled when a texel covers more than one pixel.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link minFilter}
     * @see {@link THREE.MagnificationTextureFilter}
     * @defaultValue {@link THREE.LinearFilter}
     */
    'magFilter',
    /**
     * How the {@link Texture} is sampled when a texel covers less than one pixel.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link magFilter}
     * @see {@link THREE.MinificationTextureFilter}
     * @defaultValue {@link THREE.LinearMipmapLinearFilter}
     */
    'minFilter',
    /**
     * The number of samples taken along the axis through the pixel that has the highest density of texels.
     * @remarks A higher value gives a less blurry result than a basic mipmap, at the cost of more {@link Texture} samples being used.
     * @remarks Use {@link THREE.webglCapabilities.getMaxAnisotropy() | renderer.capabilities.getMaxAnisotropy()} to find the maximum valid anisotropy value for the Gpu
     * @remarks This value is usually a power of 2.
     * @default _value of_ {@link THREE.Texture.DEFAULT_ANISOTROPY}. That is normally `1`.
     */
    'anisotropy',
    /**
     * These define how elements of a 2d texture, or texels, are read by shaders.
     * @remarks All {@link Texture} types except {@link THREE.DepthTexture} and {@link THREE.CompressedPixelFormat} expect the _values_ be {@link THREE.PixelFormat}
     * @remarks {@link DepthTexture} expect the _values_ be {@link THREE.CubeTextureMapping}
     * @remarks {@link CompressedPixelFormat} expect the _values_ be {@link THREE.CubeTextureMapping}
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link THREE.PixelFormat}
     * @defaultValue {@link THREE.RGBAFormat}.
     */
    'format',
    /**
     * This must correspond to the {@link Texture.format | .format}.
     * @remarks {@link THREE.UnsignedByteType is the type most used by Texture formats.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link THREE.TextureDataType}
     * @defaultValue {@link THREE.UnsignedByteType}
     */
    'type',
    /**
     * The Gpu Pixel Format allows the developer to specify how the data is going to be stored on the Gpu.
     * @remarks Compatible only with {@link WebGl2RenderingContext | WebGl 2 Rendering Context}.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @defaultValue The default value is obtained using a combination of {@link Texture.format | .format} and {@link Texture.type | .type}.
     */
    'internalFormat',
    /**
     * The uv-transform matrix for the texture.
     * @remarks
     * When {@link Texture.matrixAutoUpdate | .matrixAutoUpdate} property is `true`.
     * Will be updated by the renderer from the properties:
     *  - {@link Texture.offset | .offset}
     *  - {@link Texture.repeat | .repeat}
     *  - {@link Texture.rotation | .rotation}
     *  - {@link Texture.center | .center}
     * @remarks
     * When {@link Texture.matrixAutoUpdate | .matrixAutoUpdate} property is `false`.
     * This matrix may be set manually.
     * @see {@link matrixAutoUpdate | .matrixAutoUpdate}
     * @defaultValue `new THREE.Matrix3()`
     */
    'matrix',
    /**
     * Whether is to update the texture's uv-transform {@link matrix | .matrix}.
     * @remarks Set this to `false` if you are specifying the uv-transform {@link matrix} directly.
     * @see {@link matrix | .matrix}
     * @defaultValue `true`
     */
    'matrixAutoUpdate',
    /**
     * How much a single repetition of the texture is offset from the beginning, in each direction **U** and **V**.
     * @remarks Typical range is `0.0` to `1.0`.
     * @defaultValue `new THREE.Vector2(0, 0)`
     */
    'offset',
    /**
     * How many times the texture is repeated across the surface, in each direction **U** and **V**.
     * @remarks
     * If repeat is set greater than `1` in either direction, the corresponding *Wrap* parameter should
     * also be set to {@link THREE.RepeatWrapping} or {@link THREE.MirroredRepeatWrapping} to achieve the desired tiling effect.
     * @see {@link wrapS}
     * @see {@link wrapT}
     * @defaultValue `new THREE.Vector2( 1, 1 )`
     */
    'repeat',
    /**
     * The point around which rotation occurs.
     * @remarks A value of `(0.5, 0.5)` corresponds to the center of the texture.
     * @defaultValue `new THREE.Vector2( 0, 0 )`, _lower left._
     */
    'center',
    /**
     * How much the texture is rotated around the center point, in radians.
     * @remarks Positive values are counter-clockwise.
     * @defaultValue `0`
     */
    'rotation',
    /**
     * Whether to generate mipmaps, _(if possible)_ for a texture.
     * @remarks Set this to false if you are creating mipmaps manually.
     * @defaultValue true
     */
    'generateMipmaps',
    /**
     * If set to `true`, the alpha channel, if present, is multiplied into the color channels when the texture is uploaded to the Gpu.
     * @remarks
     * Note that this property has no effect for {@link https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap | ImageBitmap}.
     * You need to configure on bitmap creation instead. See {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
     * @see {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
     * @defaultValue `false`
     */
    'premultiplyAlpha',
    /**
     * If set to `true`, the texture is flipped along the vertical axis when uploaded to the Gpu.
     * @remarks
     * Note that this property has no effect for {@link https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap | ImageBitmap}.
     * You need to configure on bitmap creation instead. See {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
     * @see {@link THREE.ImageBitmapLoader | ImageBitmapLoader}.
     * @defaultValue `true`
     */
    'flipY',
    /**
     * Specifies the alignment requirements for the start of each pixel row in memory.
     * @remarks
     * The allowable values are:
     *  - `1` (byte-alignment)
     *  - `2` (rows aligned to even-numbered bytes)
     *  - `4` (word-alignment)
     *  - `8` (rows start on double-word boundaries).
     * @see {@link http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml | glPixelStorei} for more information.
     * @defaultValue `4`
     */
    'unpackAlignment', // TODO Fix typing to only allow the expected values.
    /**
     * The {@link Textures | {@link Texture} constants} page for details of other color spaces.
     * @remarks
     * Textures containing color data should be annotated with {@link SRGBColorSpace THREE.SRGBColorSpace} or
     * {@link LinearSRGBColorSpace THREE.LinearSRGBColorSpace}.
     * @see {@link https://threejs.org/docs/index.html#api/en/constants/Textures | Texture Constants}
     * @see {@link THREE.TextureDataType}
     * @defaultValue {@link THREE.NoColorSpace}
     */
    'colorSpace',
    /**
     * Indicates whether a texture belongs to a render target or not
     * @defaultValue `false`
     */
    'isRenderTargetTexture',
    /**
     * An object that can be used to store custom data about the texture.
     * @remarks It should not hold references to functions as these will not be cloned.
     * @defaultValue `{}`
     */
    'userData',
    /**
     * This starts at `0` and counts how many times {@link needsUpdate | .needsUpdate} is set to `true`.
     * @remarks Expects a `Integer`
     * @defaultValue `0`
     */
    'version',
    /**
     * Indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target
     * textures)
     */
    'pmremVersion',
].distinct()

export type TextureProps = Node<Texture, typeof Texture, { image?: TexImageSource | OffscreenCanvas; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; format?: PixelFormat; type?: TextureDataType; anisotropy?: number; colorSpace?: ColorSpace; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        texture: Partial<{ image?: TexImageSource | OffscreenCanvas; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; format?: PixelFormat; type?: TextureDataType; anisotropy?: number; colorSpace?: ColorSpace; }>
    }
}

defaults.texture = {
    mapping: UVMapping,
    wrapS: ClampToEdgeWrapping,
    magFilter: NearestFilter,
    anisotropy: 1,
    format: RGBAFormat,
    type: UnsignedByteType,
}