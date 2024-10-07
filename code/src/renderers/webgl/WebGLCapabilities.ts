import { Node, WrapAsString } from '../../../three-types'
import { WebGLCapabilities, WebGLCapabilitiesParameters } from 'three/src/renderers/webgl/WebGLCapabilities.js'
export { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLCapabilities: typeof WebGLCapabilities
    }
}

Three.WebGLCapabilities = WebGLCapabilities

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglCapabilities: WebGLCapabilitiesProps,
            webglCapabilitiesParameters: WrapAsString<WebGLCapabilitiesParameters>
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglCapabilities: typeof webglCapabilities
        webglCapabilitiesParameters: WrapAsString<WebGLCapabilitiesParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglCapabilities: typeof _webglCapabilities
        webglCapabilitiesParameters: typeof _webglCapabilitiesParameters
    }
}



consParams.webglCapabilitiesParameters = ([
    'precision',
    'logarithmicDepthBuffer',
] as const).toObject()


const webglCapabilities = ([
    'gl',
    'extensions',
    'parameters', //webglCapabilitiesParameters
] as const).distinct()
consParams.webglCapabilities = webglCapabilities


const _webglCapabilitiesParameters = ([
    'precision',
    'logarithmicDepthBuffer',
] as const).distinct()
objProps.webglCapabilitiesParameters = _webglCapabilitiesParameters


const _webglCapabilities = ([
    'getMaxAnisotropy',
    'getMaxPrecision',
    'textureFormatReadable',
    'textureTypeReadable',
    'precision',
    'logarithmicDepthBuffer',
    'maxTextures',
    'maxVertexTextures',
    'maxTextureSize',
    'maxCubemapSize',
    'maxAttributes',
    'maxVertexUniforms',
    'maxVaryings',
    'maxFragmentUniforms',
    'vertexTextures',
    'maxSamples',
] as const).distinct()
objProps.webglCapabilities = _webglCapabilities

export type WebGLCapabilitiesProps = Node<WebGLCapabilities, typeof WebGLCapabilities, { gl: WebGLRenderingContext; extensions: any; parameters: WebGLCapabilitiesParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLCapabilities: Partial<{ gl: WebGLRenderingContext; extensions: any; parameters: WebGLCapabilitiesParameters; }>
    }
}

defaults.webGLCapabilities = {}

