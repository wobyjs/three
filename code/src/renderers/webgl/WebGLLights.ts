import { Node } from '../../../three-types'
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js'
import { WebGLLights } from 'three/src/renderers/webgl/WebGLLights.js'
export { WebGLLights } from 'three/src/renderers/webgl/WebGLLights.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        webglLights: typeof webglLights
        webglLightsState: typeof _webglLightsState
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        webglLights: typeof _webglLights
        webglLightsState: typeof _webglLightsState
    }
}



const webglLightsState = ([
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
] as const).distinct()
consParams.webglLightsState = webglLightsState



const _webglLightsState = ([
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
] as const).distinct()
objProps.webglLightsState = _webglLightsState

const webglLights = ([
    'extensions',
    'state',
] as const).distinct()
consParams.webglLights = webglLights

const _webglLights = ([
    'state',
] as const).distinct()
objProps.webglLights = _webglLights

export type WebGLLightsProps = Node<WebGLLights, typeof WebGLLights, { extensions: WebGLExtensions; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        webGLLights: Partial<{ extensions: WebGLExtensions; }>
    }
}

defaults.webGLLights = {}

