import { Node, WrapAsString } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js'
import { WebGLClipping } from 'three/src/renderers/webgl/WebGLClipping.js'
import { WebGLBindingStates } from 'three/src/renderers/webgl/WebGLBindingStates.js'
import { WebGLCubeMaps } from 'three/src/renderers/webgl/WebGLCubeMaps.js'
import { WebGLProgramParameters, WebGLPrograms } from 'three/src/renderers/webgl/WebGLPrograms.js'
export { WebGLPrograms } from 'three/src/renderers/webgl/WebGLPrograms.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLPrograms: typeof WebGLPrograms
    }
}

Three.WebGLPrograms = WebGLPrograms

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglPrograms: WebGLProgramsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglProgramParametersWithUniforms: string[]
        webglPrograms: string[]
        webglProgramParameters: WrapAsString<WebGLProgramParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglPrograms: string[]
        webglProgramParametersWithUniforms: string[]
        webglProgramParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlPrograms.d.ts

consParams.webglProgramParameters = ([
    'shaderID',
    'shaderType',
    'shaderName',
    'vertexShader',
    'fragmentShader',
    'defines',
    'customVertexShaderID',
    'customFragmentShaderID',
    'isRawShaderMaterial',
    'glslVersion',
    'precision',
    'batching',
    'batchingColor',
    'instancing',
    'instancingColor',
    'instancingMorph',
    'supportsVertexTextures',
    'outputColorSpace',
    'alphaToCoverage',
    'map',
    'matcap',
    'envMap',
    'envMapMode',
    'envMapCubeUVHeight',
    'aoMap',
    'lightMap',
    'bumpMap',
    'normalMap',
    'displacementMap',
    'emissiveMap',
    'normalMapObjectSpace',
    'normalMapTangentSpace',
    'metalnessMap',
    'roughnessMap',
    'anisotropy',
    'anisotropyMap',
    'clearcoat',
    'clearcoatMap',
    'clearcoatNormalMap',
    'clearcoatRoughnessMap',
    'dispersion',
    'iridescence',
    'iridescenceMap',
    'iridescenceThicknessMap',
    'sheen',
    'sheenColorMap',
    'sheenRoughnessMap',
    'specularMap',
    'specularColorMap',
    'specularIntensityMap',
    'transmission',
    'transmissionMap',
    'thicknessMap',
    'gradientMap',
    'opaque',
    'alphaMap',
    'alphaTest',
    'alphaHash',
    'combine',
    //
    'mapUv',
    'aoMapUv',
    'lightMapUv',
    'bumpMapUv',
    'normalMapUv',
    'displacementMapUv',
    'emissiveMapUv',
    'metalnessMapUv',
    'roughnessMapUv',
    'anisotropyMapUv',
    'clearcoatMapUv',
    'clearcoatNormalMapUv',
    'clearcoatRoughnessMapUv',
    'iridescenceMapUv',
    'iridescenceThicknessMapUv',
    'sheenColorMapUv',
    'sheenRoughnessMapUv',
    'specularMapUv',
    'specularColorMapUv',
    'specularIntensityMapUv',
    'transmissionMapUv',
    'thicknessMapUv',
    'alphaMapUv',
    //
    'vertexTangents',
    'vertexColors',
    'vertexAlphas',
    'vertexUv1s',
    'vertexUv2s',
    'vertexUv3s',
    'pointsUvs',
    'fog',
    'useFog',
    'fogExp2',
    'flatShading',
    'sizeAttenuation',
    'logarithmicDepthBuffer',
    'skinning',
    'morphTargets',
    'morphNormals',
    'morphColors',
    'morphTargetsCount',
    'morphTextureStride',
    'numDirLights',
    'numPointLights',
    'numSpotLights',
    'numSpotLightMaps',
    'numRectAreaLights',
    'numHemiLights',
    'numDirLightShadows',
    'numPointLightShadows',
    'numSpotLightShadows',
    'numSpotLightShadowsWithMaps',
    'numLightProbes',
    'numClippingPlanes',
    'numClipIntersection',
    'dithering',
    'shadowMapEnabled',
    'shadowMapType',
    'toneMapping',
    'useLegacyLights',
    'decodeVideoTexture',
    'premultipliedAlpha',
    'doubleSided',
    'flipSided',
    'useDepthPacking',
    'depthPacking',
    'index0AttributeName',
    'extensionClipCullDistance',
    'extensionMultiDraw',
    'rendererExtensionParallelShaderCompile',
    'customProgramCacheKey',
] as const).toObject()


consParams.webglProgramParametersWithUniforms = [
    'uniforms',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlPrograms.d.ts

objParams.webglProgramParameters = [
    'shaderID',
    'shaderType',
    'shaderName',
    'vertexShader',
    'fragmentShader',
    'defines',
    'customVertexShaderID',
    'customFragmentShaderID',
    'isRawShaderMaterial',
    'glslVersion',
    'precision',
    'batching',
    'instancing',
    'instancingColor',
    'instancingMorph',
    'supportsVertexTextures',
    'outputColorSpace',
    'alphaToCoverage',
    'map',
    'matcap',
    'envMap',
    'envMapMode',
    'envMapCubeUvHeight',
    'aoMap',
    'lightMap',
    'bumpMap',
    'normalMap',
    'displacementMap',
    'emissiveMap',
    'normalMapObjectSpace',
    'normalMapTangentSpace',
    'metalnessMap',
    'roughnessMap',
    'anisotropy',
    'anisotropyMap',
    'clearcoat',
    'clearcoatMap',
    'clearcoatNormalMap',
    'clearcoatRoughnessMap',
    'dispersion',
    'iridescence',
    'iridescenceMap',
    'iridescenceThicknessMap',
    'sheen',
    'sheenColorMap',
    'sheenRoughnessMap',
    'specularMap',
    'specularColorMap',
    'specularIntensityMap',
    'transmission',
    'transmissionMap',
    'thicknessMap',
    'gradientMap',
    'opaque',
    'alphaMap',
    'alphaTest',
    'alphaHash',
    'combine',
    //
    'mapUv',
    'aoMapUv',
    'lightMapUv',
    'bumpMapUv',
    'normalMapUv',
    'displacementMapUv',
    'emissiveMapUv',
    'metalnessMapUv',
    'roughnessMapUv',
    'anisotropyMapUv',
    'clearcoatMapUv',
    'clearcoatNormalMapUv',
    'clearcoatRoughnessMapUv',
    'iridescenceMapUv',
    'iridescenceThicknessMapUv',
    'sheenColorMapUv',
    'sheenRoughnessMapUv',
    'specularMapUv',
    'specularColorMapUv',
    'specularIntensityMapUv',
    'transmissionMapUv',
    'thicknessMapUv',
    'alphaMapUv',
    //
    'vertexTangents',
    'vertexColors',
    'vertexAlphas',
    'vertexUv1s',
    'vertexUv2s',
    'vertexUv3s',
    'pointsUvs',
    'fog',
    'useFog',
    'fogExp2',
    'flatShading',
    'sizeAttenuation',
    'logarithmicDepthBuffer',
    'skinning',
    'morphTargets',
    'morphNormals',
    'morphColors',
    'morphTargetsCount',
    'morphTextureStride',
    'numDirLights',
    'numPointLights',
    'numSpotLights',
    'numSpotLightMaps',
    'numRectAreaLights',
    'numHemiLights',
    'numDirLightShadows',
    'numPointLightShadows',
    'numSpotLightShadows',
    'numSpotLightShadowsWithMaps',
    'numLightProbes',
    'numClippingPlanes',
    'numClipIntersection',
    'dithering',
    'shadowMapEnabled',
    'shadowMapType',
    'toneMapping',
    'useLegacyLights',
    'decodeVideoTexture',
    'premultipliedAlpha',
    'doubleSided',
    'flipSided',
    'useDepthPacking',
    'depthPacking',
    'index0AttributeName',
    'extensionClipCullDistance',
    'extensionMultiDraw',
    'rendererExtensionParallelShaderCompile',
    'customProgramCacheKey',
].distinct()


consParams.webglPrograms = [
    'renderer',
    'cubemaps',
    'extensions',
    'capabilities',
    'bindingStates',
    'clipping',
    ,
].distinct()


objParams.webglProgramParametersWithUniforms = [...objParams.webglProgramParameters,
    'uniforms',
].distinct()



objParams.webglPrograms = [
    'programs',
].distinct()

export type WebGLProgramsProps = Node<WebGLPrograms, typeof WebGLPrograms, { renderer: WebGLRenderer; cubemaps: WebGLCubeMaps; extensions: WebGLExtensions; capabilities: WebGLCapabilities; bindingStates: WebGLBindingStates; clipping: WebGLClipping; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLPrograms: Partial<{ renderer: WebGLRenderer; cubemaps: WebGLCubeMaps; extensions: WebGLExtensions; capabilities: WebGLCapabilities; bindingStates: WebGLBindingStates; clipping: WebGLClipping; }>
    }
}

defaults.webGLPrograms = {}

