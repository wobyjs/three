import { Node } from '../../three-types'
import {
    ClampToEdgeWrapping, DepthFormat, DepthTexturePixelFormat, MagnificationTextureFilter, Mapping,
    MinificationTextureFilter, NearestFilter, TextureDataType, UnsignedIntType, Wrapping
} from 'three/src/constants.js'
import { DepthTexture } from 'three/src/textures/DepthTexture.js'
export { DepthTexture } from 'three/src/textures/DepthTexture.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        DepthTexture: typeof DepthTexture
    }
}

Three.DepthTexture = DepthTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            depthTexture: DepthTextureProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        depthTexture: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        depthTexture: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DepthTexture.d.ts
/**
 * This class can be used to automatically save the depth information of a rendering into a texture
 * @see Example: {@link https://threejs.org/examples/#webgl_depth_texture / texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DepthTexture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DepthTexture.js}
 */

consParams.depthTexture = [
    /**
     * Create a new instance of {@link DepthTexture}
     * @param width Width of the texture.
     * @param height Height of the texture.
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType} or {@link THREE.UnsignedInt248Type}
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.NearestFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.NearestFilter}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param format See {@link DepthTexture.format | .format}. Default {@link THREE.DepthFormat}
     */

    'width',
    'height',
    'type',
    'mapping',
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'anisotropy',
    'format',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\DepthTexture.d.ts
/**
 * This class can be used to automatically save the depth information of a rendering into a texture
 * @see Example: {@link https://threejs.org/examples/#webgl_depth_texture | depth / texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DepthTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DepthTexture.js | Source}
 */

objParams.depthTexture = [...objParams.texture,
    /**
     * Overridden with a record type holding width and height.
     * @override
     */
    'image',
    /**
     * @override
     * @defaultValue `false`
     */
    'flipY',
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
     * @override Depth textures do not use mipmaps.
     * @defaultValue `false`
     */
    'generateMipmaps',
    /**
     * @override
     * @see {@link Texture.format | Texture.format}
     * @defaultValue {@link THREE.DepthFormat}.
     */
    'format',
    /**
     * @override
     * @defaultValue {@link THREE.UnsignedByteType} when {@link format | .format} === {@link THREE.DepthFormat}
     * @defaultValue {@link THREE.UnsignedInt248Type} when {@link format | .format} === {@link THREE.DepthStencilFormat}
     */
    'type',
    /**
     * This is used to define the comparison function used when comparing texels in the depth texture to the value in
     * the depth buffer. Default is `null` which means comparison is disabled.
     *
     * See {@link THREE.TextureComparisonFunction} for functions.
     */
    'compareFunction',
].distinct()

export type DepthTextureProps = Node<DepthTexture, typeof DepthTexture, { width: number; height: number; type?: TextureDataType; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; anisotropy?: number; format?: DepthTexturePixelFormat; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        depthTexture: Partial<{ width: number; height: number; type?: TextureDataType; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; anisotropy?: number; format?: DepthTexturePixelFormat; }>
    }
}

defaults.depthTexture = {
    type: UnsignedIntType,
    wrapS: ClampToEdgeWrapping,
    wrapT: ClampToEdgeWrapping,
    magFilter: NearestFilter,
    minFilter: NearestFilter,
    anisotropy: 1,
    format: DepthFormat,
}
