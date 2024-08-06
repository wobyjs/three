import { Node } from '../../three-types'
import { VideoTexture } from 'three/src/textures/VideoTexture.js'
import {
    ClampToEdgeWrapping, LinearFilter, MagnificationTextureFilter, Mapping, MinificationTextureFilter, PixelFormat,
    RGBAFormat, TextureDataType, UnsignedByteType, Wrapping
} from 'three/src/constants.js'
export { VideoTexture } from 'three/src/textures/VideoTexture.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Texture'

declare module '../../lib/3/three'
{
    interface Three {
        VideoTexture: typeof VideoTexture
    }
}

Three.VideoTexture = VideoTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            videoTexture: VideoTextureProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        videoTexture: string[]
        textureImageData: string[]
        texture3dImageData: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        videoTexture: string[]
        textureImageData: string[]
        texture3dImageData: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\types.d.ts

consParams.textureImageData = [
    'data',
    'height',
    'width',
].distinct()


consParams.texture3dImageData = [
    'depth',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\VideoTexture.d.ts
/**
 * Creates a texture for use with a video.
 * @remarks
 * Note the initial use of a texture, the video cannot be changed
 * Instead, call {@link dispose | .dispose()} on the texture and instantiate a new one.
 * @example
 * ```typescript
 * // assuming you have created a HTML video element with id="video"
 * const video = document.getElementById('video',
 * const texture = new THREE.VideoTexture(video,
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_video / video}
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_video_webcam / video / webcam}
 * @see Example: {@link https://threejs.org/examples/#webgl_video_kinect / kinect}
 * @see Example: {@link https://threejs.org/examples/#webgl_video_panorama_equirectangular / panorama / equirectangular}
 * @see Example: {@link https://threejs.org/examples/#webxr_vr_video / video}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/VideoTexture Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/VideoTexture.js}
 */

consParams.videoTexture = [
    /**
     * Create a new instance of {@link VideoTexture}
     * @param video The video element to use as the texture.
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearFilter}
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     */

    'video',
    'mapping',
    'wrapS',
    'wrapT',
    'magFilter',
    'minFilter',
    'format',
    'type',
    'anisotropy',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\types.d.ts    

objParams.textureImageData = [
    'data',
    'height',
    'width',
].distinct()



objParams.texture3dImageData = [...objParams.textureImageData,
    'depth',
].distinct()


//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\textures\VideoTexture.d.ts
/**
 * Creates a texture for use with a video.
 * @remarks
 * Note: After the initial use of a texture, the video cannot be changed
 * Instead, call {@link dispose | .dispose()} on the texture and instantiate a new one.
 * @example
 * ```typescript
 * // assuming you have created a HTML video element with id="video"
 * const video = document.getElementById('video')
 * const texture = new THREE.VideoTexture(video)
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_video | materials / video}
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_video_webcam | materials / video / webcam}
 * @see Example: {@link https://threejs.org/examples/#webgl_video_kinect | video / kinect}
 * @see Example: {@link https://threejs.org/examples/#webgl_video_panorama_equirectangular | video / panorama / equirectangular}
 * @see Example: {@link https://threejs.org/examples/#webxr_vr_video | vr / video}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/VideoTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/VideoTexture.js | Source}
 */

objParams.videoTexture = [...objParams.texture,
    /**
     * @override
     * @defaultValue {@link THREE.LinearFilter}
     */
    'magFilter',
    /**
     * @override
     * @defaultValue {@link THREE.LinearFilter}
     */
    'minFilter',
    /**
     * @override
     * @defaultValue `false`
     */
    'generateMipmaps',
].distinct()

export type VideoTextureProps = Node<VideoTexture, typeof VideoTexture, { video: HTMLVideoElement; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; format?: PixelFormat; type?: TextureDataType; anisotropy?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        videoTexture: Partial<{ video: HTMLVideoElement; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; format?: PixelFormat; type?: TextureDataType; anisotropy?: number; }>
    }
}

defaults.videoTexture = {
    wrapS: ClampToEdgeWrapping,
    wrapT: ClampToEdgeWrapping,
    magFilter: LinearFilter,
    minFilter: LinearFilter,
    format: RGBAFormat,
    type: UnsignedByteType,
    anisotropy: 1,
}
