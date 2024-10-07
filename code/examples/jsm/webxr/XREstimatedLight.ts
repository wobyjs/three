import { Node } from '../../../three-types'
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer.js'
import { XREstimatedLight } from 'three/examples/jsm/webxr/XREstimatedLight.js'
export * from 'three/examples/jsm/webxr/XREstimatedLight.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        XREstimatedLight: typeof XREstimatedLight
    }
}

Three.XREstimatedLight = XREstimatedLight

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            xrEstimatedLight: XREstimatedLightProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        xrEstimatedLight: typeof xrEstimatedLight
        sessionLightProbe: typeof sessionLightProbe
        xrEstimatedLightEventMap: typeof xrEstimatedLightEventMap
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        xrEstimatedLight: typeof _xrEstimatedLight
        sessionLightProbe: typeof _sessionLightProbe
        xrEstimatedLightEventMap: typeof _xrEstimatedLightEventMap
    }
}



const sessionLightProbe = ([

    'xrLight',
    'renderer',
    'lightProbe',
    'environmentEstimation',
    'estimationStartCallback',
] as const).distinct()
consParams.sessionLightProbe = sessionLightProbe


const xrEstimatedLightEventMap = ([
    /**
     * Fires when the estimated lighting values start being updated.
     */
    'estimationstart',
    /**
     * Fires when the estimated lighting values stop being updated.
     */
    'estimationend',
] as const).distinct()
consParams.xrEstimatedLightEventMap = xrEstimatedLightEventMap

/**
 * XREstimatedLight uses WebXR's light estimation to create a light probe, a directional light, and (optionally) an
 * environment map that model the user's real-world environment and lighting.
 * As WebXR updates the light and environment estimation, XREstimatedLight automatically updates the light probe,
 * directional light, and environment map.
 *
 * It's important to specify `light-estimation` as an optional or required feature when creating the WebXR session,
 * otherwise the light estimation can't work.
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/XRLightProbe#browser_compatibility here} for browser
 * compatibility information, as this.is still an experimental feature in WebXR.
 *
 * To use this, as with all files in the /examples directory, you will have to include the file separately in your HTML.
 */

const xrEstimatedLight = ([
    /**
     * @param renderer The renderer used to render the Scene. Mainly used to interact with WebXRManager.
     * @param environmentEstimation If `true`, use WebXR to estimate an environment map.
     */
    'renderer',
    'environmentEstimation',
] as const).distinct()
consParams.xrEstimatedLight = xrEstimatedLight



const _sessionLightProbe = ([
    'xrLight',
    'renderer',
    'lightProbe',
    'xrWebGlBinding',
    'estimationStartCallback',
    'updateReflection',
    'onXRFrame',
    'dispose',
] as const).distinct()
objProps.sessionLightProbe = _sessionLightProbe

const _xrEstimatedLightEventMap = ([...objProps.object3dEventMap,
    /**
     * Fires when the estimated lighting values start being updated.
     */
    'estimationstart',
    /**
     * Fires when the estimated lighting values stop being updated.
     */
    'estimationend',
] as const).distinct()
objProps.xrEstimatedLightEventMap = _xrEstimatedLightEventMap

/**
 * XREstimatedLight uses WebXR's light estimation to create a light probe, a directional light, and (optionally) an
 * environment map that model the user's real-world environment and lighting.
 * As WebXR updates the light and environment estimation, XREstimatedLight automatically updates the light probe,
 * directional light, and environment map.
 *
 * It's important to specify `light-estimation` as an optional or required feature when creating the WebXR session,
 * otherwise the light estimation can't work.
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/XRLightProbe#browser_compatibility here} for browser
 * compatibility information, as this is still an experimental feature in WebXR.
 *
 * To use this, as with all files in the /examples directory, you will have to include the file separately in your HTML.
 */

const _xrEstimatedLight = ([...objProps.group,
    'lightProbe',
    'directionalLight',
    /**
     * The environment map estimated by WebXR. This is only available if environmentEstimation is `true`.
     *
     * It can be used as the {@link Scene.environment for {@link MeshStandardMaterial.envMap or as the
     * {@link Scene.background}.
     */
    'environment',
] as const).distinct()
objProps.xrEstimatedLight = _xrEstimatedLight

export type XREstimatedLightProps = Node<XREstimatedLight, typeof XREstimatedLight, { renderer: WebGLRenderer; environmentEstimation?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        xrEstimatedLight: Partial<{ renderer: WebGLRenderer; environmentEstimation?: boolean; }>
    }
}

defaults.xrEstimatedLight = { environmentEstimation: true }
