import { LightNode } from './LightNode'
import { SphericalHarmonics3 } from 'three/src/math/SphericalHarmonics3.js'
import { LightProbe } from 'three/src/lights/LightProbe.js'
export { LightProbe } from 'three/src/lights/LightProbe.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Light'

declare module '../../lib/3/three'
{
    interface Three {
        LightProbe: typeof LightProbe
    }
}

Three.LightProbe = LightProbe

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightProbe: LightProbeProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        lightProbe: typeof lightProbe
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        lightProbe: typeof _lightProbe
    }
}


/**
 * Light probes are an alternative way of adding light to a 3d scene.
 * @remarks
 * Unlike classical light sources (e.g
 * directional, point or spot lights), light probes do not emit light
 * Instead they store information about light passing through 3d space
 * During rendering, the light that hits a 3d object is approximated by using the data from the light probe.
 * Light probes are usually created from (radiance) environment maps
 * The class {@link THREE.LightProbeGenerator} can be used to create light probes from
 * instances of {@link THREE.CubeTexture} or {@link THREE.WebGlCubeRenderTarget}
 * However, light estimation data could also be provided in other forms e.g
 * by WebXR
 * This enables the rendering of augmented reality content that reacts to real world lighting.
 * The current probe implementation in three.js supports so-called diffuse light probes
 * This type of light probe is functionally equivalent to an irradiance environment map.
 * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe / light probe }
 * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe_cubecamera / light probe / cube camera }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/LightProbe Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightProbe.js}
 */

const lightProbe = ([
    /**
     * Creates a new LightProbe.
     * @param sh An instance of {@link THREE.SphericalHarmonics3}. Default `new THREE.SphericalHarmonics3()``.
     * @param intensity Numeric value of the light probe's intensity. Expects a `Float`. Default `1`.
     */
    'sh',
    'intensity',
    /**
     * Read-only flag to check if a given object is of type {@link DirectionalLight}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    /**
     * A light probe uses spherical harmonics to encode lighting information.
     * @defaultValue `new THREE.SphericalHarmonics3()`
     */
    'sh',
] as const).distinct()
consParams.lightProbe = lightProbe


/**
 * Light probes are an alternative way of adding light to a 3d scene.
 * @remarks
 * Unlike classical light sources (e.g
 * directional, point or spot lights), light probes do not emit light
 * Instead they store information about light passing through 3d space
 * During rendering, the light that hits a 3d object is approximated by using the data from the light probe.
 * Light probes are usually created from (radiance) environment maps
 * The class {@link THREE.LightProbeGenerator | LightProbeGenerator} can be used to create light probes from
 * instances of {@link THREE.CubeTexture | CubeTexture} or {@link THREE.webglCubeRenderTarget | WebGlCubeRenderTarget}
 * However, light estimation data could also be provided in other forms e.g
 * by WebXR
 * This enables the rendering of augmented reality content that reacts to real world lighting.
 * The current probe implementation in three.js supports so-called diffuse light probes
 * This type of light probe is functionally equivalent to an irradiance environment map.
 * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe | WebGl / light probe }
 * @see Example: {@link https://threejs.org/examples/#webgl_lightprobe_cubecamera | WebGl / light probe / cube camera }
 * @see {@link https://threejs.org/docs/index.html#api/en/lights/LightProbe | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/lights/LightProbe.js | Source}
 */

const _lightProbe = ([...objProps.light,
    /**
     * A light probe uses spherical harmonics to encode lighting information.
     * @defaultValue `new THREE.SphericalHarmonics3()`
     */
    'sh',
] as const).distinct()
objProps.lightProbe = _lightProbe

export type LightProbeProps = LightNode<LightProbe, typeof LightProbe, { sh?: SphericalHarmonics3; intensity?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        lightProbe: { sh?: SphericalHarmonics3; intensity?: number; }
    }
}

defaults.lightProbe = { /* sh: () => new SphericalHarmonics3(), */ intensity: 1 }
