/** @jsxImportSource @woby/three */

import { $, $$, useFrame } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/examples/jsm/controls/OrbitControls'
import { Color, ShaderMaterial, Vector3, ACESFilmicToneMapping } from 'three'
import * as THREE from 'three'

// Import wrappers for registration
import '@woby/three/src/geometries/SphereGeometry'
import '@woby/three/src/materials/ShaderMaterial'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/scenes/Scene'

/**
 * Port of webgl_shaders_sky from Three.js examples.
 * Demonstrates procedural sky shader.
 *
 * Source: https://threejs.org/examples/webgl_shaders_sky.html
 *
 * Key features:
 * - Atmospheric scattering
 * - Sun position control
 * - Procedural sky rendering
 */

const skyVertexShader = `
varying vec3 vWorldPosition;

void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const skyFragmentShader = `
uniform vec3 uSunPosition;
uniform float uRayleigh;
uniform float uTurbidity;
uniform float uMieCoefficient;
uniform float uMieDirectionalG;

varying vec3 vWorldPosition;

const vec3 up = vec3(0.0, 1.0, 0.0);

const float e = 2.71828182845904523536028747135266249775724709369995957;
const float pi = 3.141592653589793238462643383279502884197169;
const float n = 1.0003; // refractive index of air
const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level - 15C)
const float pn = 0.035; // depolarization factor for air

const float lambda = vec3(680E-9, 550E-9, 450E-9); // wavelength of primary colors
const vec3 K = vec3(0.686, 0.678, 0.666); // Mie coefficient

const float v = 4.0;

const float rayleighZenithLength = 8.4E3;
const float mieZenithLength = 1.25E3;

const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;
const float cutoffAngle = pi / 1.95;
const float steepness = 1.5;

vec3 totalRayleigh(vec3 lambda) {
    return (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn));
}

vec3 totalMie(vec3 lambda, vec3 K, float T) {
    float c = (0.2 * T) * 10E-18;
    return 0.434 * c * pi * pow((2.0 * pi) / lambda, vec3(v - 2.0)) * K;
}

float rayleighPhase(float cosTheta) {
    return (3.0 / (16.0 * pi)) * (1.0 + pow(cosTheta, 2.0));
}

float hgPhase(float cosTheta, float g) {
    return (1.0 / (4.0 * pi)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));
}

float sunIntensity(float zenithAngleCos) {
    return max(0.0, 1.0 - exp(-((cutoffAngle - acos(zenithAngleCos)) / steepness)));
}

void main() {
    vec3 direction = normalize(vWorldPosition);

    // Rayleigh and Mie coefficients
    float sunfade = 1.0 - clamp(1.0 - exp((uSunPosition.y / 450000.0)), 0.0, 1.0);
    float rayleighCoefficient = uRayleigh - (1.0 * (1.0 - sunfade));
    vec3 betaR = totalRayleigh(lambda) * rayleighCoefficient;
    vec3 betaM = totalMie(lambda, K, uTurbidity) * uMieCoefficient;

    // Optical length
    float zenithAngle = acos(max(0.0, dot(up, direction)));
    float sR = rayleighZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));
    float sM = mieZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));

    // Combined extinction factor
    vec3 Fex = exp(-(betaR * sR + betaM * sM));

    // In-scattering
    vec3 sunDirection = normalize(uSunPosition);
    float cosTheta = dot(direction, sunDirection);

    vec3 betaRTheta = betaR * rayleighPhase(cosTheta * 0.5 + 0.5);
    vec3 betaMTheta = betaM * hgPhase(cosTheta, uMieDirectionalG);

    vec3 Lin = pow(sunIntensity(dot(sunDirection, up)), 1.0) * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex);

    // Nightsky
    vec3 L0 = vec3(0.1) * Fex;

    // Sun disk
    float sundisk = smoothstep(sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta);
    L0 += (sunIntensity(dot(sunDirection, up)) * 19000.0 * Fex) * sundisk;

    vec3 color = (Lin + L0) * 0.04 + vec3(0.0, 0.0003, 0.00075);

    vec3 retColor = pow(color, vec3(1.0 / 2.2));

    gl_FragColor = vec4(retColor, 1.0);
}
`

export const ShadersSky = () => {
    const materialRef = $<THREE.ShaderMaterial>()
    const sunPosition = new Vector3()

    useFrame(({ clock }) => {
        const material = $$(materialRef)
        if (material && material.uniforms) {
            // Animate sun position
            const time = clock.getElapsedTime() * 0.1
            sunPosition.set(
                Math.cos(time) * 400000,
                Math.sin(time) * 400000 + 400000,
                -Math.sin(time) * 400000
            )
            material.uniforms.uSunPosition.value.copy(sunPosition)
        }
    })

    return (
        <canvas3D>
            <webGLRenderer
                antialias
                setPixelRatio={[window.devicePixelRatio]}
                setSize={[window.innerWidth, window.innerHeight]}
                toneMapping={ACESFilmicToneMapping}
            />
            <scene>
                {/* Sky sphere with custom shader */}
                <mesh>
                    <sphereGeometry args={[1000, 32, 32]} />
                    <shaderMaterial
                        ref={materialRef}
                        vertexShader={skyVertexShader}
                        fragmentShader={skyFragmentShader}
                        uniforms={{
                            uSunPosition: { value: new Vector3(0, 400000, 0) },
                            uRayleigh: { value: 2 },
                            uTurbidity: { value: 10 },
                            uMieCoefficient: { value: 0.005 },
                            uMieDirectionalG: { value: 0.8 }
                        }}
                        side={THREE.BackSide}
                    />
                </mesh>
            </scene>

            <perspectiveCamera
                fov={60}
                aspect={window.innerWidth / window.innerHeight}
                near={1}
                far={2000}
                position={[0, 100, 0]}
            />
            <orbitControls enableDamping />
        </canvas3D>
    )
}

export default ShadersSky
