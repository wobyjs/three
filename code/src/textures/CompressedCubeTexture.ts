// import { CompressedPixelFormat, TextureDataType } from "../constants.js";
// import { CompressedCubeTexture } from "./CompressedCubeTexture.js";

// export class CompressedCubeTexture extends CompressedCubeTexture {
//     readonly isCompressedCubeTexture: true;
//     readonly isCubeTexture: true;

//     constructor(
//         images: Array<{ width: number; height: number }>,
//         format?: CompressedPixelFormat,
//         type?: TextureDataType,
//     );
// }

import { Node } from '../../three-types'
import { ColorSpace, CompressedPixelFormat, MagnificationTextureFilter, Mapping, MinificationTextureFilter, TextureDataType, Wrapping } from 'three/src/constants.js'
import { CompressedCubeTexture } from 'three/src/textures/CompressedCubeTexture.js'
export { CompressedCubeTexture } from 'three/src/textures/CompressedCubeTexture.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './CompressedTexture'

declare module '../../lib/3/three'
{
    interface Three {
        CompressedCubeTexture: typeof CompressedCubeTexture
    }
}

Three.CompressedCubeTexture = CompressedCubeTexture

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            compressedCubeTexture: CompressedCubeTextureProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        compressedCubeTexture: typeof compressedCubeTexture
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        compressedCubeTexture: typeof _compressedCubeTexture
    }
}



const compressedCubeTexture = ([
    'images',
    'format',
    'type',
] as const).distinct()
consParams.compressedCubeTexture = compressedCubeTexture



const _compressedCubeTexture = ([...objProps.compressedTexture,
] as const).distinct()
objProps.compressedCubeTexture = _compressedCubeTexture


export type CompressedCubeTextureProps = Node<CompressedCubeTexture, typeof CompressedCubeTexture, { mipmaps: ImageData[]; width: number; height: number; format: CompressedPixelFormat; type?: TextureDataType; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; anisotropy?: number; colorSpace?: ColorSpace; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        compressedCubeTexture: Partial<{ mipmaps: ImageData[]; width: number; height: number; format: CompressedPixelFormat; type?: TextureDataType; mapping?: Mapping; wrapS?: Wrapping; wrapT?: Wrapping; magFilter?: MagnificationTextureFilter; minFilter?: MinificationTextureFilter; anisotropy?: number; colorSpace?: ColorSpace; }>
    }
}

defaults.compressedCubeTexture = {}

