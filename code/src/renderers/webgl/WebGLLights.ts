import { Node } from '../../../three-types'
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
import { WebGLLights } from 'three/src/renderers/webgl/WebGLLights.js'
export { WebGLLights } from 'three/src/renderers/webgl/WebGLLights.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        WebGLLights: typeof WebGLLights
    }
}

Three.WebGLLights = WebGLLights

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            webglLights: WebGLLightsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        webglLights: string[]
        webglLightsState: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        webglLights: string[]
        webglLightsState: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlLights.d.ts

consParams.webglLightsState = [
    'version',
    'hash',
    'ambient',
    'probe',
    'directional',
    'directionalShadow',
    'directionalShadowMap',
    'directionalShadowMatrix',
    'spot',
    'spotShadow',
    'spotShadowMap',
    'spotShadowMatrix',
    'rectArea',
    'point',
    'pointShadow',
    'pointShadowMap',
    'pointShadowMatrix',
    'hemi',
    'numSpotLightShadowsWithMaps',
    'numLightProbes',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\renderers\webgl\WebGlLights.d.ts

objParams.webglLightsState = [
    'version',
    'hash',
    'ambient',
    'probe',
    'directional',
    'directionalShadow',
    'directionalShadowMap',
    'directionalShadowMatrix',
    'spot',
    'spotShadow',
    'spotShadowMap',
    'spotShadowMatrix',
    'rectArea',
    'point',
    'pointShadow',
    'pointShadowMap',
    'pointShadowMatrix',
    'hemi',
    'numSpotLightShadowsWithMaps',
    'numLightProbes',
].distinct()

consParams.webglLights = [
    'extensions',
    'state',
].distinct()

objParams.webglLights = [
    'state',
].distinct()

export type WebGLLightsProps = Node<WebGLLights, typeof WebGLLights, { extensions: WebGLExtensions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLLights: Partial<{ extensions: WebGLExtensions; }>
    }
}

defaults.webGLLights = {}

