import { XREstimatedLight } from 'three/examples/jsm/webxr/XREstimatedLight.js';
export * from 'three/examples/jsm/webxr/XREstimatedLight.js';
import { Three } from '../../../lib/3/three';
import { consParams } from '../../../lib/3/consParams';
import { objParams } from '../../../lib/3/objParams';
import { defaults } from '../../../lib/3/defaults';
Three.XREstimatedLight = XREstimatedLight;
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XREstimatedLight.d.ts
consParams.sessionLightProbe = [
    'xrLight',
    'renderer',
    'lightProbe',
    'environmentEstimation',
    'estimationStartCallback',
].distinct();
consParams.xrEstimatedLightEventMap = [
    /**
     * Fires when the estimated lighting values start being updated.
     */
    'estimationstart',
    /**
     * Fires when the estimated lighting values stop being updated.
     */
    'estimationend',
].distinct();
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
consParams.xrEstimatedLight = [
    /**
     * @param renderer The renderer used to render the Scene. Mainly used to interact with WebXRManager.
     * @param environmentEstimation If `true`, use WebXR to estimate an environment map.
     */
    'renderer',
    'environmentEstimation',
].distinct();
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\webxr\XREstimatedLight.d.ts
objParams.sessionLightProbe = [
    'xrLight',
    'renderer',
    'lightProbe',
    'xrWebGlBinding',
    'estimationStartCallback',
    'updateReflection',
    'onXRFrame',
    'dispose',
].distinct();
objParams.xrEstimatedLightEventMap = [...objParams.object3dEventMap,
    /**
     * Fires when the estimated lighting values start being updated.
     */
    'estimationstart',
    /**
     * Fires when the estimated lighting values stop being updated.
     */
    'estimationend',
].distinct();
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
objParams.xrEstimatedLight = [...objParams.group,
    'lightProbe',
    'directionalLight',
    /**
     * The environment map estimated by WebXR. This is only available if environmentEstimation is `true`.
     *
     * It can be used as the {@link Scene.environment for {@link MeshStandardMaterial.envMap or as the
     * {@link Scene.background}.
     */
    'environment',
].distinct();
defaults.xrEstimatedLight = { environmentEstimation: true };
