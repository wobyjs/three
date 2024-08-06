import { Node, WrapAsString } from '../../../three-types'
import { WebGLCapabilities, WebGLCapabilitiesParameters } from 'three/src/renderers/webgl/WebGLCapabilities.js'
export { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        webglCapabilities: string[]
        webglCapabilitiesParameters: WrapAsString<WebGLCapabilitiesParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglCapabilities: string[]
        webglCapabilitiesParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCapabilities.d.ts

consParams.webglCapabilitiesParameters = ([
    'precision',
    'logarithmicDepthBuffer',
] as const).toObject()


consParams.webglCapabilities = [
    'gl',
    'extensions',
    'parameters', //webglCapabilitiesParameters
].distinct()
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlCapabilities.d.ts

objParams.webglCapabilitiesParameters = [
    'precision',
    'logarithmicDepthBuffer',
].distinct()


objParams.webglCapabilities = [
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
].distinct()

export type WebGLCapabilitiesProps = Node<WebGLCapabilities, typeof WebGLCapabilities, { gl: WebGLRenderingContext; extensions: any; parameters: WebGLCapabilitiesParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLCapabilities: Partial<{ gl: WebGLRenderingContext; extensions: any; parameters: WebGLCapabilitiesParameters; }>
    }
}

defaults.webGLCapabilities = {}

